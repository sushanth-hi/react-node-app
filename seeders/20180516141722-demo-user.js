'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     let data = [
      { id: 1, username: 'Parthiv Patel' },
      { id: 2, username: 'Virat Kohli' },
      { id: 3, username: 'ABD Villers' },
      { id: 4, username: 'Mandeep Singh' },
      { id: 5, username: 'Colin degrandhomme' },
      { id: 6, username: 'Sarfarz Khan' },
      { id: 7, username: 'Moeen Ali' },
      { id: 8, username: 'Tim Southee' },
      { id: 9, username: 'Yuzivendar Chahal' },
      { id: 10, username: 'Umesh Yadav' },
      { id: 11, username: 'Mohammed Siraj' },
      { id: 12, username: 'Murugan Ashwin' }
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
