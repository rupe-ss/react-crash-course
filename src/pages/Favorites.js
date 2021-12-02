import React, { useContext } from 'react';
import FavoriteContext from 'store/favorites-context';
import MeetupList from 'components/meetups/MeetupList';

const Favorites = () => {
    const favoritesCtx = useContext(FavoriteContext);

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p> You have no favorites yet. Start adding one. </p>;
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />;
    }

    return (
        <section>
            <h1> My Favorites</h1>
            {content}
        </section>
    );
};

export default Favorites;
