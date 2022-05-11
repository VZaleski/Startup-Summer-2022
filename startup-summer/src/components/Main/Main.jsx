import s from './Main.module.css';
import Profile from './Profile/Profile';

function Main() {
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Profile />
        <div>Repositories</div>
      </div>
    </main>
  );
}

export default Main;
