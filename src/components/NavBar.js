import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];
  const topBar = links.map((link)=>(
    <a key={link} href={"#" + link}>{link}</a>
  ))

  return <nav> {topBar}</nav>;
}

export default NavBar;
