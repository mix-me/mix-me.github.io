import React from 'react';
import Banner from './Components/Banner/Banner';
import NavInfo from './Components/NavInfo/NavInfo';
import { IonContent } from '@ionic/react';

const HomePage = () => (
  <>
    <IonContent>
      <div>
      <NavInfo/>
      <Banner/>
      </div>
    </IonContent>
  </>
);

export default HomePage;