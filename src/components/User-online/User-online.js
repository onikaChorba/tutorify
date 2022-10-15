import './User-online.scss';
import heroIcon from '../../img/hero-icon.png';
import user1 from '../../img/user1.png';
import user2 from '../../img/user2.png';
import user3 from '../../img/user3.png';
import user4 from '../../img/user4.png';

const user = { user1, user2, user3, user4 }
function buttonClick() {
  alert("Hi");
};
function UserOnline() {

  return (
    <div className="user-online  user-online-hero">
      <div className='user-online__title'>
        200+ Tutors Online
      </div>
      <div className='user-online__img'>
        <img className='user' src={user1} alt="user1" />
        <img className='user' src={user2} alt="user2" />
        <img className='user' src={user3} alt="user3" />
        <img className='user' src={user4} alt="user4" />
        <button onClick={buttonClick} className='userButton' >
          <div className='userButton__text'>+3 </div></button>
      </div>
      <div className='user-online__icon'>
        <img className='hero-icon' src={heroIcon} alt="icon" />
      </div>
    </div>
  );
}

export default UserOnline;