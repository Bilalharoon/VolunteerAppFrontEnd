import React from "react";

const Navbar = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">SignUp</a>
      </li>
      <li>
        <a href="/events">Events</a>
      </li>
      <li>
        <a href="/logout">Logout</a>
      </li>
    </ul>
  );
};

export default Navbar;
