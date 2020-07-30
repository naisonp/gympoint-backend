import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ mensage: 'E-mail já cadastrado' });
    }

    const { id, name, email, age, weigh, height } = await Student.create(
      req.body
    );

    return res.json({ id, name, email, age, weigh, height });
  }

  async update(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(400).json({ mensage: 'Estudante não existe' });
    }

    const { email } = req.body;

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email },
      });

      if (studentExists) {
        return res.status(400).json({ mensage: 'E-mail já cadastrado.' });
      }
    }

    const { name, age, weigh, height } = await student.update(req.body);

    return res.json({ name, email, age, weigh, height });
  }
}

export default new StudentController();
