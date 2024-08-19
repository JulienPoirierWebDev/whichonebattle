import { useMemo, useState } from "react";
import {
  BattleProps,
  propositionsType,
} from "../../types/battleTypesAndInterfaces";
import Battle from "../Battle/Battle";
import useAuthContext from "../../hooks/useAuthContext";
import contrastColors from "../../utils/contratsColors";
import { IonToast } from "@ionic/react";
import { hapticsImpactMedium } from "../../utils/capacitor/haptics";

interface BattleWrapperProps {
  question: string;
  texte: string;
  propositions: propositionsType;
  buttons?: boolean;
  setBattles: React.Dispatch<React.SetStateAction<BattleProps[]>>;
  _id: string;
  updateBattles: (idToUpdate: string, propositionVoted: string) => void;
}

const BattleWrapper: React.FC<BattleWrapperProps> = ({
  question,
  texte,
  propositions,
  buttons,
  _id,
  updateBattles,
}) => {
  type choiceType = null | string;
  const [choice, setChoice] = useState<choiceType>(null);
  const [alreadyVoted, setAlreadyVoted] = useState<boolean>(false);
  const { token } = useAuthContext();
  const handleButton1 = async (name: string) => {
    setChoice(name);

    const response = await fetch(
      `https://api.which-one-battle.julienpoirier-webdev.com/api/battles/${_id}/vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.error) {
      setAlreadyVoted(true);
      hapticsImpactMedium();
    } else {
      updateBattles(_id, name);
    }
  };

  const isButtons = () => {
    if (!buttons) {
      return false;
    }
    return choice === null;
  };

  const totalVote = propositions[0].value + propositions[1].value;

  const isVote = totalVote !== 0;

  const getPercentage = (value: number, totalVote: number) => {
    if (totalVote === 0) {
      return 0;
    }

    return (value / totalVote) * 100;
  };
  const percentagePropositionIndex0 = getPercentage(
    propositions[0].value,
    totalVote
  );
  const percentagePropositionIndex1 = getPercentage(
    propositions[1].value,
    totalVote
  );

  const color1 = useMemo(() => {
    return contrastColors[Math.round(Math.random() * contrastColors.length)];
  }, []);

  const color2 = useMemo(() => {
    return contrastColors[Math.round(Math.random() * contrastColors.length)];
  }, []);

  const newPropositions = [
    {
      ...propositions[0],
      percentage: percentagePropositionIndex0,
      color: color1,
    },
    {
      ...propositions[1],
      percentage: percentagePropositionIndex1,
      color: color2,
    },
  ] as propositionsType;
  return (
    <>
      <Battle
        question={question}
        texte={texte}
        propositions={newPropositions}
        handleButton1={() => handleButton1(propositions[0].name)}
        handleButton2={() => handleButton1(propositions[1].name)}
        buttons={isButtons()}
        isVote={isVote}
        _id={_id}
      />
      <IonToast
        duration={5000}
        isOpen={alreadyVoted}
        message="Vous avez déja voté pour ce Battle"
      />
    </>
  );
};

export default BattleWrapper;
