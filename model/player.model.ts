import { Role } from "../enum/role.enum";

export interface Player {
  id: string;
  name: string;
  role: Role;
  roleNumber: number; // Used for roles that have can have multiples, such as the Jury and Witnesses.
  gameId: string;
}