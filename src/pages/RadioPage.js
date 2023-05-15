import React from 'react';
import { IonContent } from '@ionic/react';
import RelHead from '../Components/RelHead/RelHead';
import RelItems from '../Components/RelItems/RelItem';


const RadioPage = () => (
  <>
    <IonContent>
      <div>
      <RelHead/>
      <RelItems/>
      </div>
    </IonContent>
  </>
);

export default RadioPage;