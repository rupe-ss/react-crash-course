import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import AllMeetups from './pages/AllMeetups';
import MainNavigation from './components/layout/MainNavigation';

function App() {
    return (
        <div className='App'>
            <MainNavigation />
            <Switch>
                <Route path='/' exact>
                    <AllMeetups />
                </Route>
                <Route path='/newmeetups'>
                    <NewMeetup />
                </Route>
                <Route path='/favorites'>
                    <Favorites />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
