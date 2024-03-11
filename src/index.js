// import React from 'react';
// import ReactDOM from 'react-dom/client'

// const mainEl = document.querySelector('header');
// const root = React.createRoot(mainEl);

// root.render(<div>
//     <h2 className='title'> Menu</h2>
//     <p>Main</p>
// </div>)

import React from 'react'
import ReactDOM from 'react-dom'

const mainEl = document.querySelector('root'); // Обираємо правильний елемент для монтування
const root = ReactDOM.createRoot(mainEl);

root.render(
  <div>
    <h2 className='title'>Menu</h2>
    <p>Main</p>
  </div>
);
