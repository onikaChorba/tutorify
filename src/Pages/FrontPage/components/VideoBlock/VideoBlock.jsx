import './VideoBlock.scss';
import imgVideo from '@/assets/img/video.png';
import arrowRight from '@/assets/img/arrowRight.png';
import bookMark from '@/assets/img/bookmark.png';

function VideoBlock() {
  return (
    <div className='videoBlock'>
      <img src={bookMark} className='bookmark' alt='bookmark'></img>
      <img className='videoBlock__video' src={imgVideo} alt='video'></img>
      <div className='play'>
        <img src={arrowRight} alt='play'></img></div>
    </div>
  );
}
export default VideoBlock;
