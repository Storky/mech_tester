import React, {useCallback, useEffect, useMemo, useState} from 'react';
/* eslint react/prop-types: 0 */

export function withGenerator(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.kkk = 222;
        }
        displayName = 'Hello';
        render () {
            return <WrappedComponent kkk={this.kkk} {...this.props} />
        }
    }
}

let interval;

export function withInterval(WrappedComponent) {
    return function WithInterval(props) {
        const [iteration, set_iteration] = useState(0);
        const [objState, set_objState] = useState({
            a: 1,
            b: 'b',
        });

        const next = () => {
            // console.log('next');
            set_iteration(iterationFunc)
        };
        const start = () => {
            console.log('start');
            interval = setInterval(() => {set_iteration(iterationFunc)}, 300)
        };
        const stop = (arg) => {
            console.log('stop', arg);
            clearInterval(interval)
        };
        const memoizedStop = useCallback(stop, []);
        const changeObjState = () => {
          set_objState((prevState) => {
              return {...prevState, a: prevState.a + 1}
          })
        };


        // const iterationFunc = (prev) => {
        //     console.log('set_iteration');
        //     return prev + 1
        // };
        const iterationFunc = function(prev) {
            // console.log('set_iteration');
            return prev + 1
        };

        return <>
            <button onClick={next}>next</button>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={changeObjState}>change objState</button>
            <hr/>
            <WrappedComponent
                iteration={iteration}
                stop={memoizedStop}
                {...props}
            />
        </>
    }
}

export function withGeneratorF(WrappedComponent, selectData) {
    return function Gen(props) {
        const {iteration, stop} = props;

        const memoizedObject = useMemo(() => ({a: 1, b: 'b'}), []);

        // useEffect(() => {
        //     console.info('re-render iteration = ', iteration)
        // });

        return <WrappedComponent
            counter={iteration}
            sameObjNew={memoizedObject}
            // dynamicObj={{a: iteration, b: String(iteration)}}
            stopperFunc={stop}
            // {...props}
        />
    }
}

export function withProps(WrappedComponent) {
    return function WithProps(props) {

        return <WrappedComponent
            {...props}
        />

    }
}
