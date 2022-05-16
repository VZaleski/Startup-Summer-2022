import s from './Repositories.module.css';
import OneRepository from './OneRepository/OneRepository';

function Repositories() {
  const stateTest = ['', '', '', ''];
  const arrayRepositories = stateTest.map(() => <OneRepository />);
  return (
    <div className={s.repositories}>
      <div className={s.wrapper__title}>
        <h2 className={s.title}>Repositories(269)</h2>
      </div>
      <div className={s.wrapper__repositories}>{arrayRepositories}</div>
    </div>
  );
}

export default Repositories;
