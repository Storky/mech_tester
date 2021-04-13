import React, {useEffect, useReducer, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import RefConsumer from 'containers/Optimisation/ReactHooksRecall/RefConsumer';
import DemoMemo from 'containers/Optimisation/ReactHooksRecall/demoMemo';
import { TheContext } from './theContext'
import ContextConsumer from 'containers/Optimisation/ReactHooksRecall/ContextConsumer';
import useRenderCount from 'containers/Optimisation/ReactHooksRecall/CustomHook';

let intervalInit, intervalRender;

const Hooks = props => {
    // console.log('Hooks', props);

    //1.0 use state
    const [name, set_name] = useState('');

    //1.1 as obj + heavy calc optimization
    const [objState, set_objState] = useState(() => ({
        car: 'Peugeot',
        model: '406',
        power: 90
        // power: getPower()
    }));

    //1.2 use Reducer
    const [reducer, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set':
                return {count: action.payload};
            case 'clear':
                return {count: 0}
        }
    }, {}, (initializerArg) => ({count: getPower()}));
    //init func uses prev arg as arg and returns one time evaluated object

    //2.0 useEffect init render cleanup
    useEffect(() => {
        // console.log('init ')
        // intervalInit = setInterval(() => {
        //     console.count('intervalInit');
        // }, 500)
        return () => {
            // clearInterval(intervalInit);
        }
    }, []);
    useEffect(() => {
        // intervalRender = setInterval(() => {
        //     console.count('intervalRender');
        // }, 500)
        return () => {
            // clearInterval(intervalRender);
        }
    });

    //3.0 useRef 2 cases + forwardRef
    const myRef = useRef(0);
    useEffect(() => {myRef.current += 1});
    const myRefInput = useRef(null);

    //4.0 useCallback
    const memoizedFunc = React.useCallback((arg = 'kek') => {
        console.log('memoizedFunc', arg)
    }, [name]);
    //5.0 useMemo
    const memoizedObj = React.useMemo(()=> {
        return {a: 1, b:2}
    }, [name]);
    //6.0 memo // done in demoMemo.jsx
    //7.0 useContext
    const [contextState, set_contextState] = useState({color: 'maroon', fsz: '18px'})
    //8.0 customHook
    const renderCountFromHook = useRenderCount(0);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <p><input type="text" value={name} onChange={(event => set_name(event.target.value))}/>  Name: {name} </p>
                    <hr/>
                    <p>
                        <input type="number" value={objState.power}
                               onChange={(event => set_objState(
                                   (prevState) => ({...prevState, power: event.target.value})
                               ))}
                        />
                        {' '} Car: {objState.car}, Model: {objState.model}, Power: {objState.power} hp,
                    </p>
                    <hr/>
                    <p>
                        <input type="number" value={reducer.count}
                               onChange={(event => dispatch({type: 'set', payload: event.target.value}))}
                        />
                        {' '}Reducer, count: {reducer.count}{' '}
                        <button onClick={() => dispatch({type: 'clear'})}>Clear reducer count</button>
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p>
                        <button onClick={() => {myRefInput.current.focus()}}>focus</button>
                        {/*<input type="text" ref={myRefInput}/> */}
                        {' '}Renders: {myRef.current}{' '}
                        <RefConsumer ref={myRefInput}/>
                    </p>
                    <p>
                        UseCallback, useMemo
                    </p>
                    <TheContext.Provider value={{state: contextState, setState: set_contextState}}>
                        <ContextConsumer/>
                    </TheContext.Provider>
                    <br/>
                    <DemoMemo obj={memoizedObj} func={memoizedFunc}/>
                    <br/>
                    Custom Hook Renders: {renderCountFromHook}
                </Grid>
            </Grid>
            {/*{props.render(props)}*/}
        </>
    );
};

Hooks.propTypes = {
    render: PropTypes.func
};

export default Hooks;

function heavyCalc(seconds = 3) {
    for (let i = 0, memo = 0; i < 1000 * 1000 * 1000 * seconds; i++) {
        memo = i % 3 * i;
    }
}

function getPower(log) {
    if (log) console.log('getPower');
    heavyCalc(0.01);
    return ~~(Math.random() * 50) + 50
}

