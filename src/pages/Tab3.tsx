import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import Header from "../components/Header/Header";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Nope</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Real Nope" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
