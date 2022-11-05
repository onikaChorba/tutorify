import React from 'react';
import arrow from '@/assets/img/errowDown.png';
function Links(props) {
  const [isAddList, setIsAddList] = React.useState();

  const onClickArrowList = () => {
    setIsAddList(!isAddList);
  }

  return (
    <div className="links">
      <article className="footer-title">
        <div className="footer-title__title">
          {props.title}
        </div>
        <button onClick={onClickArrowList} className="footer-title__arrow">
          <img src={arrow} alt='arrow'></img>
        </button>
      </article>
      <ul className='footer-list' style={isAddList ? { display: 'block' } : { display: 'none' }}>
        {props.li}
      </ul>
    </div>
  );
}

export default Links;