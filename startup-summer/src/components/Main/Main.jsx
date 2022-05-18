import PropTypes from 'prop-types';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Repositories from './Repositories/Repositories';

function Main({ data, dataRepos, errorRepos }) {
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Profile data={data} />
        {/*  <Repositories />  */}
        {/*  <EmptyList />  */}
        {dataRepos && <Repositories dataRepos={dataRepos} errorRepos={errorRepos} />}
      </div>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.objectOf.isRequired,
  dataRepos: PropTypes.arrayOf.isRequired,
  errorRepos: PropTypes.bool.isRequired,
};

export default Main;
