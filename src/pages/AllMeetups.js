import React, { useState, useEffect } from 'react';
import MeetupList from 'components/meetups/MeetupList';

const AllMeetups = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-crash-course-acade-d96f7-default-rtdb.firebaseio.com/meetup.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                const meetups = [];

                for (const key in data) {
                    //console.log(data); => This will print above data 3 times.
                    //console.log(key); => This will print one key.
                    //console.log(data[key]); => THis will print one data inside the key.
                    const meeetup = {
                        id: key,
                        ...data[key],
                    };
                    meetups.push(meeetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div className='allmeet'>
            <h1>All Meetup's </h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
};

export default AllMeetups;
