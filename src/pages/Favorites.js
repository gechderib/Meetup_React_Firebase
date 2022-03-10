import {useContext} from 'react'
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorites-context';


function FavoritesPage(){

    const favoriteCtx = useContext(FavoritesContext)

    let content;

    if(favoriteCtx.totalFavorite == 0){
        content = <p>no favorite. please add some</p>
    }else{
        content = <MeetupList listItem={favoriteCtx.favorites}/>
    }

    return <div style={{marginTop:"60px"}}>
       <h1>My Favorites</h1>
       {content}
    </div>
}

export default FavoritesPage;