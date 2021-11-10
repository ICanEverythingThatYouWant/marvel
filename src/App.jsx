import './styles/app.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/UI/header/navbar/Navbar';
import CharacterAPI from './components/UI/main/Character/CharacterAPI';
import ComicsApi from './components/UI/main/comics/ComicsApi';
import FavoriteApi from './components/UI/main/favorite/favoriteIcon/FavoriteApi';
import Footer from './components/UI/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main className="App-main">
          <Route exact path="/heroes" component={CharacterAPI} />
          <Route exact path="/comics" component={ComicsApi} />
          <Route exact path="/favorites" component={FavoriteApi} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
