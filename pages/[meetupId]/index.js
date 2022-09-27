import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://cdn.discordapp.com/attachments/872003128361369603/895605502833205288/Screenshot_458.png'
            title='The First MeetUp'
            address='Ladahk'
            description='The meetup description'
        >
        </MeetupDetail>
    )
}

// export async function getServerSideProps(context) { // revalidate value is 1
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(context) {    // revalidate value can be changed
    // fetch data from an API
    const meetupId = context.params.meetupId;
    return {
        props: {
            image: 'https://cdn.discordapp.com/attachments/872003128361369603/895605502833205288/Screenshot_458.png',
            id: meetupId,
            title: 'The First MeetUp',
            address: 'Ladahk',
            description: 'The meetup description'
        },
        revalidate: 1
    };
}

export default MeetupDetails;