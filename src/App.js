import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { increment } from './store/actions';

function App({ count, increment }) {
  const mapStateProps = (state) => {
    return {
      count: state.count,
    };
  };

  const mapDispatchProps = {
    increment,
  };

  return (
    <div className="App">
      <button onClick={increment}>Add</button>
      <span>{count}</span>
    </div>
  );
}

export default connect(mapStateProps, mapDispatchProps)(App);
