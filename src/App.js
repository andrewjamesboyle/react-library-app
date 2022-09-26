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
        <main className="container">
          <h1>Library Catalog</h1>
        </main>
        <Home />
      </Route>

      <Route exact path="/books" >
        <BookList />
      </Route>

      <Route path="/books/:id" >
        <BookDetail />
      </Route>
    </Switch>
  );
}

export default App;
