import Sequelize, { Model } from 'sequelize';

class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cnpj: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Place, { foreignKey: 'place_id', as: 'place' })
  }

}

export default Enterprise
