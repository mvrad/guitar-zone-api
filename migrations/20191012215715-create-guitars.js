module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Guitars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.TEXT
      },
      model: {
        type: Sequelize.TEXT
      },
      brand: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.DECIMAL
      },
      necktype: {
        type: Sequelize.TEXT
      },
      bodytype: {
        type: Sequelize.TEXT
      },
      fretboard: {
        type: Sequelize.TEXT
      },
      fretcount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Guitars');
  }
};