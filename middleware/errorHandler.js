const errorHandler = (error, req, res) => {
  res.send(error.message);
};

module.exports = errorHandler;
