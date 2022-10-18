import { component$, useStyles$ } from "@builder.io/qwik";
import Icon from "./icon";
import HeaderStyles from "~/styles/header.css";

const Header = component$(() => {
  useStyles$(HeaderStyles);

  return (
    <header>
      <Icon />
      <div className="app-name"> SONGMASH </div>
    </header>
  );
});

export default Header;
