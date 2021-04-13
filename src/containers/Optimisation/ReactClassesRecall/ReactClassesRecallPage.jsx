import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Classes from 'containers/Optimisation/ReactClassesRecall/Classes';
import {withGeneratorF, withInterval, withProps} from 'containers/Optimisation/generatorHOC';
import Reader from 'containers/Optimisation/Reader';

const ClassesWithInterval = withInterval(Classes)
const ClassesWithIntervalWithProps = withProps(ClassesWithInterval);

class ReactClassesRecallPage extends Component {
    constructor(props) {
        super(props);
    }


    componentDidCatch(error, info) {
        console.log('componentDidCatch', error, info);
    }
    render() {
        return (
            <ClassesWithIntervalWithProps render={(props) => <Reader {...props}/>}/>
        );
    }
}

ReactClassesRecallPage.propTypes = {};

export default ReactClassesRecallPage;
