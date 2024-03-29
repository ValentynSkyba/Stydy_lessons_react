const Button = (props) => {
  return (
    <div>
      <button>
        {/* {props.title} */}
        {/* був тайтл але зменили на чилдрен задля передавання іконок */}
        {props.children}
        {props.count}
      </button>
    </div>
  );
};

export default Button;
