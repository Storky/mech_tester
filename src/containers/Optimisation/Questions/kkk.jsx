import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {usePageWrapperStyles} from 'containers/PageWrapper/styles';

const Kkk = props => {

    const [counter, set_counter] = useState(() => 0);

    const sayHi = () => {

        console.log(`Hi: ${counter}`);
    };

    const memoizedSayHi = useCallback(sayHi, [counter])

    return (
        <>
            {counter}
        </>
    );
};

Kkk.propTypes = {

};

export default Kkk;
