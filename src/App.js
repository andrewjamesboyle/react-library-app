import BookList from './components/book/BookList';
import './App.css';
import BookDetail from './components/book/BookDetail';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/books" >
        <main className="container">
          <h1>Library Catalog</h1>
          <BookList />
        </main>
      </Route>

      <Route path="/books/:id" >
        <BookDetail />
      </Route>
    </Switch>
  );
}

export default App;
