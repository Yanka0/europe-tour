const reply = (res, body, status = 200) => {
  res.status(status).json(body);
};

const getById = (entities) => (id) =>
    entities.find((entity) => entity.id === id);

const updateById = (entities) => (id, data) => {
  const index = entities.findIndex((entity) => entity.id === id);
  entities[index] = {...entities[index], ...data};

  return entities[index];
};

module.exports = {reply, getById, updateById};
