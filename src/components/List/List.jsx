import Button from "../Button/Button";

const List = ({ title = "Default section", data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <Button title="Loop" />
            <Button title="Move" />
          </li>
        ))}
        {/* <li>{props.data[0].title}</li>
        <li>{props.data[1].title}</li>
        <li>{props.data[2].title}</li> */}
      </ul>
    </div>
  );
};

export default List;
