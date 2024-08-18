import { useState } from "react";
import {
  BattleProps,
  propositionsType,
} from "../../types/battleTypesAndInterfaces";
import Battle from "../Battle/Battle";

interface BattleWrapperProps {
  question: string;
  texte: string;
  propositions: propositionsType;
  buttons?: boolean;
  setBattles: React.Dispatch<React.SetStateAction<BattleProps[]>>;
}

const BattleWrapper: React.FC<BattleWrapperProps> = ({
  question,
  texte,
  propositions,
  buttons,
}) => {
  type choiceType = null | string;
  const [choice, setChoice] = useState<choiceType>(null);
  const handleButton1 = () => {
    setChoice(propositions[0].name);
  };

  const handleButton2 = () => {
    setChoice(propositions[1].name);
  };

  const isButtons = () => {
    if (!buttons) {
      return false;
    }
    return choice === null;
  };

  const totalVote = propositions[0].value + propositions[1].value;

  const isVote = totalVote !== 0;

  const percentagePropositionIndex0 = (propositions[0].value / totalVote) * 100;
  const percentagePropositionIndex1 = (propositions[1].value / totalVote) * 100;

  const newPropositions = [
    {
      ...propositions[0],
      percentage: percentagePropositionIndex0,
    },
    {
      ...propositions[1],
      percentage: percentagePropositionIndex1,
    },
  ];
  return (
    <>
      <Battle
        question={question}
        texte={texte}
        propositions={propositions}
        handleButton1={handleButton1}
        handleButton2={handleButton2}
        buttons={isButtons()}
        isVote={isVote}
      />
    </>
  );
};

export default BattleWrapper;
