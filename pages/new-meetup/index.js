import NewMeetupForm from "../../components/meetups/NewMeetupForm"; 

function NewMeetUpPage() {
    function addMeetupHandler(enterMeetupData) {
        console.log(enterMeetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    )
}

export default NewMeetUpPage;