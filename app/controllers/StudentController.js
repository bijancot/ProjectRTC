const express = require('express');

const { Student } = require("../models/Student");
const router = express.Router();

router.get('/', async (req, res) => {
  const ideas = await Idea.query();
  res.json(ideas);
});

router.get('/student/api/:id', async (req, res) => {
  const student = await Student.query().findById(req.params.id);
  res.json(student);
});

router.post('/', async (req, res) => {
  const newIdea = req.body

  const idea = await Idea.query()
                         .allowInsert('[idea, creator]')
                         .insertGraph(newIdea);

  res.send(idea)
});

router.post('/:id/comments', async (req, res) => {
  const idea = await Idea.query().findById(req.params.id);

  await idea.$relatedQuery('comments')
            .allowInsert('[comment, creator]')
            .insert(req.body);

  res.send(idea);
});

router.delete('/:id', async (req, res) => {
  await Idea.query().deleteById(req.params.id);

  res.redirect('/ideas');
});
module.exports = router;