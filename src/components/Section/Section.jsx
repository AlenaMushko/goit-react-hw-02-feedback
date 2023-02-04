import PropTypes from 'prop-types';
// import { SectionWrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
