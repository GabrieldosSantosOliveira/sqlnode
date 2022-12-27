import { Response } from 'express';
import { Request } from 'express-serve-static-core';

import { IUserAtributes, User } from '../models/User';
import {
  Address,
  IAddressAtributes
} from './../models/Address';
export class AddressController {
  static async store(req: Request, res: Response) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res
        .status(400)
        .json({ error: 'User not found' });
    }
    const address = await Address.create({
      number,
      street,
      user_id,
      zipcode
    });
    return res.json(address);
  }
  static async index(req: Request, res: Response) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    });
    if (!user) {
      return res
        .status(400)
        .json({ error: 'User not found' });
    }
    return res.json(user.addresses);
  }
}
