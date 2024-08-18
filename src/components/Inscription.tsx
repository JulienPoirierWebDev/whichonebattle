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
import Header from "./Header/Header";
import { setCookie } from "../utils/capacitor/cookies";

type Props = {
  setInscription: React.Dispatch<React.SetStateAction<boolean>>;
};

const Inscription: React.FC<Props> = ({ setInscription }) => {
  const handleConnexionNavigation = () => {
    setInscription(false);
  };

  const handleInscriptionSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmation = formData.get("confirmation") as string;

    if (password !== confirmation) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    const request = await fetch(
      "https://api.which-one-battle.julienpoirier-webdev.com/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      }
    );

    const response = await request.json();
    console.log(response);

    if (response.token) {
      console.log(response.token);
      setCookie("token", response.token);
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };
  return (
    <IonGrid>
      <IonRow class="ion-justify-content-center">
        <IonCol sizeMd="7">
          <h1>Inscription</h1>
        </IonCol>
      </IonRow>
      <IonRow class="ion-justify-content-center">
        <IonCol sizeMd="7">
          <form action="" id="inscription" onSubmit={handleInscriptionSubmit}>
            <IonInput
              name="name"
              label="Nom"
              labelPlacement="stacked"
              placeholder="Veuillez entrer votre nom"
              type="text"
            />
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
              placeholder="Veillez entrer votre mot de passe"
            />
            <IonInput
              name="confirmation"
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
      <IonRow class="ion-justify-content-center">
        <IonCol sizeMd="7" class="ion-justify-content-center">
          <IonText className="ion-text-center">
            <p>Vous êtes déja inscrit ?</p>
          </IonText>
          <IonButton
            fill="clear"
            expand="block"
            style={{ margin: "auto" }}
            onClick={handleConnexionNavigation}
          >
            Cliquez ici pour vous connecter
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Inscription;
