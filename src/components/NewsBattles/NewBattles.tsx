import { useCallback, useEffect, useState } from "react";
import {
  BattleProps,
  propositionsType,
} from "../../types/battleTypesAndInterfaces";
import { getOneCookie } from "../../utils/capacitor/cookies";
import { useLocation } from "react-router";
import { IonCol, IonGrid, IonInfiniteScroll, IonInfiniteScrollContent, IonRow } from "@ionic/react";
import BattleWrapper from "../BattleWrapper/BattleWrapper";
import useAuthContext from "../../hooks/useAuthContext";


interface NewBattlesProps {
  infinite?: boolean;
  limit?: number;
  unvoted?: boolean;
}

const NewBattles : React.FC<NewBattlesProps> = ({infinite=false, limit=5, unvoted=false}) => {
  const [battles, setBattles] = useState<BattleProps[]>([]);
  const [actualPage, setActualPage] = useState<number>(0);
  const [isMoreBattles, setIsMoreBattles] = useState<boolean>(true);
  const { isAuth } = useAuthContext();

  const getBattles = useCallback(async (page:number = 0) => {

    const options = getOneCookie("token") ? {
      headers: {
        Authorization: `Bearer ${getOneCookie("token")}`,
      },
    } : {};
    const request = await fetch(
      `https://api.which-one-battle.julienpoirier-webdev.com/api/battles?limit=${limit}&page=${page}${unvoted ? "&unvoted=true" : ""}`
    , 
   options
        );
    const response = await request.json();

      setBattles((prev) => {
        const newBattles = response.filter((newBattle : BattleProps) => {
          const isOldBattle = prev.find(
            (oldBattle) => oldBattle._id === newBattle._id
          );
          if (isOldBattle) {
            return false;
          }
          return true;
        }
        );

        return [...prev, ...newBattles];
      });

    return response;
    
  }, []); 

  const updateBattles = (idToUpdate: string, propositionVoted: string) => {
    const updatedBattles = battles.map((battle) => {
      if (battle._id === idToUpdate) {
        const indexOfProposition = battle.propositions.findIndex(
          (proposition) => proposition.name === propositionVoted
        );
  
        return {
          ...battle,
          propositions: battle.propositions.map((proposition, index) => {
            if (index === indexOfProposition) {
              return { ...proposition, value: proposition.value + 1 };
            }
            return proposition;
          }) as propositionsType,
          userVote: { name: propositionVoted, battle_id: idToUpdate, user_id: "" },
        };
      }
  
      return battle;
    });
  
    setBattles(updatedBattles);
  };
  

  useEffect(() => {


    getBattles();
  }, []);

  return (
    <>
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
                key={oneBattle._id}
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
    <IonInfiniteScroll disabled={!infinite || !isMoreBattles}  onIonInfinite={async (ev) => {
      console.log("load more battles");
      setActualPage((prev) => prev + 1);
      const newBattles = await getBattles(actualPage + 1);
      if(newBattles.length === 0) {
        setIsMoreBattles(false);
      }
      ev.target.complete();
    }}>
      <IonInfiniteScrollContent loadingText="Loading more battles ..." > </IonInfiniteScrollContent>

    </IonInfiniteScroll>
    </>
  );
};

export default NewBattles;
