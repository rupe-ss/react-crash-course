import NewMeetupForm from 'components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const NewMeetup = () => {
    const history = useHistory();
    const addMeetupHandler = (meetupDate) => {
        fetch(
            'https://react-crash-course-acade-d96f7-default-rtdb.firebaseio.com/meetup.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupDate),
                headers: {
                    'Content-type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/');
        });
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetup;
