import { ArgumentStyle } from "../enum/argument-style.enum";
import { GameState } from "../enum/game-state.enum";
import { Verdict } from "../enum/verdict.enum";
import { Action } from "./action.model";
import { Evidence } from "./evidence.model";
import { Player } from "./player.model";
import { Witness } from "./witness.model";

export interface Game {
  id: string;
  state: GameState;
  name: string;
  issue: string;
  players: Player[];
  evidence: Evidence[];
  witnesses: Witness[];
  verdict: Verdict;
  argumentStyle: ArgumentStyle;
  actions: Action[];  
  createdDate: Date;
  lastUpdateDate: Date;
}
