import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import RefConsumer from 'containers/Optimisation/ReactClassesRecall/RefConsumer';
import ContextConsumer from 'containers/Optimisation/ReactClassesRecall/ContextConsumer';

export const SomeContext = React.createContext(null);

class Classes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Vit',
            lastName: 'Laz',
            hungry: true,
        };

        this.myRef = React.createRef();
        this.myRef.current = 0;
        this.inputRef = React.createRef();
    }

    numbers = [1,2,3,4,5];

    componentDidMount() {
        this.myRef.current++;
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // throw 'Custom Error' //for didCatch in parent
        this.myRef.current++;
        console.log('componentDidUpdate',prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    toggleHungry = () => {
      this.setState((prevState) => {
          return {hungry: !prevState.hungry}
      })
    };

    render() {
        const portalContent = <h3>portalContent</h3>;
        return (
            <div>
                <input type="text" placeholder='Name'
                       value={this.state.name}
                       onChange={(event) => {this.setState({name: event.target.value})}}
                />
                {/*<button onClick={() => {this.setState({name: "Vital"})}}>Vital</button>*/}
                <button onClick={() => {this.setState((state, props) => {
                    return {name: "Vital"}
                }, () => {console.log('state Changed')})}}>Vital</button>
                <p>My Name is {this.state.name}</p>
                <hr/>
                {this.numbers.map(val => <span key={val}>{val}</span>)}

                <p>Ref renders: {this.myRef.current}</p>
                <p>
                    <RefConsumer thoseRef={this.inputRef}/>
                    <input type="text" ref={this.inputRef} />
                </p>
                <p>Context: <SomeContext.Provider value={{hungry: this.state.hungry, toggle: this.toggleHungry}}>
                    <SomeContext.Consumer>
                        {context => <ContextConsumer context={context}/>}
                    </SomeContext.Consumer>
                </SomeContext.Provider></p>

                <p>Portal: {ReactDOM.createPortal(portalContent, document.getElementById('portal'))}</p>

                {/*todo render props*/}
            </div>
        );
    }
}

Classes.propTypes = {};

export default Classes;
