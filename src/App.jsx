const Header = () => {
  return (
    <header>
      <div>
        <h1>Hello world</h1>
      </div>
      <hr />
    </header>
  );
};

const WelcomeSection = () => {
  return (
    <section>
      <h2>React</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        optio est possimus totam accusantium ex quos nostrum quaerat, odio
        tempora provident, quo a dicta alias nam doloremque voluptatem
        consequatur delectus!
      </p>
      <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>

      <div>
        <button>Click</button>
        <button>Login</button>
        <button>Exit</button>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section>
      <h2>About me</h2>
      <p>
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quaerat totam cupiditate voluptate eligendi necessitatibus maxime
        dolorem, modi aspernatur sequi et autem perferendis porro, veritatis eum
        dolore officia optio facilis!
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <h2>All right</h2>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
