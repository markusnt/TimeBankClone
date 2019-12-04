import Sequelize, { Model } from 'sequelize';

class Pointtype extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Pointtype;
