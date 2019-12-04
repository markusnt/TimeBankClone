module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('enterprises', 'place_id', {
      type: Sequelize.INTEGER,
      references: { model: 'places', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('enterprises', 'place_id');
  },
};