module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enterprises', [{
      name: 'Aws Code',
      cnpj: '33136331000102',
      place_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('enterprises', [], {});
  },
};