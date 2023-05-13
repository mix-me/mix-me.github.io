import { useState, useEffect } from "react";
import "./musicsection.css";
import {db} from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function MusicSection() {
    const [songs1,setSongs1] = useState([]);
    const songsCollectionRef = collection(db, "songs1");
    useEffect(() => {
        
       const getSongs1 = async () => {
        const data = await getDocs(songsCollectionRef);
        setSongs1(data.docs.map((doc) => ({...doc.data() , id: doc.id })));
        
       };
        
        getSongs1()
    }, [])
    return (
        <div>
            <p className="subh">What's new |</p>
        <div className="scrollmenu">
            {songs1.map((songs) => {
                return (<div>
                    
<div className="card"><a href={songs.link}><img src={songs.image} alt="alanjs" className="deti"></img></a><br></br><p>{songs.name}</p></div>
        </div> 
            )})}
            </div></div>
    )   
}
  
  export default MusicSection;