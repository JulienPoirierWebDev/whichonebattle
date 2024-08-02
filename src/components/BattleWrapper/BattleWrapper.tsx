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
    return choice === null;
  };
  return (
    <>
      <Battle
        question={question}
        texte={texte}
        propositions={propositions}
        handleButton1={handleButton1}
        handleButton2={handleButton2}
        buttons={isButtons()}
      />
    </>
  );
};

export default BattleWrapper;
