import { Request, Response } from 'express';

import { User } from '../models/User';
export class UserController {
  static async store(req: Request, res: Response) {
    const { email, name } = req.body;
    const user = await User.create({ email, name });
    return res.json(user);
  }
  static async findAll(req: Request, res: Response) {
    const users = await User.findAll();
    return res.json(users);
  }
}
