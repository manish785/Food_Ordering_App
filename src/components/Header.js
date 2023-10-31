import {LOGO_URL} from '../utils/constants';

const Header = () => {
    return (
      <div className='header'>
         {/* <Title /> */}
         <div className='logo-container'>
             <img className='logo' src={LOGO_URL}/>
             </div>
             <div className='nav-items'>
                 <ul>
                     <li>Home</li>
                     <li>About</li>
                     <li>Card</li>
                     <li><i className="fa-solid fa-cart-shopping"></i></li>
                 </ul>
             </div>
         </div>
    )
 }
 

 export default Header;