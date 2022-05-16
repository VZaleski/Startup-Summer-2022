import s from './Main.module.css';
import Profile from './Profile/Profile';
//  import EmptyList from './EmptyList/EmptyList';
import Repositories from './Repositories/Repositories';

function Main() {
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <Profile />
        {/*  <Repositories />  */}
        {/*  <EmptyList />  */}
        <Repositories />
      </div>
    </main>
  );
}

export default Main;
