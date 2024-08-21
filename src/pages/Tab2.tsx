import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import Header from "../components/Header/Header";
import NewBattles from "../components/NewsBattles/NewBattles";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <IonContent>
        <NewBattles limit={5} infinite/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
