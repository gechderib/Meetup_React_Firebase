import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "this is the first meetup",
    image: "https://picsum.photos/200/300",
    address: "Addis Ababa",
    description: "this is a first, amazing meetup",
  },
  {
    id: "m2",
    title: "this is the second meetup",
    image: "https://picsum.photos/200/300",
    address: "gondar",
    description: "this is a second, amazing meetup",
  },
  {
    id: "m3",
    title: "this is the third meetup",
    image: "https://picsum.photos/200/300",
    address: "axum",
    description: "this is a third, amazing meetup",
  },
  {
    id: "m4",
    title: "this is the fourth meetup",
    image: "https://picsum.photos/200/300",
    address: "Adama",
    description: "this is a last, amazing meetup",
  },
];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("https://react-prac-c7da6-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        // console.log(response.json())
        
        return response.json();
      })
      .then((data) => {
        const meetups = []
        for(const key in data){
            const meetup = {
                id:key,
                ...data[key]
            };
            meetups.push(meetup)
        }

        console.log(data)
        setIsLoading(false);
        setFetchedData(meetups);
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
    <div style={{ marginTop: "60px" }}>
      <h1 style={{ marginLeft: "10%" }}>All meetups</h1>
      <MeetupList listItem={fetchedData} />
    </div>
  );
}

export default AllMeetupsPage;
