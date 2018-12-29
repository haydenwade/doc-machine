//THIS IS REALLY USED TO TEST AND IMPLEMENT NEW TEMPLATES QUICKLY
import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import Template from './sample-template';

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

class SampleTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"candidateName":"Hayden Wade","technicalSkills":"• Angular, AngularJS\n• React.js, Redux\n• RESTful Apis\n• C#, VB .NET\n• MongoDB\n• Alexa Skills\n• Bootstrap\n• HTML5, CSS3\n• JavaScript\n• Auth0\n• Elastic Search\n• SQL\n• AWS Lambda\n• Enzyme, Jest, Jasmine\n• Nightwatch.js, Protractor\n• Node.js • Mobile First Design\n• Git\n• C++\n• Assembly\n• Java\n","education":[{"degree":"BACHELOR'S OF SCIENCE, SOFTWARE ENGINEERING","gradYear":"2016","university":"University of Wisconsin - Platteville","cityState":"Platteville, WI"}],"workExperience":[{"title":"SOFTWARE ENGINEER II - NAVISPHERE VISION","corporation":"C.H. Robinson","cityState":"Eden Prairie, Minnesota","startDate":"2018","endDate":"Present","responsibilities":"Enhanced and maintained eCommerce application that provides customers a view into their global supply chain (originally\nwritten in AngularJS, currently re-writing with React.js and Redux). Worked closely with data scientists to provide in-app\npredictive analytics and research 3rd party APIs. Designed, implemented, and tested web application to help onboard new\ncustomers using React.js and Redux. Built software to consume data from enterprise service bus (ESB). Mentored a\ngrowing team of developers. Implemented new customers on a strict deadline. Primary code utilization included React.js,\nRedux, AngularJS, Node.js (Hapi.js), MongoDB, Elasticsearch, Enzyme, Jest, Nightwatch.js, and C# (ServiceStack).","renderAsBullets":true},{"title":"SOFTWARE ENGINEER I - GLOBAL FORWARDING","corporation":"C.H. Robinson","cityState":"Eden Prairie, Minnesota","startDate":"2016","endDate":"2017","responsibilities":"Worked on a team of 5 to design and implement micro-services to send and receive messages from U.S. Customs (ABI\nCATAIR). Refactored Pre-Arrival Processing System (PAPS) Angular web application with a responsive, mobile first design\nto enhance UX across wide range of devices used by truck drivers. Contributed to team of ~20 developers by leading\nAngular training sessions, being DevOps Advocate, and defining code standards for web applications. Built nuget package to\nsupport Role Based Access Control (RBAC) using Auth0 and ServiceStack request attributes and plugins. Built shared\nAngular component library using npm. Leveraged unit tests and automated acceptance(e2e) tests to ensure code quality via\nCI/CD pipeline. Mentored interns as part of the Intern Program Committee. Primary code utilization included HTML5,\nBootstrap, Angular, Protractor.js, Jasmine, C#, ServiceStack, and SQL.","renderAsBullets":true},{"title":"PROGRAMMER ANALYST INTERN - GLOBAL FORWARDING","corporation":"C.H. Robinson","cityState":"Eden Prairie, Minnesota","startDate":"2015","endDate":"2016","responsibilities":"Gathered requirements from users, designed, implemented, and tested web application to support team's software deployment\nprocess. Used AngularJS, SQL, ServiceStack, C# to develop web application. Worked remotely for half of the internship where\nI contributed to sprint work along side scrum team. Presented products to executives, managers, and various teams.","renderAsBullets":true}]};
    }
    download=()=>{
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
    }
    render() {
        return (
            <div>
                <div id="myMm" style={{height: "1mm"}} />
                <div id='doc-container' style={{width:'8.5in'}}>
                    <Template {...this.state} />
                </div>
                <button onClick={this.download}>Download PDF</button>
            </div>
            // <Template {...this.props.content} />
        );
    }
}
export const mapStateToProps = state => {
    return {
        content: state.resume.content
    };
}
export const mapDispatchToProps = dispatch =>{
    return {};
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SampleTemplate));