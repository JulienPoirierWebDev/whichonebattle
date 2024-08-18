import { BattleProps } from "../types/battleTypesAndInterfaces";
import contrastColors from "./contratsColors";

const battles: BattleProps[] = [
  {
    question: "Fraise ou Chocolat ?",
    isVote: true,
    texte: "Pour un parfum, vous êtes plutôt ...",
    propositions: [
      {
        name: "Fraise",
        value: 4,
        percentage: 40,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Chocolat",
        percentage: 60,
        value: 6,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Mer ou Montagne ?",
    texte: "Pour vos vacances, vous préférez ...",
    isVote: false,
    propositions: [
      {
        name: "Mer",
        percentage: 55,
        value: 55,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Montagne",
        value: 45,
        percentage: 45,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Café ou Thé ?",
    isVote: true,
    texte: "Pour commencer la journée, vous choisissez ...",
    propositions: [
      {
        name: "Café",
        percentage: 70,
        value: 70,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Thé",
        percentage: 30,
        value: 30,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Cinéma ou Théâtre ?",
    isVote: true,
    texte: "Pour une soirée, vous préférez aller ...",
    propositions: [
      {
        name: "Cinéma",
        percentage: 65,
        value: 65,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Théâtre",
        percentage: 35,
        value: 35,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Chat ou Chien ?",
    texte: "Comme animal de compagnie, vous préférez ...",
    isVote: true,
    propositions: [
      {
        name: "Chat",
        value: 5,
        percentage: 50,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Chien",
        value: 5,
        percentage: 50,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Pizza ou Sushi ?",
    texte: "Pour un repas, vous optez pour ...",
    isVote: false,
    propositions: [
      {
        name: "Pizza",
        value: 6,
        percentage: 60,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Sushi",
        value: 4,
        percentage: 40,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Livre ou Film ?",
    texte: "Pour se détendre, vous choisissez ...",
    isVote: true,
    propositions: [
      {
        name: "Livre",
        percentage: 40,
        value: 4,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Film",
        percentage: 60,
        value: 6,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
  {
    question: "Plage ou Piscine ?",
    texte: "Pour nager, vous préférez ...",
    isVote: false,
    propositions: [
      {
        name: "Plage",
        percentage: 50,
        value: 5,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
      {
        name: "Piscine",
        percentage: 50,
        value: 5,
        color:
          contrastColors[Math.floor(Math.random() * contrastColors.length)],
      },
    ],
  },
];

export default battles;
