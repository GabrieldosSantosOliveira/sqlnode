import { Request, Response } from 'express';

import { Tech } from '../models/Tech';
import { User } from '../models/User';
export class TechController {
  static async index(req: Request, res: Response) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: {
        association: 'techs',
        through: { attributes: [] }
      }
    });
    return res.json(user?.techs);
  }
  static async store(req: Request, res: Response) {
    const { user_id } = req.params;
    const { name } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res
        .status(400)
        .json({ error: 'User not found' });
    }
    const [tech, created] = await Tech.findOrCreate({
      where: { name }
    });
    await user.addTech(tech);
    return res.json(tech);
  }
  static async delete(req: Request, res: Response) {
    const { user_id } = req.params;
    const { name } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res
        .status(400)
        .json({ error: 'User not found' });
    }
    const tech = await Tech.findOne({
      where: { name }
    });
    if (!tech) {
      return res
        .status(400)
        .json({ error: 'Tech not found' });
    }
    await user.removeTech(tech);
    return res.json();
  }
}
