import React, { useState, useRef } from 'react';
import './CounterList.css';
import { useLocation } from 'react-router-dom';

function Counter({ id, onRemove }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Counter');
  const [startingValue, setStartingValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(startingValue);
  };

  const setInitialValue = () => {
    setCount(startingValue);
  };

  const closeCounter = () => {
    onRemove(id);
  };

  return (
    <div className="counter">
      <h2>
        <input
          className="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </h2>
      <div className="spandiv">
        <span className="span">{count}</span>
      </div>

      <div className="incdec">
        <button onClick={decrement} className="btn1">
          -
        </button>

        <button onClick={increment} className="btn1">
          +
        </button>
      </div>

      <button onClick={reset} className="btnres">
        Reset
      </button>
      <div className="set">
        <input
          style={{ textAlign: 'center', width: '100px', height: '26px' }}
          className="btnres"
          type="number"
          value={startingValue}
          onChange={(e) => setStartingValue(parseInt(e.target.value))}
        />
        <button className="btnres" onClick={setInitialValue}>
          Set Initial Value
        </button>
      </div>

      <button onClick={closeCounter} className="btnclose">
        Close Counter
      </button>
    </div>
  );
}

function CounterList() {
  const [counters, setCounters] = useState([]);
  const counterIds = useRef(0);
  const location = useLocation()

  const addCounter = () => {
    const id = counterIds.current++;
    setCounters([...counters, { id, name: 'Counter', startingValue: 0 }]);
  };

  const removeCounter = (id) => {
    setCounters(counters.filter(counter => counter.id !== id));
  };

  return (
    <div className="app">
      <h1>Counter App {location.state.name}</h1>
      <div className="add-counter">
        <button className="btn" onClick={addCounter}>
          Add Counter
        </button>
      </div>
      <div className="counters">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onRemove={removeCounter}
          />
        ))}
      </div>
    </div>
  );
}

export default CounterList;