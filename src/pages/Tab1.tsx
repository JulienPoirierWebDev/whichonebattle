import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Header from "../components/Header/Header";
import Battle from "../components/Battle/Battle";
import { BattleProps } from "../types/battleTypesAndInterfaces";

const Tab1: React.FC = () => {
  const contrastColors = [
    "#FFB3B3", // Rose Clair
    "#FFD9B3", // Pêche Clair
    "#FFFFB3", // Jaune Clair
    "#D9FFB3", // Vert Pâle
    "#B3FFB3", // Vert Menthe
    "#B3FFD9", // Vert Aqua
    "#B3FFFF", // Cyan Clair
    "#B3D9FF", // Bleu Clair
    "#B3B3FF", // Lavande
    "#D9B3FF", // Lilas
    "#FFB3FF", // Rose Lavande
    "#FFB3D9", // Rose Poudré
    "#FFCCCC", // Rouge Clair
    "#FFE6CC", // Orange Clair
    "#FFFFCC", // Jaune Pâle
    "#E6FFCC", // Vert Jaune Clair
    "#CCFFCC", // Vert Clair
    "#CCFFE6", // Turquoise Clair
    "#CCFFFF", // Bleu Clair Pastel
    "#CCE6FF", // Bleu Pâle
  ];
  const battles: BattleProps[] = [
    {
      question: "Fraise ou Chocolat ?",
      texte: "Pour un parfum, vous êtes plutôt ...",
      propositions: [
        {
          name: "Fraise",
          percentage: 40,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Chocolat",
          percentage: 60,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Mer ou Montagne ?",
      texte: "Pour vos vacances, vous préférez ...",
      propositions: [
        {
          name: "Mer",
          percentage: 55,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Montagne",
          percentage: 45,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Café ou Thé ?",
      texte: "Pour commencer la journée, vous choisissez ...",
      propositions: [
        {
          name: "Café",
          percentage: 70,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Thé",
          percentage: 30,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Cinéma ou Théâtre ?",
      texte: "Pour une soirée, vous préférez aller ...",
      propositions: [
        {
          name: "Cinéma",
          percentage: 65,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Théâtre",
          percentage: 35,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Chat ou Chien ?",
      texte: "Comme animal de compagnie, vous préférez ...",
      propositions: [
        {
          name: "Chat",
          percentage: 50,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Chien",
          percentage: 50,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Pizza ou Sushi ?",
      texte: "Pour un repas, vous optez pour ...",
      propositions: [
        {
          name: "Pizza",
          percentage: 60,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Sushi",
          percentage: 40,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Livre ou Film ?",
      texte: "Pour se détendre, vous choisissez ...",
      propositions: [
        {
          name: "Livre",
          percentage: 40,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Film",
          percentage: 60,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
    {
      question: "Plage ou Piscine ?",
      texte: "Pour nager, vous préférez ...",
      propositions: [
        {
          name: "Plage",
          percentage: 50,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
        {
          name: "Piscine",
          percentage: 50,
          color:
            contrastColors[Math.floor(Math.random() * contrastColors.length)],
        },
      ],
    },
  ];

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          {battles.map((oneBattle) => {
            return (
              <>
                <IonRow>
                  <IonCol>
                    <Battle key={oneBattle.question} {...oneBattle} />
                  </IonCol>
                </IonRow>
              </>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
