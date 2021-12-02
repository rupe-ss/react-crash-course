import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoriteContext from 'store/favorites-context';

const MainNavigation = () => {
    const favoriteCtx = useContext(FavoriteContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        {/* <a href=''>Some Link</a> */}
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/newmeetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>
                                {favoriteCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
