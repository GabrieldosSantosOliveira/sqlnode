import { Response, Request } from 'express';

import {
  schemaAddressBodyStore,
  schemaAddressParamsStore
} from '../validation/Address/store';
import { Address } from './../models/Address';
import { User } from './../models/User';

export class AddressController {
  static async store(req: Request, res: Response) {
    try {
      const { user_id } = schemaAddressParamsStore.parse(
        req.params
      );
      const { zipcode, street, number } =
        schemaAddressBodyStore.parse(req.body);
      const user = await User.findByPk(user_id);
      if (!user) {
        return res
          .status(400)
          .json({ error: 'User not found' });
      }
      const address = await Address.create({
        number,
        street,
        user_id: Number(user_id),
        zipcode
      });
      return res.json(address);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
  static async index(req: Request, res: Response) {
    try {
      const { user_id } = schemaAddressParamsStore.parse(
        req.params
      );

      const user = await User.findByPk(user_id, {
        include: { association: 'addresses' }
      });
      if (!user) {
        return res
          .status(400)
          .json({ error: 'User not found' });
      }
      return res.json(user.addresses);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}
