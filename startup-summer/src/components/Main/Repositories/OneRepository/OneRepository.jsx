import PropTypes from 'prop-types';
import s from './OneRepository.module.css';

function OneRepository({ name, description, url }) {
  return (
    <div className={s.oneRepository}>
      <a className={s.title} href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
      <p className={s.description}>{description}</p>
    </div>
  );
}

OneRepository.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default OneRepository;
