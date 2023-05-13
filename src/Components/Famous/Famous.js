import { useState, useEffect } from "react";
import "./famous.css";
import {db} from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Famous() {
    const [famous,setFamous] = useState([]);
    const famousCollectionRef = collection(db, "famous");
    useEffect(() => {
        
       const getFamous = async () => {
        const data = await getDocs(famousCollectionRef);
        setFamous(data.docs.map((doc) => ({...doc.data() , id: doc.id })));
        
       };
        
        getFamous()
    }, [])
    return (
        <div>
            <p className="subh">Instrumentals |</p>
        <div className="scrollmenu">
            {famous.map((famous) => {
                return <div>
                    
<div className="card"><a href={famous.link}><img src={famous.image} alt="alanjs" className="deti"></img></a><br></br><p>{famous.name}</p></div>
        </div> 
            })}
            </div></div>
    )   
}
  
  export default Famous;