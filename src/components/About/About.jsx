import s from "./About.module.css";

const AboutMe = () => {
  return (
    <section>
      <h2>About me</h2>
      <p className={s.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quaerat totam cupiditate voluptate eligendi necessitatibus maxime
        dolorem, modi aspernatur sequi et autem perferendis porro, veritatis eum
        dolore officia optio facilis!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quaerat totam cupiditate voluptate eligendi necessitatibus maxime
        dolorem, modi aspernatur sequi et autem perferendis porro, veritatis eum
        dolore officia optio facilis!
      </p>
      <p className={s.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quaerat totam cupiditate voluptate eligendi necessitatibus maxime
        dolorem, modi aspernatur sequi et autem perferendis porro, veritatis eum
        dolore officia optio facilis!
      </p>
    </section>
  );
};

export default AboutMe;
