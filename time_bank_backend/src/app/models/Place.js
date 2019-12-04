import Sequelize, { Model } from 'sequelize';

class Place extends Model {
  static init(sequelize) {
    super.init(
      {
        city: Sequelize.STRING,
        street: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        number: Sequelize.INTEGER,
        zip_code: Sequelize.STRING,
        complement: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Place;
