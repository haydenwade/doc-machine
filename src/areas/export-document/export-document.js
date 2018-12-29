import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import fetchTemplate from '../../store/templates/thunk';

//https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
//http://html2canvas.hertzen.com/proxy
//https://github.com/MrRio/jsPDF
//https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

const pxToMm = (px) => {
    return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
    return document.getElementById('myMm').offsetHeight*mm;
};

const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};
const exportDoc = ()=>{
setTimeout(()=>{
    const id = 'doc-container';
    const input = document.getElementById(id);
    const inputHeightMm = pxToMm(input.offsetHeight);
    const a4WidthMm = 210;
    const a4HeightMm = 297; 
    const a4HeightPx = mmToPx(a4HeightMm); 
    const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
    console.log({
        input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: range(0, numPages), 
        comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
    });
    html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png');
        // Document of a4WidthMm wide and inputHeightMm high
        let pdf = undefined;
        if (inputHeightMm > a4HeightMm) {
            // elongated a4 (system print dialog will handle page breaks)
            pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
        } else {
            // standard a4
            pdf = new jsPDF();
        }
        
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save(`docmachinedoc.pdf`);
    });
},500);
}

class PreviewResume extends React.Component {
    componentDidMount() {
        this.props.fetchTemplate();
        exportDoc();
    }
    render() {
        return (
            <div>
                <div id="myMm" style={{height: "1mm"}} />
                <div id='doc-container' style={{width:'8.5in'}}>
                    <div dangerouslySetInnerHTML={{ __html: this.props.template }}></div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        template: state.templates.template
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        fetchTemplate: () => {
            return dispatch(fetchTemplate());
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewResume));