import { useState, useEffect } from "react";
import "./musicsection.css";
import {db} from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useAppContext } from "../../contextStore/PostContext";
import { useHistory } from "react-router-dom";

function MusicSection() {
    const history = useHistory();
    const [currentsong,setCurrentsong] = useState([]);
    const {setPostContent}=useAppContext(); 
    const [songs1,setSongs1] = useState([]);
    const songsCollectionRef = collection(db, "songs1");
    useEffect(() => {
        
       const getSongs1 = async () => {
        const data = await getDocs(songsCollectionRef);
        setSongs1(data.docs.map((doc) => ({...doc.data() , id: doc.id })));
        
       };
        
        getSongs1()
    }, [])

    const postData=(e, songs)=>{
        e.preventDefault();
        setPostContent(songs);
        history.push(`/view`);
    
        }

    return (
        <div>
            <p className="subh">What's new |</p>
        <div className="scrollmenu">
            {songs1.map((songs) => {
                return (<div>
                    
<div className="card"  onClick={(e)=>postData(e,songs)}><p href={songs.link}><img src={songs.image} alt="alanjs" className="deti"></img></p><br></br><p>{songs.name}</p></div>
        </div> //pas this songs variable into post data

            )})}
            </div></div>
    )   
}
  
  export default MusicSection;