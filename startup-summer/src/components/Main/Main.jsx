import s from './Main.module.css';
import Profile from './Profile/Profile';
import Repositories from './Repositories/Repositories';

function Main() {
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Profile />
        <Repositories />
      </div>
    </main>
  );
}

export default Main;
