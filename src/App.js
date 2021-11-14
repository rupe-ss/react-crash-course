import "./App.css";
import { Route, Switch } from "react-router-dom";
import Favorites from "./components/pages/Favorites";
import NewMeetups from "./components/pages/NewMeetups";
import AllMeetups from "./components/pages/AllMeetups";

function App() {
  return (
    <div className='App'>
      <Route path='/'>
        <AllMeetups />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      <Route path='/newmeetups'>
        <NewMeetups />
      </Route>
    </div>
  );
}

export default App;
