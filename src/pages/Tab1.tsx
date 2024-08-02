import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Header from "../components/Header/Header";
import { useState } from "react";
import fakeBattles from "../utils/fakeBattles";
import BattleWrapper from "../components/BattleWrapper/BattleWrapper";

const Tab1: React.FC = () => {
  const [battles, setBattles] = useState(fakeBattles);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          {battles.map((oneBattle) => {
            return (
              <IonRow
                key={oneBattle.question}
                class="ion-justify-content-center"
              >
                <IonCol sizeMd="7">
                  <BattleWrapper
                    key={oneBattle.question}
                    setBattles={setBattles}
                    {...oneBattle}
                  />
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
