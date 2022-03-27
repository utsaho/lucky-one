import React from 'react';
import './Qna.css'
const Qna = () => {
    return (
        <div className='qna'>
            <h1>Frequently Asked Question</h1> <hr />
            <h2>1. How react works?</h2>
            <p><strong>Ans:</strong> React uses the concept of virtual DOM which makes the loading faster called hot load. A virtual DOM is just a lightweight javascript object which is just the copy of a real DOM. Whenever any state change occurs, the entire UI is re-rendered in the virtual DOM.Then the difference between the previous real DOM and the virtual DOM is evaluated using the diff algorithm. After the final calculations are made, the real DOM will only be updated with those elements which have actually changed.</p>
            <h2>2. Props vs State</h2>
            <p><strong>Ans: </strong>Components receive data from other components with props, whereas they can create and manage their own data with state. <br />Props are used to pass data from one component to another component, where state is for managing data of the component. <br />props data is read-only, and cannot be modified by a component that is receiving it from another component. On the other hand, State data can be modified by its own component. <br />Props can only be passed from parent component to child component.
            </p>
        </div>
    );
};

export default Qna;