import PropTypes from 'prop-types';
import {List} from './Feedback.styled'

export const Feedback = ({ options, onLeaveFeedback}) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <button  type="button" name={option}
             onClick={() => {
            onLeaveFeedback(option);
          }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </List>
  );
};

Feedback.propType = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.number.isRequired,
    })).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}