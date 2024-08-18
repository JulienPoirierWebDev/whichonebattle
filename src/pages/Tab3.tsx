import { IonContent, IonPage, IonTitle, IonButton } from "@ionic/react";
import "./Tab3.css";
import Header from "../components/Header/Header";

import useAuthContext from "../hooks/useAuthContext";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import { useState } from "react";

const Tab3: React.FC = () => {
  const { isAuth, loading, removeCookie } = useAuthContext();
  const [inscription, setInscription] = useState<boolean>(false);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonTitle>
          {isAuth && (
            <>
              <h1 className="ion-text-center">Profil</h1>
              <IonButton
                onClick={async () => {
                  removeCookie();
                }}
              >
                Se deconnecter
              </IonButton>
            </>
          )}
          {!isAuth && !inscription && (
            <Connexion setInscription={setInscription} />
          )}
          {!isAuth && inscription && (
            <Inscription setInscription={setInscription} />
          )}
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
