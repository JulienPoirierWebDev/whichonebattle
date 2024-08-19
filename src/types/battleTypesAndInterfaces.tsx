export type propositionsType = [
  { name: string; percentage: number; color?: string; value: number },
  { name: string; percentage: number; color?: string; value: number }
];

export interface BattleProps {
  question: string;
  texte: string;
  propositions: propositionsType;
  buttons?: boolean;
  handleButton1?: () => void;
  handleButton2?: () => void;
  isVote: boolean;
  _id: string;
  createdAt?: string;
}
