import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright <CopyrightIcon /> {year}</p>
    </footer>
  );
}

export default Footer;
