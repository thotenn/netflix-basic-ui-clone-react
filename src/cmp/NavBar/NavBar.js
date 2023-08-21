import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        navRef.current.classList.add("nav__black");
      } else {
        navRef.current.classList.remove("nav__black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="nav" ref={navRef}>
      <img src="images/netflix-logo.png" alt="" className="nav__logo" />
      <img src="images/netflix-avatar.png" alt="" className="nav__avatar" />
    </div>
  );
};

export default NavBar;
