import React from 'react';
import PropTypes from 'prop-types';

export const Feedback = ({ options }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li>
            <button key={option} type="button" name={option}
          //    onClick={() => {
          //   onLeaveFeedback(option);
          // }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Feedback.propType = {
  options: PropTypes.array.isRequired,
  // onLeaveFeedback: PropTypes.func.isRequired,
}