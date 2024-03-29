import PropTypes from "prop-types";

const Header = ({ logoText }) => {
  return (
    <header
      style={{ backgroundColor: "grey", color: "white", fontStyle: "italic" }}
    >
      <div>
        {/* <h1>{logoText.toUpperCase()}</h1> */}
        <h1>{logoText}</h1>
      </div>
      <hr />
    </header>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
};

export default Header;
