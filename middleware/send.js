function send(contextKey) {
  return function sendEvents(req, res, next) {
    const response = contextKey ? req.get(contextKey) : undefined;
    res.send(response);
    return next();
  }
}

module.exports = send;
