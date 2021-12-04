import { useRef, useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from 'config/Firebase';

import classes from 'components/meetups/NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = ({ onAddMeetup }) => {
    const [image, setImage] = useState(null);

    const titleInputRef = useRef();
    const bestInputRef = useRef();
    const descriptionInputRef = useRef();

    const imageChangeHandler = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        uploadHandler(image);
    };

    const uploadHandler = (image) => {
        if (!image) return;

        const sotrageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // const prog = Math.round(
                //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                // );
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    const enteredTitle = titleInputRef.current.value;
                    const enteredBestThing = bestInputRef.current.value;
                    const enteredDescription =
                        descriptionInputRef.current.value;
                    const enteredImageUrl = downloadURL;

                    const meetupData = {
                        title: enteredTitle,
                        image: enteredImageUrl,
                        address: enteredBestThing,
                        description: enteredDescription,
                    };

                    onAddMeetup(meetupData);
                });
            }
        );
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input
                        type='text'
                        required
                        id='title'
                        ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input
                        type='file'
                        required
                        id='image'
                        onChange={(e) => imageChangeHandler(e)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='best'>
                        One Best thing about This place
                    </label>
                    <input type='text' required id='best' ref={bestInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        required
                        id='description'
                        rows='5'
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
