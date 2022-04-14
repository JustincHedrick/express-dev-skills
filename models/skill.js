const skills = [
  {id: 5368, skill: 'JavaScipt', quality: true},
  {id: 4658, skill: 'CSS', quality: true},
  {id: 7326, skill: 'Express', quality: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.find((skill) => skill.id === id);
  skills.splice(idx, 1);
};

function create(skill) {
  skill.id = 1;
  skill.quality = false;
  skills.push(skill);
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
};

function getAll() {
  return skills;
};