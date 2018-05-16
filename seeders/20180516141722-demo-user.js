'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     let data = [
      { id: 1, username: 'Wendy' },
      { id: 2, username: 'Shannon' },
      { id: 3, username: 'Tim Annan' },
      { id: 4, username: 'PG Herveou' },
      { id: 5, username: 'Mai Richardson' },
      { id: 6, username: 'Steve Warshaw' },
      { id: 7, username: 'Jojo Hedaya' },
      { id: 8, username: 'Chris Tian' },
      { id: 9, username: 'Sagar Gokhale' },
      { id: 10, username: 'Thomas Louis' },
      { id: 11, username: 'Fabien Pasquet' },
      { id: 12, username: 'Vincent Desmares' }
    ].map(({id, username}) => ({
      id: id,
      username: username,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    return queryInterface.bulkInsert('Users', data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
