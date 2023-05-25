<template>
          <iframe src="https://get.rocket.chat/"></iframe>
</template>

<script setup>

const user_ID = useCookie('user_ID')
const rocket_chat_auth_token = useCookie('rocket_chat_auth_token')

// Get underlying request event
const event = useRequestEvent()
// Get the URL
const url = event.node.req.url
  console.log(event)
  console.log(url)


onMounted(() => {

//     if (rocket_chat_auth_token.value != null){
// fetch(`${config.flask_url}/api/rocket_chat/rocket_chat_login/`, {
// method: 'post',
// mode: 'cors',
// credentials: 'include',
// headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'X-CSRF-TOKEN': csrf_cookie.value
// },
// body: JSON.stringify({})
// })
// .then((response) => response.json())
// .then((data) => {


// rocket_chat_auth_token.value = data.rocket_chat_auth_token
window.parent.postMessage({
        event: 'login-with-token',
        loginToken: rocket_chat_auth_token.value
        }, 'https://get.rocket.chat/');


// })
// .catch(error => {
//     console.log('error')
// });


//     }

})


</script>