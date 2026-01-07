import { WitnessState } from "../enum/witness-state.enum";

export interface Witness {
  id: string;
  playerId: string;
  title: string;
  state: WitnessState;
  gameId: string;
}
