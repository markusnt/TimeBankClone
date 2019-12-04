module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('places', [{
      city: 'Uberlândia - MG',
      street: 'Rondon Pacheco',
      neighborhood: 'Tibery',
      number: 4600,
      zip_code: '38405142',
      complement: 'Sala 131',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('places', [], {});
  },
};