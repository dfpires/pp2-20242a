// @types/express/index.d.ts

import * as express from 'express';
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
        user?: string | JwtPayload; // Adicione a propriedade `user`, ajustando o tipo conforme necessário
    }
  }
}
