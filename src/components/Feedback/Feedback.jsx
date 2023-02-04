import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback}) => {
  return (
    <ul>
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
    </ul>
  );
};

Feedback.propType = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.number.isRequired,
    })).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}