import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center text-white bg-jacaranda-400 p-4">{text}</h1>
      
    </div>
  )
}

export default Header


Header.defaultProps = {
    text : "Feedback UI"
}

Header.propTypes = {
    text : PropTypes.string
    
}