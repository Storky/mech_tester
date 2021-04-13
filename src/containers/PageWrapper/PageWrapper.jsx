import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {usePageWrapperStyles} from './styles'

const PageWrapper = ({children, heading}) => {
    const classes = usePageWrapperStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            {heading && <Typography variant="h3" className={classes.h}>{heading}</Typography>}

            {children}
        </Container>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.node,

};
PageWrapper.defaultProps = {
    heading: ''
};

export default PageWrapper;
