import './App.css';
// import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';
import CreateResumeForm from "./pages/CreateResumeForm"
// import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      {/* <WelcomePage /> */}
      <CreateResumeForm />
    </div>
  );
}

export default App;
