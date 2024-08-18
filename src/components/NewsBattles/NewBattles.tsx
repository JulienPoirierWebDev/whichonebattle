import { useEffect, useState } from "react";
import { BattleProps } from "../../types/battleTypesAndInterfaces";
import { getOneCookie } from "../../utils/capacitor/cookies";
import { useLocation } from "react-router";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import BattleWrapper from "../BattleWrapper/BattleWrapper";
import useAuthContext from "../../hooks/useAuthContext";

const NewBattles = () => {
  const [battles, setBattles] = useState<BattleProps[]>([]);
  const { isAuth } = useAuthContext();

  const location = useLocation();

  useEffect(() => {
    console.log("Tab1.tsx: useEffect: location.pathname: ", location.pathname);
    const getFiveBattles = async () => {
      const request = await fetch(
        "https://api.which-one-battle.julienpoirier-webdev.com/api/battles?limit=5"
      );
      const response = await request.json();

      setTimeout(() => {
        setBattles((prev) => []);
        setBattles((prev) => [...prev, ...response]);
      }, 2000);
    };

    getFiveBattles();
  }, []);

  return (
    <IonGrid>
      {battles.length > 0 ? (
        battles.map((oneBattle) => {
          return (
            <IonRow key={oneBattle.question} class="ion-justify-content-center">
              <IonCol sizeMd="7">
                <BattleWrapper
                  key={oneBattle.question}
                  setBattles={setBattles}
                  {...oneBattle}
                  buttons={isAuth}
                />
              </IonCol>
            </IonRow>
          );
        })
      ) : (
        <IonGrid>
          <p className="ion-text-center">Loading ...</p>
        </IonGrid>
      )}
    </IonGrid>
  );
};

export default NewBattles;
