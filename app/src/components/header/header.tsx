import { component$, useStyles$ } from "@builder.io/qwik";
import Icon from "./icon";
import HeaderStyles from "~/styles/header.css";

const Header = component$(() => {
  useStyles$(HeaderStyles);

  return (
    <header>
      <a href="/">
        <Icon />
        <span className="app-name"> SONGMASH </span>
      </a>
    </header>
  );
});

export default Header;
