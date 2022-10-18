import { component$, useStyles$ } from "@builder.io/qwik";
import Icon from './icon'
import HeaderCSS from '../styles/header.css'

const Header = component$(() => {
  useStyles$(HeaderCSS)

  return <header>
    <Icon/>
    <div className="appName"> SONGMASH </div>
  </header>
});

export default Header;
