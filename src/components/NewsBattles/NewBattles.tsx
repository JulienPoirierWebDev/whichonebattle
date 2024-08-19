import { useEffect, useState } from "react";
import {
  BattleProps,
  propositionsType,
} from "../../types/battleTypesAndInterfaces";
import { getOneCookie } from "../../utils/capacitor/cookies";
import { useLocation } from "react-router";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import BattleWrapper from "../BattleWrapper/BattleWrapper";
import useAuthContext from "../../hooks/useAuthContext";

const NewBattles = () => {
  const [battles, setBattles] = useState<BattleProps[]>([]);
  const { isAuth } = useAuthContext();

  const location = useLocation();
  const updateBattles = (idToUpdate: string, propositionVoted: string) => {
    const updatedBattles = battles.filter((battle) => {
      if (battle._id === idToUpdate) {
        return false;
      }
      return true;
    });

    const indexOfProposition = updatedBattles[0].propositions.findIndex(
      (proposition) => proposition.name === propositionVoted
    );

    updatedBattles[0] = {
      ...updatedBattles[0],
      propositions: updatedBattles[0].propositions.map((proposition, index) => {
        if (index === indexOfProposition) {
          return { ...proposition, value: proposition.value + 1 };
        }
        return proposition;
      }) as propositionsType,
    };

    const notUpdatedBattles = battles.filter((battle) => {
      if (battle._id === idToUpdate) {
        return true;
      }
      return false;
    });

    setBattles(
      [...updatedBattles, ...notUpdatedBattles].sort((a, b) => {
        if (b._id < a._id) {
          return 1;
        }
        return -1;
      })
    );
  };

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
        battles
          .sort((a, b) => {
            const dateA = new Date(a.createdAt ?? "") as Date;
            const dateB = new Date(b.createdAt ?? "") as Date;
            if (dateA > dateB) {
              return -1;
            } else if (dateA < dateB) {
              return 1;
            } else {
              return 0;
            }
          })
          .map((oneBattle) => {
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
                    buttons={isAuth}
                    _id={oneBattle._id}
                    updateBattles={updateBattles}
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
