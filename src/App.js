import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import AllMeetups from './pages/AllMeetups';
import Layout from 'components/layout/Layout';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <AllMeetups />
                </Route>
                <Route path='/newmeetup'>
                    <NewMeetup />
                </Route>
                <Route path='/favorites'>
                    <Favorites />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
