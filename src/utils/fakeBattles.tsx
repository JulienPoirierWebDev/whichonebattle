import { BattleProps } from "../types/battleTypesAndInterfaces";
import contrastColors from "./contratsColors";

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

export default battles;
