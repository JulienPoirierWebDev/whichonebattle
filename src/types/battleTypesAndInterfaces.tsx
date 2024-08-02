export type propositionsType = [
  { name: string; percentage: number; color?: string },
  { name: string; percentage: number; color?: string }
];

export interface BattleProps {
  question: string;
  texte: string;
  propositions: propositionsType;
  buttons?: boolean;
  handleButton1?: () => void;
  handleButton2?: () => void;
}
