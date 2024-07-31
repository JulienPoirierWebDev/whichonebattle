import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import classes from "./Battle.module.css";

const Battle: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Fraise ou Chocolat ?</IonCardTitle>
        <IonCardSubtitle>
          Pour un parfum de glace, vous êtes plutôt de quel coté ?
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className={classes.battleBarre}>
          <div className={classes.barre1}>
            <p>40%</p>
          </div>
          <div className={classes.barre2}>
            <p>60%</p>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Battle;
