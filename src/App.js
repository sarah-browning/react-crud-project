import logo from './logo.svg';
import './App.css';
/* 
    For this project, you will create the CRUD functionality for an inventory system.
    You will create the functionality to add, edit, and delete items and item categories.
        For categories, you will just require the category name (and id which will be managed via an auto incrementing primary key).
        For items, you will be required to store the category_id, title, description, price, quantity, and sku,
    Your app should start by displaying a page of links (one to manage categories and one to manage items).
    Use react router to load the content for each management area.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
