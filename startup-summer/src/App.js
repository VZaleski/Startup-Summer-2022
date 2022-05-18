import './App.css';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import UserNotFound from './components/UserNotFound/UserNotFound';
import Main from './components/Main/Main';
//  import getInfoUser from './functions/getDataApiGit';
import useDataGit from './hooks/useDataGit';

function App() {
  const { data, errorUser, getInfoUser } = useDataGit();
  const sendInfoUser = (name) => {
    getInfoUser(name);
  };
  return (
    <div className="App">
      <Header sendInfoUser={sendInfoUser} />
      {!data && !errorUser && <Initial />}
      {data && !errorUser && <Main data={data} />}
      {errorUser && <UserNotFound />}
    </div>
  );
}

export default App;
