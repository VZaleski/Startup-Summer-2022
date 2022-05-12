import s from './Repositories.module.css';
import OneRepository from './OneRepository/OneRepository';

function Repositories() {
  const stateTest = ['', '', '', ''];
  const arrayRepositories = stateTest.map(() => <OneRepository />);
  return (
    <div className={s.repositories}>
      <h2 className={s.title}>Repositories(269)</h2>
      {arrayRepositories}
    </div>
  );
}

export default Repositories;
