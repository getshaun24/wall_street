export default defineEventHandler((event) => {
    const req = event.node.req
    const res = event.node.res
  const rocketAuth = req.headers['x-rocket-auth']
  setCookie(res, 'rocket_auth', rocketAuth, {
    httpOnly: true,
    maxAge: 3600 // set the cookie to expire in 1 hour
  })

  res.end('Server-side cookie set!')
})