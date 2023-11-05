import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Title component for display logo
// const Title = () => (
//   <a href="/">
//     <img
//       className="logo"
//       src={FoodFireLogo}
//       alt="Food Fire Logo"
//       title="Food Fire"
//     />
//   </a>
// );

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [btnNameReact, setBtnNameReact] = useState(true);

  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src={LOGO_URL} alt="App Logo" className="logo" /> */}
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="links">Cart</Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;