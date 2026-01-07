import { EvidenceState } from "../enum/evidence-state.enum";
import { Side } from "../enum/side.enum";

export interface Evidence {
  id: string;
  title: string;
  side: Side;
  state: EvidenceState;
  gameId: string;
}
