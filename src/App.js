import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';
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
                    <NewMeetups />
                </Route>
                <Route path='/favorites'>
                    <Favorites />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
