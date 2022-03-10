import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from 'react';
import { Card,Button } from "react-bootstrap";
import FavoritesContext from '../../store/favorites-context';
import Card1 from '../ui/Card';


function MeetupItem(props){

    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteHandler(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id)
        }else{
            favoriteCtx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }

    return <Card1>
        <Card style={{ width: "80%",marginLeft: "10%",marginRight: "10%" }}>
            <Card.Body>
                <Card.Img style={{height:"300px"}} src={props.image} variant="top" alt={props.title}></Card.Img>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <p>{props.description}</p>
                    <address>{props.address}</address>
                </Card.Text>
                <Button onClick={toggleFavoriteHandler} variant='danger'>{itemIsFavorite ? "Remove from Favorite":"To Favorite"}</Button>
            </Card.Body>
            
        </Card>
    </Card1>
}

export default MeetupItem;
