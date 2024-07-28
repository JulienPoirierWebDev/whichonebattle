import {
  IonContent,
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonText,
} from "@ionic/react";
import React from "react";
import Header from "../components/Header/Header";

const Inscription: React.FC = () => {
  const handleInscriptionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <h1>Inscription</h1>
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
                  labelPlacement="stacked"
                  placeholder="Veuillez entrer votre email"
                  type="email"
                />
                <IonInput
                  type="password"
                  label="Mot de passe"
                  labelPlacement="stacked"
                  placeholder="Veillez entrer votre mot de passe"
                />
                <IonInput
                  type="password"
                  label="Confirmation"
                  labelPlacement="stacked"
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

export default Inscription;
