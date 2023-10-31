import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


// const Title = () => {
//     <a href="/">
//       <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="Food Fire Logo" />
//     </a>
// }


const AppLayout = () =>{
    return (
      <div>
        <Header/>
        <Body />
      </div>
    ) 
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);