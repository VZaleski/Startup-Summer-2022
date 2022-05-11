import s from './Profile.module.css';
import logoProfile from '../../../assets/images/profile_image.png';
import iconFollowers from '../../../assets/images/followers_icon.svg';
import iconFollowing from '../../../assets/images/following_icon.svg';

function Profile() {
  return (
    <div className={s.profile}>
      <img className={s.logo} src={logoProfile} alt="profile" />
      <h2 className={s.title}>Dan Abramov</h2>
      <a
        className={s.link}
        href="https://github.com/VZaleski?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        gaearon
      </a>
      <div className={s.info}>
        <img className={s.info__image} src={iconFollowers} alt="followers" />
        <span className={s.info__text}>65.8k followers</span>
        <img className={s.info__image} src={iconFollowing} alt="following" />
        <span className={s.info__text}>171 following</span>
      </div>
    </div>
  );
}

export default Profile;
