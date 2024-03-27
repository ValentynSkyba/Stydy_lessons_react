import css from "./Profile.module.css"


function Profile(props) {
    console.log(props);
    return (
        <div className={css.container}>
  <div className={css.card}>
    <img className={css.image}
      src={props.image}
      alt={props.name}
    />
    <p className={css.name}>{props.name}</p>
    <p className={css.connect}>@{props.tag}</p>
    <p className={css.connect}>{ props.location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats_item}>
      <span>Followers</span>
      <span className={css.stats_bold}>{props.stats.followers}</span>
    </li>
    <li className={css.stats_item}>
      <span>Views</span>
      <span className={css.stats_bold}>{props.stats.views}</span>
    </li>
    <li className={css.stats_item}>
      <span>Likes</span>
      <span className={css.stats_bold}>{props.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile