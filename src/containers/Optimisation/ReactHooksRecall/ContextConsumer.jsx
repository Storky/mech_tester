import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {TheContext} from 'containers/Optimisation/ReactHooksRecall/theContext';

const ContextConsumer = props => {

    const {state: contextState , setState: setter} = useContext(TheContext);

    return (
        <>
            {contextState.color}{' '}
            <button
                onClick={() => setter(prev => ({...prev, color: 'goldenrod'}))}
            >set color gold</button>
        </>
    );
};

ContextConsumer.propTypes = {

};

export default ContextConsumer;
