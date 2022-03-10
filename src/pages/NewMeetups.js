import MeetupForm from "../components/meetups/MeetupForm";
import {useNavigate} from "react-router-dom"

function NewMeetupsPage(){
    
    const navigate = useNavigate();

    function handleAddMeetup(meetupData){
        console.log(meetupData)
        fetch('https://react-prac-c7da6-default-rtdb.firebaseio.com//meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers:{
                "Content-Type":"application/json"
            }
        }
        ).then(()=>{
            navigate('/',{replace:true});
        });
    }

    return <div style={{marginTop:"60px"}}>
        <h1 style={{marginLeft:"10%"}}>Add new meetup</h1>
        <MeetupForm onAddMeetups={handleAddMeetup} /> 
    </div>
}

export default NewMeetupsPage;