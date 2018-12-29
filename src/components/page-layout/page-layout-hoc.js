import React from 'react';
import PageLayout from './page-layout';

export default (InjectedComponent)=>{
    return class WithPageLayout extends React.Component{
        render(){
            return (
                <PageLayout>
                    <InjectedComponent {...this.props}/>
                </PageLayout>
            );
        }
    }
}

// export default (InjectedComponent)=>{
//     return (
//         <PageLayout>
//             <InjectedComponent/>
//         </PageLayout>
//     );
// }
