import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { User } from '../models/User';

export class ReportController {
  static async show(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        attributes: ['name', 'email'],
        where: {
          email: {
            [Op.iLike]: '%@rocketseat.com.br'
          }
        },
        include: [
          {
            association: 'addresses',
            where: { street: 'Rua Guilherme Gembala' }
          },
          {
            association: 'techs',
            required: false,
            through: { attributes: [] },
            where: {
              name: { [Op.iLike]: 'React%' }
            }
          }
        ]
      });
      return res.json(users);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}
