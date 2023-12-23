import { Response, Request, NextFunction } from 'express';
import { serverToken } from '../../serverConfig';

export function checkAuthorization(req: Request, res: Response, next: NextFunction) {

  const userToken = req.headers.authorization;

  if(userToken && userToken === serverToken) {
    next();
  } else {
    res.status(401).json({ error: 'Acesso não autorizado'});
  }
}