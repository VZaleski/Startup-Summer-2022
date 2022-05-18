import PropTypes from 'prop-types';
import s from './Main.module.css';
import Profile from './Profile/Profile';
import Repositories from './Repositories/Repositories';
import EmptyList from './EmptyList/EmptyList';

function Main({ data, dataRepos }) {
  let error = false;
  if (dataRepos.length) {
    error = false;
  } else {
    error = true;
  }
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Profile data={data} />
        {error && <EmptyList />}
        {!error && <Repositories dataRepos={dataRepos} />}
      </div>
    </main>
  );
}

Main.propTypes = {
  data: PropTypes.objectOf.isRequired,
  dataRepos: PropTypes.arrayOf.isRequired,
};

export default Main;
