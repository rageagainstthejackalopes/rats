import React from 'react';
// import Link from 'gatsby-link';
// import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {count: 0}
  }
  render() {
    return <div>
      <h1>Counter</h1>
      <p> current count: {this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>plus</button>
      <button onClick={() => this.setState({ count: this.state.count - 1 })}>minus</button>
    </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Rage Against the Supremes: Wolrd's Most Dangerous Cover Band
//         </a>
//         <p>Content goes here</p>

//         {/* <Link to="/">Home</Link> */}
//       </header>
//     </div>
//   );
// }
export default Counter;
// export default App;
