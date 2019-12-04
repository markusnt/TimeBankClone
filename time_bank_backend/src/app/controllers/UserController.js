import * as Yup from 'yup';
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import User from '../models/User';
import Point_record from '../models/Point_record';
import Enterprise from '../models/Enterprise';
import Pointtype from '../models/Pointtype';
import Place from '../models/Place';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      pis: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      admin: Yup.boolean().required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({
        error: 'Validation fails',
      });
    }
    const userExisit = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (userExisit) {
      return res.status(400).json({
        error: 'User alredy exists',
      });
    }
    const userPisExisit = await User.findOne({
      where: {
        pis: req.body.pis,
      },
    });
    if (userPisExisit) {
      return res.status(400).json({
        error: 'User Pis alredy exists',
      });
    }
    const { id, name, pis, email } = await User.create(req.body);
    return res.json({
      id,
      name,
      pis,
      email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({
        error: 'Validation fails',
      });
    }
    const { oldPassword, email } = req.body;
    const user = await User.findByPk(req.userId);
    if (email !== user.email) {
      const userExisit = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userExisit) {
        return res.status(400).json({
          error: 'User alredy exists.',
        });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({
        error: 'Password does not match.',
      });
    }

    await user.update(req.body);

    const { id, name } = await User.findByPk(req.userId, {
      include: [{
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      }]
    })

    return res.json({
      id,
      name,
      email,
      messagem: 'password changed successfully',
    });
  }

  async index(req, res) {
    const checkUser = await User.findOne({
      where: { id: req.userId, admin: false }
    });

    if (!checkUser) {
      return res.status(401).json({ error: 'User is a administrator'})
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);
    const registers = await Point_record.findAll({
      where: {
        user_id: req.userId,
        date: {
          [Op.between] : [startOfDay(parsedDate), endOfDay(parsedDate)]
        },
      },
      order: ['date'],
      attributes: ['nsr', 'localization', 'date', 'cupom_hash'],
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'pis'],
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
      },]
    })

    return res.json(registers)
  }

}

export default new UserController();
