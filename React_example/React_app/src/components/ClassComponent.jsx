import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// Class Component
// A Class Component is a React component defined using ES6 class syntax. It extends React.Component and can hold local state and lifecycle methods.
// 1️⃣ Written using class syntax (ES6) and extends React.Component.
// 2️⃣ Uses this.state and this.setState() to manage data inside the component.	
// 3️⃣ Uses lifecycle methods like componentDidMount, componentDidUpdate.	
// 4️⃣ Needs this keyword, which can be confusing for beginners.	
// 5️⃣ Common in older React apps, but still supported.	


// A Functional Component is a plain JavaScript function that returns JSX. It can use React Hooks like useState and useEffect to manage state and side effects.
// 1️⃣ Written using a normal JavaScript function or arrow function.
// 2️⃣ Uses useState hook to handle data (state).
// 3️⃣ Uses useEffect hook for lifecycle behavior.
// 4️⃣ No need to use this, which makes the code easier and cleaner.
// 5️⃣ Modern React recommends functional components with hooks.