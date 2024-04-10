import React from 'react';

class MyComponent extends React.Component {
  // Define a function to handle the click event
  handleClick = () => {
    console.log("Clicked");
  }

  render() {
    return (
      <div>
        {/* Attach the handleClick function to the onClick event */}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
