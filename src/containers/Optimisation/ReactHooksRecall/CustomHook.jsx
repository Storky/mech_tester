import React, {useEffect, useRef, useState} from 'react';

const useRenderCount = (initVal) => {

    const renderCount = useRef(initVal || 0);
    useEffect(() => {
        renderCount.current++
    });

    return renderCount.current;
};

export default useRenderCount;
