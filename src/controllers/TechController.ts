import { Request, Response } from 'express';

import { Tech } from '../models/Tech';
import { User } from '../models/User';
import { schemaTechParamsStore } from '../validation/Tech/index';
import { schemaTechBodyStore } from '../validation/Tech/store';
export class TechController {
  static async index(req: Request, res: Response) {
    try {
      const { user_id } = schemaTechParamsStore.parse(
        req.params
      );
      const user = await User.findByPk(user_id, {
        include: {
          association: 'techs',
          through: { attributes: [] }
        }
      });
      return res.json(user?.techs);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
  static async store(req: Request, res: Response) {
    try {
      const { user_id } = schemaTechParamsStore.parse(
        req.params
      );
      const { name } = schemaTechBodyStore.parse(req.body);
      const user = await User.findByPk(user_id);
      if (!user) {
        return res
          .status(400)
          .json({ error: 'User not found' });
      }
      const [tech] = await Tech.findOrCreate({
        where: { name }
      });
      await user.addTech(tech, {});

      return res.json(tech);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { user_id } = schemaTechParamsStore.parse(
        req.params
      );
      const { name } = schemaTechBodyStore.parse(req.body);
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
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
