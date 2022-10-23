import './User-online.scss';
import heroIcon from '../../img/hero-icon.png';
import React from 'react';
const user = [
  { src: './img/user1.png', className: 'user', alt: "user1" },
  { src: './img/user2.png', className: 'user', alt: "user2" },
  { src: './img/user3.png', className: 'user', alt: "user3" },
  { src: './img/user4.png', className: 'user', alt: "user4" }
]
// const user1 = [
//   { src: './img/user4.png', className: 'user', alt: "user4" },
//   { src: './img/user4.png', className: 'user', alt: "user4" },
//   { src: './img/user4.png', className: 'user', alt: "user4" }
// ]

function UserOnline() {
  const [isAdded, setIsAdded] = React.useState();

  const onClickUser = () => {
    console.log(user.length);
    setIsAdded(!isAdded);
  }

  return (
    <div className="user-online  user-online-hero">
      <div className='user-online__title'>
        200+ Tutors Online
      </div>
      <div className='user-online__img'>
        {user.map((index, key) => <img key={key} src={index.src} alt={index.alt} className={index.className} />)}
        <button onClick={onClickUser} className='userButton' >
          <img src={isAdded ? '../../img/user1.png' : '../../img/3+.png'} className='userButton__text' alt='plus'>
          </img>
        </button>
      </div>
      <div className='user-online__icon'>
        <img className='hero-icon' src={heroIcon} alt="icon" />
      </div>
    </div>
  );
}

export default UserOnline;