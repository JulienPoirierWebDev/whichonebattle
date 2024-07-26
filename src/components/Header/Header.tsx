import {
  IonHeader,
  IonImg,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonItem,
} from "@ionic/react";

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar color={"dark"}>
        <IonItem slot="start" color={"dark"}>
          <IonThumbnail>
            <IonImg src="/swords.png" />
          </IonThumbnail>
        </IonItem>
        <IonTitle slot="start">WhichOneBattle</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
