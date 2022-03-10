import MeetupItem from "./MeetupItem";

function MeetupList(props){
    return <div>
        {props.listItem.map((meetupItem)=>{
            return <MeetupItem 
            key={meetupItem.id}
            id={meetupItem.id}
            image={meetupItem.image} 
            address={meetupItem.address} 
            title={meetupItem.title} 
            description={meetupItem.description}/>
        })}
    </div>
}

export default MeetupList;