import React, {useEffect} from 'react';

const DemoMemo = (props) => {
    useEffect(() => {
        console.log('DemoMemo', props);
    });
    return (
        <>
            DemoMemo
        </>
    );
};

export default React.memo(DemoMemo, (prevProp, nextProp) => {
    console.log('memo', prevProp, nextProp);
    return prevProp === nextProp
});
