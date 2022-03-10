import { Form,Button } from "react-bootstrap";
import FormWrap from "../ui/FormWrap";
import './MeetupForm.css'
import {useRef} from "react"

function MeetupForm(props){
    
    const inputTitle = useRef();
    const inputImage = useRef();
    const inputAddress = useRef();
    const inputDescription = useRef();

    function submitHandler(e){
        e.preventDefault();

        const enteredTitle = inputTitle.current.value;
        const enteredImage = inputImage.current.value;
        const enteredAddress = inputAddress.current.value;
        const enteredDescription = inputDescription.current.value;

        const meetupData = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }

        props.onAddMeetups(meetupData);
    }
    return <FormWrap>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" ref={inputTitle}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control type="url" placeholder="imageUrl" ref={inputImage}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" ref={inputAddress}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" as="textarea" rows={4} placeholder="description ..." ref={inputDescription}></Form.Control>
            </Form.Group>
            <Button  className="btn1"  variant="danger" type="submit">Add Meetup</Button>
        </Form>
    </FormWrap>
}

export default MeetupForm;