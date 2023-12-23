import { Router, Request, Response } from "express";
import { randomUUID } from 'node:crypto';

const user_authentication = Router();

user_authentication.get('/authentication', (req: Request, res: Response) => {
  res.status(201).json(
    {
      "session": randomUUID()
    }
  );
})

export default user_authentication;