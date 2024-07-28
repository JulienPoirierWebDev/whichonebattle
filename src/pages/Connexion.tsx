import {
  IonContent,
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonText,
  IonNavLink,
} from "@ionic/react";
import React from "react";
import Header from "../components/Header/Header";
import { magnetSharp } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const Connexion: React.FC = () => {
  const history = useHistory();
  const handleConnexionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleInscriptionNavigation = () => {
    history.push("/inscription");
  };
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <h1>Connexion</h1>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <form id="connexion" action="" onSubmit={handleConnexionSubmit}>
                <IonInput
                  name="email"
                  label="Email"
                  labelPlacement="stacked"
                  placeholder="Veuillez entrer votre email"
                  type="email"
                />
                <IonInput
                  name="password"
                  type="password"
                  label="Mot de passe"
                  labelPlacement="stacked"
                  placeholder="Veillez entre votre mot de passe"
                />
                <IonButton fill="outline" type="submit" expand="block">
                  Connexion
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7" class="ion-justify-content-center">
              <IonText className="ion-text-center">
                <p>Vous n'êtes pas encore inscrit ?</p>
              </IonText>
              <IonButton
                fill="clear"
                expand="block"
                style={{ margin: "auto" }}
                onClick={handleInscriptionNavigation}
              >
                Cliquez ici pour vous inscrire
              </IonButton>
              <IonNavLink />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Connexion;
