import React from 'react';
import classes from 'components/ui/Card.module.css';

const Card = ({ children }) => {
    return <div className={classes.card}>{children}</div>;
};

export default Card;
