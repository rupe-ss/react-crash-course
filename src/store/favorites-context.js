import { useState, createContext } from 'react';

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
});

export const FavoriteContextProvider = ({ children }) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    const removeFavoriteHandler = (meetUpId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetUpId);
        });
    };

    const itemIsFavoriteHandler = (meetUpId) => {
        return userFavorites.some((meetup) => meetup.id === meetUpId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
    return (
        <FavoriteContext.Provider value={context}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;
