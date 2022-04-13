const skills = [
  {id: 5368, skill: 'JavaScipt', quality: true},
  {id: 4658, skill: 'CSS', quality: true},
  {id: 7326, skill: 'Express', quality: false}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}