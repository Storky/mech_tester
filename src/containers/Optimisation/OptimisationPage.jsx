import React from 'react';
import PageWrapper from 'containers/PageWrapper';
import Reader from './Reader'
import {withGeneratorF, withInterval} from 'containers/Optimisation/generatorHOC';
import SobesTaskOpt from 'containers/Optimisation/SobesTask/SobesTaskOpt';
import SobesTaskOptVar2 from 'containers/Optimisation/SobesTask/SobesTaskOptVar2';
import PureComponent from 'containers/Optimisation/Questions/PureComponent';

import ReactHooksRecall from './ReactHooksRecall'
import ReactClassesRecall from 'containers/Optimisation/ReactClassesRecall/ReactClassesRecallPage';
import ListClickDelegation from 'containers/Optimisation/Questions/ListClickDelegation';

const ReaderWithGeneratorF = withGeneratorF(Reader);
const ReaderWithInterval = withInterval(ReaderWithGeneratorF);

const PureCompWithGenerator = withGeneratorF(PureComponent);
const PureCompWithInterval = withInterval(PureCompWithGenerator);


function PropsButton({word}) {
    return <button>Props Button {word && word}</button>
}

const OptimisationPage = () => {
    return (
        <PageWrapper heading={"OptimisationPage"}>

            {/*<SobesTaskOptVar2/>*/}
            {/*<SobesTaskOpt/>*/}

            {/*<ReaderWithInterval*/}
            {/*    renderPropsButton={(word) => <PropsButton word={word}/>}*/}
            {/*/>*/}

            {/*<PureCompWithInterval/>*/}

            <ListClickDelegation/>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/*<ReactClassesRecall/>*/}
            {/*<ReactHooksRecall/>*/}

            {/*<ReaderWithGeneratorF />*/}
            {/*<ReaderWithGenerator />*/}

        </PageWrapper>
    );
};

export default OptimisationPage;
/* eslint react/prop-types: 0 */
