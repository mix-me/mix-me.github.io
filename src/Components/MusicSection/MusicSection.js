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
        console.log(data);
        
       }
        
        getSongs1()
    }, [])
    return (
        <div><p className="subh">What's new |</p>
        <div className="scrollmenu">
<div className="card"><a href="https://realityaudiostudio.github.io/mixme2/sng9.html"><img src="https://realityaudiostudio.github.io/img/kalimg.png" alt="alanjs" className="deti"></img></a><br></br>Kaalpanthin</div>
        </div></div>
    )   
}
  
  export default MusicSection;