module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login'){
    // console.log('body', req.body)
    if (req.body.username === 'admin' && req.body.password === '123'){
      return res.status(200).json({
        user: {
          name: '老王',
          token: 'mock'
        }
      })
    } else{
      return res.status(400).json({
        message: '用户名或密码错误'
      })
    }
  }
  next()
}
