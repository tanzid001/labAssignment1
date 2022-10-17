exports.stringManup = (req, res, next) => {
  req.Name = req.Name + ', ' + '04/02/1996'
  next()
}
