import './App.css';
import Header from './components/Header/Header';
//  import Initial from './components/Initial/Initial';
// import UserNotFound from './components/UserNotFound/UserNotFound';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/*  <Initial /> */}
      {/*  <UserNotFound /> */}
    </div>
  );
}

export default App;
