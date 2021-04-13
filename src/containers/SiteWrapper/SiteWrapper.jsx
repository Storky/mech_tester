import React from 'react';
import PropTypes from 'prop-types';
import Header from 'containers/SiteWrapper/Header';

const SiteWrapper = props => {
    return (
        <div>
            <Header/>

            { props.children }

        </div>
    );
};

SiteWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SiteWrapper;
