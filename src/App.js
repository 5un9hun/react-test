import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
