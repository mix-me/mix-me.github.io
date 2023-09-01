import { useState, useEffect } from "react";
import "./musicsection.css";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function MusicSection() {
  const [songs1, setSongs1] = useState([]);
  const songsCollectionRef = collection(db, "new");

  useEffect(() => {
    const getSongs1 = async () => {
      const data = await getDocs(songsCollectionRef);
      const sortedData = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp); // Change 'timestamp' to the field you want to sort by

      setSongs1(sortedData);
    };

    getSongs1();
  }, []);

  return (
    <div>
      <p className="subh">What's new |</p>
      <div className="scrollmenu">
        {songs1.map((song) => {
          return (
            <div>
              <div className="card">
                <a href={song.link}>
                  <img src={song.image} alt="alanjs" className="deti" />
                </a>
                <br></br>
                <p>{song.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MusicSection;
