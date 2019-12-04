import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Point_record from '../app/models/Point_record';
import Pointtype from '../app/models/Pointtype';
import Enterprise from '../app/models/Enterprise';
import Place from '../app/models/Place';

import databaseConfig from '../config/database';

const models = [User, File, Point_record, Pointtype, Place, Enterprise ];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
