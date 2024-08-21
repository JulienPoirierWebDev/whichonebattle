import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTextarea,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import BattleWrapper from "../components/BattleWrapper/BattleWrapper";
import { BattleProps } from "../types/battleTypesAndInterfaces";
import { getOneCookie } from "../utils/capacitor/cookies";
import { useHistory, useLocation } from "react-router";
import NewBattles from "../components/NewsBattles/NewBattles";
import { closeCircleOutline, closeOutline } from "ionicons/icons";
const Tab1: React.FC = () => {
  const [newBattlePanel, setNewBattlePanel] = useState<boolean>(false);
  useIonViewWillEnter(() => {
    setNewBattlePanel(false);
  });
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div
          style={{
            display: "grid",
            maxHeight: !newBattlePanel ? "50px" : "0",
            overflow: "hidden",
            transition: "all 0.5s ease-out",
          }}
        >
          <IonButton
            color={"warning"}
            onClick={() => setNewBattlePanel(!newBattlePanel)}
          >
            Créer un nouveau battle
          </IonButton>
        </div>

        <IonGrid
          style={{
            maxHeight: newBattlePanel ? "500px" : "0",
            overflow: "hidden",
            transition: "all 0.5s ease-out",
            marginBottom: newBattlePanel ? "50px" : "0",
          }}
        >
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <h2>Créer un nouveau battle</h2>{" "}
              <IonButton
                style={{ position: "absolute", right: "0", top: "0" }}
                color={"warning"}
                shape="round"
                onClick={() => setNewBattlePanel(false)}
              >
                <IonIcon slot="icon-only" icon={closeOutline} />
              </IonButton>
            </IonCol>
          </IonRow>

          {/*create form*/}
          <IonRow class="ion-justify-content-center">
            <IonCol sizeMd="7">
              <form id="addBattleForm">
                <IonInput
                  placeholder="Chat ou Chien ?"
                  labelPlacement="stacked"
                  label="Titre du battle"
                  name="question"
                  type="text"
                  required
                />
                <IonTextarea
                  placeholder="Chat ou Chien ?"
                  labelPlacement="stacked"
                  label="Description"
                  name="texte"
                  required
                />
                <IonInput
                  placeholder="Chat"
                  labelPlacement="stacked"
                  label="Première réponse"
                  name="proposition1"
                  type="text"
                  required
                />
                <IonInput
                  placeholder="Chien"
                  labelPlacement="stacked"
                  label="Deuxième réponse"
                  name="proposition2"
                  type="text"
                  required
                />
                <IonButton expand="block" type="submit" color="warning">
                  Créer le battle
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
        <NewBattles limit={2} infinite/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
