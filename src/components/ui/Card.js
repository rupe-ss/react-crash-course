import classes from 'components/ui/Card.module.css';

const Card = (props) => {
    return <div className={classes.card}>{props.childern}</div>;
};

export default Card;
