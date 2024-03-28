import PropTypes from "prop-types";

const Profile = ({ user, message }) => {
  const { firstName, lastName, age, email, image, address, gender } = user;
  return (
    <div>
      {message && <h1>Hello {firstName}</h1>}
      ,<img width="200" src={image} alt="user avatar" />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{age}</p>
      <p>Status: {age > 18 ? "Adult" : "Young"}</p>
      <p>{email}</p>
      <p>Address: {address.city}</p>
      <p>Gender: {gender}</p>
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
