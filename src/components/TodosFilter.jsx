import React from 'react';
import PropTypes from 'prop-types';

TodosFilter.PropType = {
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};
// npm install --save prop-types

function TodosFilter(props) {
  return (
    <div>
      <button
        className={`button filter-button ${props.filter === 'all' ? 'filter-button-active' : ''}`}
        onClick={() => {
          props.setFilter('all');
        }}
      >
        All
      </button>
      <button
        className={`button filter-button ${props.filter === 'active' ? 'filter-button-active' : ''}`}
        onClick={() => {
          props.setFilter('active');
        }}
      >
        Active
      </button>
      <button
        className={`button filter-button ${props.filter === 'completed' ? 'filter-button-active' : ''}`}
        onClick={() => {
          props.setFilter('completed');
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default TodosFilter;
