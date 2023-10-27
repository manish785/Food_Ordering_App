import React from 'react';
import ReactDOM from 'react-dom/client';


// React.createElement => ReactElement - JS Object => HTMLElement(render)
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
// console.log(heading);

// JSX - is not html in JS
// JSX - is html like syntax inside the JS

// JSX (transpiled before it reaches the JS Engine) (Parcel is doing for us through the help of babel)

// React.createElement => ReactElement - JS Object => HTMLElement(render)



const Title = (
    <h1 className='head'>
    Namaste React using JSX
    </h1>
)
// console.log(heading);


const HeadingComponent = () => (
    <div id="container">
        {Title}
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
)

// const HeadingComponent2 = () => (
//     <h1 className='heading'>Namaste React Functional Component</h1>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);