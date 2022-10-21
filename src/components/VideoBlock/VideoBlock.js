import './VideoBlock.scss';
import imgVideo from '../../img/video.png';
import arrowRight from '../../img/arrowRight.png';
import bookMark from '../../img/bookmark.png';

function VideoBlock() {
  return (
    <div className='videoBlock'>
      <img className='videoBlock__video' src={imgVideo} alt='video'></img>
      <div className='play'>
        <img src={arrowRight} alt='play'></img></div>
      <img src={bookMark} className='bookmark'></img>
    </div>
  );
}
export default VideoBlock;
