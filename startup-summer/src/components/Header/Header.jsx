import s from './Header.module.css';
import logo from '../../assets/images/git_logo.svg';
import magniferIcon from '../../assets/images/magnifer_icon.svg';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img className={s.logo} src={logo} alt="logo" />
        <form className={s.search}>
          <input type="search" placeholder="Enter GitHub username" className={s.search__input} />
          <button type="submit" className={s.search__button}>
            <img className={s.search__icon} src={magniferIcon} alt="magnifer" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
