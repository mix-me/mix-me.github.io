import React from 'react';
import { IonContent } from '@ionic/react';
import ArtHead from '../Components/ArtHead/ArtHead';
import ArtItems from '../Components/ArtItems/ArtItems';


const LibraryPage = () => (
  <>
    <IonContent>
      <div>
        <ArtHead/>
        <ArtItems/>
      </div>
    </IonContent>
  </>
);

export default LibraryPage;