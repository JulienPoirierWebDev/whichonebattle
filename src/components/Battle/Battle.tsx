import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import classes from "./Battle.module.css";
import { BattleProps } from "../../types/battleTypesAndInterfaces";

const Battle: React.FC<BattleProps> = ({
  question,
  texte,
  propositions,
  buttons,
  handleButton1,
  handleButton2,
  isVote,
  userVote,
}) => {
  const percentageCSSVariable1 = {
    "--percentage": `${propositions[0].percentage}%`,
    "--background": `${propositions[0].color}`,
  } as React.CSSProperties;

  const percentageCSSVariable2 = {
    "--percentage": `${propositions[1].percentage}%`,
    "--background": `${propositions[1].color}`,
  } as React.CSSProperties;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{question}</IonCardTitle>
        <IonCardSubtitle>{texte}</IonCardSubtitle>
        {userVote && userVote.name  && (
          <h3>Vous avez déja voté pour {userVote.name}</h3>
        )}
      </IonCardHeader>
      <IonCardContent>
        
        {!userVote && buttons && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <IonButton fill="solid" color="dark" onClick={handleButton1}>
              {propositions[0].name}
            </IonButton>
            <IonButton fill="solid" color="dark" onClick={handleButton2}>
              {propositions[1].name}
            </IonButton>
          </div>
        )}
        {isVote && (
          <>
            <div className={classes.battleBarre}>
              {propositions[0].percentage !== 0 ? (
                <div className={classes.barre1} style={percentageCSSVariable1}>
                  <p>{Math.round(propositions[0].percentage)}%</p>
                </div>
              ) : null}
              {propositions[1].percentage !== 0 ? (
                <div className={classes.barre2} style={percentageCSSVariable2}>
                  <p>{Math.round(propositions[1].percentage)}%</p>
                </div>
              ) : null}
            </div>{" "}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{propositions[0].name}</p>
              <p>{propositions[1].name}</p>
            </div>
          </>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default Battle;
