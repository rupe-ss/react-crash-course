import classes from 'components/meetups/NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = () => {
    return (
        <form>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='text' required id='image' />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea required id='description' rows='5' />
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    );
};

export default NewMeetupForm;
