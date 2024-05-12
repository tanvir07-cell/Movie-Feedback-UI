import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <div>
      <h1 className="bg-jacaranda-400 p-4 text-center text-4xl font-bold text-white">
        {text}
      </h1>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  text: "Movie Feedback With Machine Learning",
};

Header.propTypes = {
  text: PropTypes.string,
};
