import {IonIcon} from '@ionic/react'
import { play } from 'ionicons/icons';
import React from 'react';
import "./relitem.css";
import { useState, useEffect } from "react";
import {db} from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function RelItems() {

    const [release,setRelease] = useState([]);
    const releaseCollectionRef = collection(db, "release");
    useEffect(() => {
        
       const getRelease = async () => {
        const data = await getDocs(releaseCollectionRef);
        setRelease(data.docs.map((doc) => ({...doc.data() , id: doc.id })));
        
       };
        
        getRelease()
    }, [])

    return ( <div>
        {release.map((release) => {
            return (
                <div className='muse'>
         <img src={release.image} alt='photo'></img>
         <div className='sepr'> <div className='rights'>
            <h3>{release.name}</h3>
            <p>{release.artist}</p>
         </div>
         <a href={release.link} > <IonIcon className='player' icon={play} /></a>
        </div></div>
    )})}      
</div>)
}
export default RelItems;