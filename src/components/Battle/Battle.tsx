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
      </IonCardHeader>
      <IonCardContent>
        {buttons && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <IonButton
              fill="solid"
              size="large"
              color="dark"
              onClick={handleButton1}
            >
              {propositions[0].name}
            </IonButton>
            <IonButton
              fill="solid"
              size="large"
              color="dark"
              onClick={handleButton2}
            >
              {propositions[1].name}
            </IonButton>
          </div>
        )}
        <div className={classes.battleBarre}>
          <div className={classes.barre1} style={percentageCSSVariable1}>
            <p>{propositions[0].percentage}%</p>
          </div>
          <div className={classes.barre2} style={percentageCSSVariable2}>
            <p>{propositions[1].percentage}%</p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{propositions[0].name}</p>
          <p>{propositions[1].name}</p>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Battle;
