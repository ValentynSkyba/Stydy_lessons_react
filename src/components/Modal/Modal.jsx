import PropTypes from "prop-types";

const Modal = ({ title, children }) => {
  return (
    <div>
      <h2>Modal</h2>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
