function send(contextKey) {
  return function sendEvents(req, res, next) {
    res.send(req.get(contextKey));
    return next();
  }
}

module.exports = send;
