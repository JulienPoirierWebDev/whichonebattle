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
import React, { useContext } from "react";
import Header from "./Header/Header";
import { useHistory } from "react-router-dom";
import { setCookie } from "../utils/capacitor/cookies";
import useAuthContext from "../hooks/useAuthContext";

type Props = {
  setInscription: React.Dispatch<React.SetStateAction<boolean>>;
};

const Connexion: React.FC<Props> = ({ setInscription }) => {
  const { setToken } = useAuthContext();

  const handleConnexionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const request = await fetch(
      "https://api.which-one-battle.julienpoirier-webdev.com/api/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const response: { token: string } = await request.json();

    if (response.token !== undefined) {
      setCookie("token", response.token);
      if (setToken) {
        setToken(response.token);
      }
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  const handleInscriptionNavigation = () => {
    setInscription(true);
  };
  return (
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
  );
};

export default Connexion;
