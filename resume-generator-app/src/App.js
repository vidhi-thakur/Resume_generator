import './App.css';
// import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <WelcomePage /> */}
    </div>
  );
}

export default App;
