import PropTypes from 'prop-types';
import s from './Repositories.module.css';
import OneRepository from './OneRepository/OneRepository';

function Repositories({ dataRepos, errorRepos }) {
  console.log(errorRepos);
  const countRepos = dataRepos.length;
  const arrayRepositories = dataRepos.map((element) => (
    <OneRepository name={element.name} description={element.description} url={element.html_url} />
  ));
  return (
    <div className={s.repositories}>
      <div className={s.wrapper__title}>
        <h2 className={s.title}>Repositories({countRepos})</h2>
      </div>
      <div className={s.wrapper__repositories}>{arrayRepositories}</div>
    </div>
  );
}

Repositories.propTypes = {
  dataRepos: PropTypes.arrayOf.isRequired,
  errorRepos: PropTypes.bool.isRequired,
};

export default Repositories;
