import './App.css';
import Login from './componets/Login';
import Profile from './componets/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
    <div>
      <Login/>
      <Profile/>
    </div>
    </UserContextProvider>
  );
}

export default App;
