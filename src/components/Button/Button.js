import './Button.scss';

function Button(props) {

  const { orange, green, children, small } = props

  const createParamsClass = ({ green, orange, small }) => {
    let colorClassName = 'button__'
    if (green) colorClassName += 'green'
    if (orange) colorClassName += 'orange'

    let sizeClassName = ' button__size_'
    if (small) sizeClassName += 'xs'

    return colorClassName + sizeClassName
  }

  return (<button className={`button ${createParamsClass(props)}`}>
    {children}
  </button>);
}

export default Button;




