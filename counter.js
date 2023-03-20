
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      addsteps: 0,
    };
  }

  handleChange = (e) => {
    const input = e.target.value.trim();
   
      this.setState({ addsteps: parseInt(input) });
    
  };

  handleDecrement = () => {
    const { count, addsteps } = this.state;
    const newCount = count - addsteps;
    this.setState({ count: newCount < 0 ? 0 : newCount });
  };

  handleIncrement = () => {
      debugger
    const { count, addsteps } = this.state;
    this.setState({ count: count + addsteps });
   
  };

  render() {
    const { count } = this.state;
    return (
      <>
      <h1>Task 1</h1>
        <h4>Enter value:</h4>
        <input   type="number"   onChange={this.handleChange} />
        <h4>Counter:</h4>
        <button   onClick={this.handleDecrement}>dec </button>
        <span style={{marginRight:'10px',marginLeft:'20px'}}>{count}</span>
        <button   onClick={this.handleIncrement}> inc</button>
      </>
    );
  }
}

export default Counter;
