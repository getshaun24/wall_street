export default defineEventHandler((event) => {
  // https://nuxt.com/docs/guide/directory-structure/server#server-middleware
  const req = event.node.req
  const rocketAuth = getCookie(req, 'rocket_auth')
  console.log(rocketAuth) // will log the value of the 'rocket_auth' cookie


  // const cookies = getCookie(rocket_chat_auth_token)
  console.log('COOKIES -----> 1', rocketAuth)
  'Hello World!'
  console.log('MADE IT HERE ---> WEBHOOK')
  // const event1 = useRequestEvent()
  // console.log(event)
  // console.log(event1)
  const url = event.node.req.url
  console.log(url)
  console.log('ROCKET_AUTH ---> ')
  setResponseStatus(rocketAuth, 202)
})