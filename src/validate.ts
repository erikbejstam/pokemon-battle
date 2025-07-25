import { Request, Response, NextFunction } from "express";

export function validateInput(req: Request, res: Response, next: NextFunction) {
  const { team1Ids, team2Ids } = req.body;

  if (!Array.isArray(team1Ids) || !Array.isArray(team2Ids)) {
    return res.status(400).json({ error: "Two arrays 'team1Ids' and 'team2Ids' containging pokemon IDs are required" });
  }

  if (!team1Ids.length || !team2Ids.length) {
    return res.status(400).json({ error: "Both teams must contain at least one Pokemon" });
  }

  if (!team1Ids.every(id => typeof id === "number") || !team2Ids.every(id => typeof id === "number")) {
    return res.status(400).json({ error: "All Pokemon IDs must be numbers" });
  }

  if (!team1Ids.every(isValidId) || !team2Ids.every(isValidId)) {
    return res.status(400).json({ error: "All Pokemon IDs must be integers s.t. 1 <= id <= 151" });
  }

  next();
}   

function isValidId(id: number) {
    return Number.isInteger(id) && id >= 1 && id <= 151;
}