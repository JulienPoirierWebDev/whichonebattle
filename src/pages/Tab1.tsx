import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import "./Tab1.css";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import BattleWrapper from "../components/BattleWrapper/BattleWrapper";
import { BattleProps } from "../types/battleTypesAndInterfaces";
import { getOneCookie } from "../utils/capacitor/cookies";
import { useHistory, useLocation } from "react-router";
import NewBattles from "../components/NewsBattles/NewBattles";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <NewBattles />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
