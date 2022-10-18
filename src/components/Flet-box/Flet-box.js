import './Flet-box.scss';
const fletIcon = [
  { src: './img/flet-icon1.png', title: "icon1" },
  { src: './img/flet-icon2.png', title: "icon2" },
  { src: './img/flet-icon3.png', title: "icon3" },
  { src: './img/flet-icon4.png', title: "icon4" },
  { src: './img/flet-icon5.png', title: "icon5" },
  { src: './img/flet-icon6.png', title: "icon6" },
  { src: './img/flet-icon7.png', title: "icon7" }
];

function FletBox() {
  return (


    fletIcon.map((index) => <img src={index.src} title={index.title} alt='flet' />)
  )
};
export default FletBox;