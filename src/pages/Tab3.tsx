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
import { FormEventHandler } from "react";

const Tab3: React.FC = () => {
  const handleConnexionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleInscriptionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonTitle>
          <h1 className="ion-text-center">Profil</h1>
        </IonTitle>
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <h2>Connexion</h2>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <form id="connexion" action="" onSubmit={handleConnexionSubmit}>
                <IonInput
                  name="email"
                  label="Email"
                  placeholder="Veuillez entrer votre email"
                  type="email"
                />
                <IonInput
                  name="password"
                  type="password"
                  label="Mot de passe"
                  placeholder="Veillez entre votre mot de passe"
                />
                <IonButton fill="outline" type="submit" expand="block">
                  Connexion
                </IonButton>
              </form>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center ion-margin-top">
            <IonCol sizeMd="7">
              <h2>Inscription</h2>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <form
                action=""
                id="inscription"
                onSubmit={handleInscriptionSubmit}
              >
                <IonInput
                  name="email"
                  label="Email"
                  placeholder="Veuillez entrer votre email"
                  type="email"
                />
                <IonInput
                  type="password"
                  label="Mot de passe"
                  placeholder="Veillez entrer votre mot de passe"
                />
                <IonInput
                  type="password"
                  label="Confirmation"
                  placeholder="Veillez confirmer votre mot de passe"
                />
                <IonButton fill="outline" type="submit" expand="block">
                  Inscription
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
