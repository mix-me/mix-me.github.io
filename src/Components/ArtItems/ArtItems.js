import React from "react";
import "./artitems.css";
import { useState, useEffect } from "react";
import {db} from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function ArtItems (){

    const [artist,setArtist] = useState([]);
    const artistCollectionRef = collection(db, "artist");
    useEffect(() => {
        
       const getArtist = async () => {
        const data = await getDocs(artistCollectionRef);
        setArtist(data.docs.map((doc) => ({...doc.data() , id: doc.id })));
        
       };
        
        getArtist()
    }, [])

    return(<div>
        {artist.map((artist) => {
            return (<div>
        <div className="artone" style={{background:artist.color}}>
            <div className="artdes">
            <a href={artist.link} ><h3>{artist.name}</h3></a>
                <p>{artist.tag}</p>
            </div>
            <img src={artist.image} alt="art"></img>
        </div>

        </div>
        )})} 
        </div>
    )
}
export default ArtItems;