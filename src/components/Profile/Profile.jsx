import PropTypes from "prop-types";
import s from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ user, message }) => {
  const { firstName, lastName, age, email, image, address, gender } = user;
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        {message && <h1>Hello {firstName}</h1>}
        <div className={s.img_wrapper}>
          <img width="200" src={image} alt="user avatar" />
        </div>
        <h1 className={s.name}>
          {firstName} {lastName}
        </h1>
        <p>{age}</p>
        {/* {Інтерполяція стилів} */}
        {/* <p className={`${s.status} ${age > 18 ? s.green : s.red}`}>
          Status: {age > 18 ? "Adult" : "Young"}
        </p> */}
        <p className={clsx(s.status, age > 18 ? s.green : s.red)}>
          Status: {age > 18 ? "Adult" : "Young"}
          {/* {Контокацінація стилів} */}
        </p>
        <p>{email}</p>
        <p>Address: {address.city}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  message: PropTypes.propTypes,
  user: PropTypes.shape({
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    image: PropTypes.string.isRequired,
    adress: PropTypes.shape({ city: PropTypes.string }),
    gender: PropTypes.oneOf(["male", "female"]),
  }),
};

export default Profile;
// from JSON  "gender": "male",
