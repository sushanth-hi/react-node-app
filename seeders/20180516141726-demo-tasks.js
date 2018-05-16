'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { id: 1, task: 'Wendy', UserId:1 },
      { id: 2, task: 'Shannon', UserId:2 },
      { id: 3, task: 'Tim Annan', UserId:3 },
      { id: 4, task: 'PG Herveou', UserId:4 },
      { id: 5, task: 'Mai Richardson', UserId:5 },
      { id: 6, task: 'Steve Warshaw', UserId:6 },
      { id: 7, task: 'Jojo Hedaya', UserId:7 },
      { id: 8, task: 'Chris Tian', UserId:8 },
      { id: 9, task: 'Sagar Gokhale', UserId:9 },
      { id: 10, task: 'Thomas Louis', UserId:10 },
      { id: 11, task: 'Fabien Pasquet', UserId:11 },
      { id: 12, task: 'Vincent Desmares', UserId:12 }
    ].map(({id, task,UserId}) => ({
      id: id,
      task: task,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: UserId
    }))
    return queryInterface.bulkInsert('Tasks', data)
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Tasks', null, {});
  }
};
