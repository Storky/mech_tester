import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'containers/PageWrapper';
import TableMechs from './TableMechs'

const TableMechsPage = props => {
    return (
        <PageWrapper heading='Test'>
            <TableMechs></TableMechs>
        </PageWrapper>
    );
};

TableMechsPage.propTypes = {

};

export default TableMechsPage;
