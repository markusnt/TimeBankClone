module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('point_records', 'enterprise_id', {
      type: Sequelize.INTEGER,
      references: { model: 'enterprises', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('point_records', 'enterprise_id');
  },
};