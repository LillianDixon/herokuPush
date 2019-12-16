import React, { Component } from 'react';

console.log(process.env.SECRET_KEY)

// const MY_SECRET_KEY = process.env.MY_SECRET_KEY

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>This is my heroku project</h1>
        <h2>{process.env.SECRET_KEY}</h2>
      </div>
    );
  }
}
