import { Request, Response } from 'express';

import { User } from '../models/User';
import { schemaUserBodyStore } from '../validation/User/store';
export class UserController {
  static async store(req: Request, res: Response) {
    try {
      const { email, name } = schemaUserBodyStore.parse(
        req.body
      );
      const user = await User.create({ email, name });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
  static async findAll(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
