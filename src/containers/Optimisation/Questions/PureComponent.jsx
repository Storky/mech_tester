import React, {Component, PureComponent as PC} from 'react';
import PropTypes from 'prop-types';
import Reader from 'containers/Optimisation/Reader';
/* eslint react/prop-types: 0 */

class PureComponent extends PC {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Reader {...this.props}/>
        );
    }
}

PureComponent.propTypes = {};

export default PureComponent;
