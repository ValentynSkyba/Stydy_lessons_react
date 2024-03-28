const Modal = ({ title, children }) => {
  return (
    <div>
      <h2>Modal</h2>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
