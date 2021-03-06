module.exports = (err, req, res, next) => {
  if (err.name == 'JsonWebTokenError') {
    res.status(401).json({
      msg: 'please login first'
    })
  } else {
    res.status(err.code || 500).json({
      err: err
    })
  }
}