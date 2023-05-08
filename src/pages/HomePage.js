import React from 'react';
import { IonContent } from '@ionic/react';
import Banner from '../Components/Banner/Banner';
import NavInfo from '../Components/NavInfo/NavInfo';
import MusicSection from '../Components/MusicSection/MusicSection';


const HomePage = () => (
  <>
    <IonContent>
      <div>
      <NavInfo/>
      <Banner/>
      <MusicSection/>
      </div>
    </IonContent>
  </>
);

export default HomePage;