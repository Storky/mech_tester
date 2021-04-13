import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SomeContext} from 'containers/Optimisation/ReactClassesRecall/Classes';

class ContextConsumer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {hungry, toggle} = this.props.context;

        return (
                <>
                    {hungry ? 'hungry': 'full'}
                    <button onClick={() => {toggle()}}>toggle hunger</button>
                </>
        );
    }
}

ContextConsumer.propTypes = {
    context: PropTypes.object.isRequired,
};

export default ContextConsumer;
