module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pointtypes', [{
      name: 'Entrada',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Saida Intervalo',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Entrada Intervalo',
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: 'Saida',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('pointtypes', [{ name: 'Entrada' }, { name: 'Saida Intervalo' }, { name: 'Entrada Intervalo' }, { name: 'Saida' }], {});
  },
};