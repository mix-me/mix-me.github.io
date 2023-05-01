import React from 'react';
import { IonContent } from '@ionic/react';
import Banner from '../Components/Banner/Banner';
import NavInfo from '../Components/NavInfo/NavInfo';

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