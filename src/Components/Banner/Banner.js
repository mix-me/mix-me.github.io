import { useState,useEffect } from 'react';
import React from 'react'
import "./Banner.css";
import {db} from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";


function Banner() {
  const [opener,setOpener] = useState([]);
  const openerCollectionRef = collection(db, "opener");
  useEffect(() => {
      
     const getOpener = async () => {
      const data = await getDocs(openerCollectionRef);
      setOpener(data.docs.map((doc) => ({...doc.data() , id: doc.id })));
      
     };
      
      getOpener()
  }, []) 

  return (
    <div>
    {opener.map((opener) => {
      return (<div>
    <div className='adh' style={{backgroundColor:opener.color}}>
    
<a href={opener.link}><img className='bnrimg' src={opener.image} alt="hi" /></a><p className='bnrp'>{opener.desc}</p>
    </div></div>
    )})}
    </div>
  )
}

export default Banner;