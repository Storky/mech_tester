import React, {Component} from 'react';
import Classes from 'containers/Optimisation/ReactClassesRecall/Classes';
import {ptBR} from '@material-ui/core/locale';
import PropTypes from 'prop-types';


class RefConsumer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => {this.props.thoseRef.current.focus()}}>ficus</button>
        );
    }
}

RefConsumer.propTypes = {
    thoseRef: PropTypes.object.isRequired,
};

export default RefConsumer;
