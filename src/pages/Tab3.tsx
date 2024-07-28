import {
  IonContent,
  IonGrid,
  IonPage,
  IonTitle,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import Header from "../components/Header/Header";
import { FormEventHandler, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Tab3: React.FC = () => {
  const profil = null;

  const history = useHistory();

  useEffect(() => {
    if (!profil) history.push("/connexion");
  }, [history, profil]);

  if (!profil) return null;

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonTitle>
          <h1 className="ion-text-center">Profil</h1>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
