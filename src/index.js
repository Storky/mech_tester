import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// class Human {
//     constructor({name, job}) {
//         this.name = name;
//         this.job = job || 'jobless';
//     }
//
//     sayHi() {
//         return `Hi, I am ${this.name}, a ${this.job}`
//     }
// }
//
// class Courier extends Human {
//     constructor({name}) {
//         super({name: name, job: 'courier'})
//         // this.name = 'Yolo';
//         // this.sayHi = super.sayHi;
//     }
//
//     sayHi() {
//         return `Hey, I am ${this.name}, a ${this.job}`
//     }
// }
//
// const human = new Human({name: 'Valik'});
//
// const courier = new Courier({name: 'Andrey'});
//
// console.log(courier.sayHi());


// class A {
//     constructor (props) {
//
//         this.a = 11;
//     }
//
//     meth(){
//         return this.a
//     }
//
//     methA(){
//         return this.a
//     }
//
//     getThis(){
//         return this
//     }
//
//
// }
//
// class B extends A {
//     constructor (props) {
//         super(props)
//
//         this.b = 22;
//
//     }
//
//     meth() {
//         return this.b
//     }
//
//     methB(){
//         return this.a
//     }
//
//
// }
//
// const a = new A();
// const b = new B();
//
// console.log(A.prototype, B.prototype, a.getThis(), b.getThis())

function clickHandler(e) {
    console.log(e.target, this);
}

const button = document.getElementById('button')
button.addEventListener("click", clickHandler);


