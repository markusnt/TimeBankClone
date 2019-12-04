import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Point_record extends Model {
  static init(sequelize) {
    super.init(
      {
        nsr: Sequelize.INTEGER,
        localization: Sequelize.STRING,
        date: Sequelize.STRING,
        cupom_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async point_record => {
      if (point_record.localization) {
        point_record.cupom_hash = await bcrypt.hash(point_record.localization, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Enterprise, { foreignKey: 'enterprise_id', as: 'enterprise' });
    this.belongsTo(models.Pointtype, { foreignKey: 'pointtype_id', as: 'pointtype' });
  }

}

export default Point_record;
