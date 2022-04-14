const Skill = require('../models/skill');
const { render } = require('../server');

module.exports = {
  index,
  show,
  create,
  new: newSkill,
  delete: deleteSkill,
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
};

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
};

function newSkill(req, res) {
  res.render('skills/new');
};

function show(req, res) {
  // Access all route params using req.params (object)
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
};

// controller action <--> controller function
function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
};