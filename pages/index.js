import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://cdn.discordapp.com/attachments/872003128361369603/895605502833205288/Screenshot_458.png',
        address: 'Ladakh',
        description: 'Best place for College trip'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://cdn.discordapp.com/attachments/872003128361369603/895605502833205288/Screenshot_458.png',
        address: 'Leh',
        description: 'Another vest place for College trip'
    }
]

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups}></MeetupList>
    )
}

// first below function will run then other component will render usin the data provided by below function
export async function getServerSideProps(context) { // revalidate value is 1
    const req = context.req;
    const res = context.res;

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

// export async function getStaticProps() {    // revalidate value can be changed
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1
//     };
// }

export default HomePage;