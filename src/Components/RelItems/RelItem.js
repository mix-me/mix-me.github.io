import { IonIcon } from '@ionic/react';
import { play } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './relitem.css';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function RelItems() {
  const [release, setRelease] = useState([]);
  const releaseCollectionRef = collection(db, 'songs1');

  useEffect(() => {
    const getRelease = async () => {
      const data = await getDocs(releaseCollectionRef);
      const sortedData = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => b.timestamp - a.timestamp); // Change 'timestamp' to the field you want to sort by

      setRelease(sortedData);
    };

    getRelease();
  }, []);

  return (
    <div>
      {release.map((releaseItem) => {
        return (
          <div className="muse" key={releaseItem.id}>
            <img src={releaseItem.image} alt="photo" />
            <div className="sepr">
              <div className="rights">
                <h3>{releaseItem.name}</h3>
                <p>{releaseItem.artist}</p>
              </div>
              <a href={releaseItem.link}>
                {' '}
                <IonIcon className="player" icon={play} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RelItems;
