import Button from "../Button/Button";
import s from "./List.module.css";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const List = ({ title = "Default section", data, online }) => {
  return (
    <div>
      <h2>{title}</h2>

      <h2>{online && "Props from app const ONLINE"}</h2>

      <ul className={s.list}>
        {data.map((item) => (
          <li className={s.item} key={item.id}>
            <span>{item.title}</span>
            <div className={s.btn_wrapper}>
              {/* <Button title="Edit" />
              <Button title="Delete" /> */}
              <Button title="Edit">
                Edit
                <FaEdit size={32} color="red" />
              </Button>
              <Button title="Delite">
                Delite
                <MdOutlineDelete className={s.delite} />
              </Button>
            </div>
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
