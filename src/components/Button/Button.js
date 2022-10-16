import './Button.scss';

function Button(props) {

  const { orange, green, white, children, small, big, medium } = props

  const createParamsClass = ({ green, orange, small }) => {
    let colorClassName = 'button__'
    if (green) colorClassName += 'green'
    if (orange) colorClassName += 'orange'
    if (white) colorClassName += 'white'

    let sizeClassName = ' button__size_'
    if (small) sizeClassName += 'xs'
    if (medium) sizeClassName += 's'
    if (big) sizeClassName += 'm'

    return colorClassName + sizeClassName
  }

  return (<button className={`button ${createParamsClass(props)}`}>
    {children}
  </button>);
}

export default Button;




