import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/About/About";
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import List from "./components/List/List";

const App = () => {
  const titleBtn = "Please click me ";
  const filmsData = [
    { id: "1", title: "Got" },
    { id: "2", title: "Bolt" },
    { id: "3", title: "Lord" },
    { id: "4", title: "MMM" },
    { id: "4", title: "Lamb" },
  ];
  const ToDolist = [
    { id: "1", title: "Sleep" },
    { id: "3", title: "By me a milk" },
    { id: "4", title: "Coffe" },
    { id: "5", title: "Aaaaa" },
  ];
  return (
    <div>
      <Header />
      <WelcomeSection />
      <AboutMe />
      <Footer />
      <Text text="This is text from props" />
      <Text apple="React is apple" />
      <Text text="Cool level" />
      <Button title="Apple" />
      <Button title="Cherry" />
      <Button title={titleBtn} count={22} />
      <List data={filmsData} />
      <List data={ToDolist} title="Todos section" />
    </div>
  );
};

export default App;
