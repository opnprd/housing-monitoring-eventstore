function setProjection(projection) {
  return (req, res, next) => {
    req.set('projection', projection);
    return next();
  }
}

module.exports = setProjection;