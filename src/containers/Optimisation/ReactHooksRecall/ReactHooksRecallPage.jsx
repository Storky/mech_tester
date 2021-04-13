import React from 'react';
import PropTypes from 'prop-types';
import Reader from 'containers/Optimisation/Reader';
import {withGeneratorF, withInterval, withProps} from 'containers/Optimisation/generatorHOC';

import Hooks from './Hooks';

const HooksWithInterval = withInterval(Hooks);
const HooksWithIntervalWithProps = withProps(HooksWithInterval);


const ReactHooksRecallPage = props => {
    return (
        <HooksWithInterval render={(props) => <Reader {...props}/>} />
    );
};

ReactHooksRecallPage.propTypes = {


};

export default ReactHooksRecallPage;
