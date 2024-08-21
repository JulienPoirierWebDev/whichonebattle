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
}

const NewBattles : React.FC<NewBattlesProps> = ({infinite=false, limit=5}) => {
  const [battles, setBattles] = useState<BattleProps[]>([]);
  const [actualPage, setActualPage] = useState<number>(0);
  const [isMoreBattles, setIsMoreBattles] = useState<boolean>(true);
  const { isAuth } = useAuthContext();

  const getFiveBattles = useCallback(async (page:number = 0) => {

    const options = getOneCookie("token") ? {
      headers: {
        Authorization: `Bearer ${getOneCookie("token")}`,
      },
    } : {};
    const request = await fetch(
      `https://api.which-one-battle.julienpoirier-webdev.com/api/battles?limit=${limit}&page=${page}`
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
          return -1;
        }
        return 1;
      })
    );
    
  };

  useEffect(() => {


    getFiveBattles();
  }, []);

  return (
    <><IonGrid>
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
      const newBattles = await getFiveBattles(actualPage + 1);
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
