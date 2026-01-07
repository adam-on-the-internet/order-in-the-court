enum GameState {
  GameSetup = "GAME_SETUP", // Create a game, starting here. This state gives the Host options to Setup the game.
  RoleSelection = "ROLE_SELECTION", // Once settings are locked in by the Host, players can join and select their roles. NOTE: Some players, like the jury, can join at any time.
  JudgePrep = "JUDGE_PREP", // Once the roles are locked, the Judge has some prep to do. Mainly, deciding how the court will flow (freeform vs structured)
  
  Freeform = "FREEFORM", // If the judge selects Freeform, the arguments proceed until they are finished.

  JudgeDeliberation = "JUDGE_DELIBERATION", // Once the arguments finished, the Judge deliberates. They may consult the Jury.
  Verdict = "VERDICT", // Once the deliberations are ended, the Verdict is announced.

  ClosedCase = "CLOSED_CASE", // Case is closed, can no longer be "played" but can be "viewed". If not done manually, should be done 24 hours after the VERDICT.
  ArchivedCase = "ARCHIVED_CASE", // Case is archived, can no longer be "played" and can only be viewed via Admin. If not done manually, should be done 1 week after CLOSED_CASE
}
