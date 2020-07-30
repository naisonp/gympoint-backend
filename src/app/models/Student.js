import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weigh: Sequelize.INTEGER,
        height: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
