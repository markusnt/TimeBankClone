module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('point_records', 'pointtype_id', {
      type: Sequelize.INTEGER,
      references: { model: 'pointtypes', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('point_records', 'pointtype_id');
  },
};