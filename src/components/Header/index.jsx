import { genRandomInt, reactDescriptions } from "@utils";
import "./Header.css";
import Img from "@assets/react-core-concepts.png";

export default function Header() {
  const randomDescription =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={Img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
