import * as Yup from 'yup';
import axios from 'axios';
import Point_record from '../models/Point_record';
import User from '../models/User';
import Enterprise from '../models/Enterprise';
import Pointtype from '../models/Pointtype';
import Place from '../models/Place';

class Point_recordController {

  async index(req, res) {
    const { page = 1 } = req.query;

    const Registers = await Point_record.findAll({
      where: { user_id: req.userId },
      order: ['date'],
      attributes: ['nsr', 'localization', 'date', 'cupom_hash'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'pis']
      }, {
        model: Enterprise,
        as: 'enterprise',
        attributes: ['name', 'cnpj'],
        include: [{
          model: Place,
          as: 'place',
          attributes: ['city', 'street', 'neighborhood', 'number', 'zip_code', 'complement']
        }]
      }, {
        model: Pointtype,
        as: 'pointtype',
        attributes: ['name']
      }]
    })

    return res.json(Registers)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      localization: Yup.string().required(),
      date: Yup.date().required(),
      user_id: Yup.number().required(),
      enterprise_id: Yup.number().required(),
      pointtype_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({
        error: 'Validation fails',
      });
    }

    const {
      nsr,
      localization,
      date,
      cupom_hash,
      user_id,
      enterprise_id,
      pointtype_id
    } = await Point_record.create(req.body);

    return res.json({
      nsr,
      localization,
      date,
      cupom_hash,
      user_id,
      enterprise_id,
      pointtype_id
    });
  }


}

export default new Point_recordController();
