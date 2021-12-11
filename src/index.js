import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Categories from './Categories';
import Items from './Items';

const rootElement = document.getElementById('root');
render(
  // Routing syntax changed due to changes added in React Router v6
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='categories' element={<Categories />} />
        <Route path='items' element={<Items />} />
        <Route path='*' element={"Error 404, Page not found"} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement  
);