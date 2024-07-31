import { IonContent, IonPage } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Header from "../components/Header/Header";
import Battle from "../components/Battle/Battle";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <Battle />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
