<template>
  <q-page class="flex flex-center">
    <div class = "row q-pa-xl bg-primary text-white" >
      <div class="col ">
        <h2> The best curate the best!</h2>
        <p> Sharpdemy is a online course created by the
          best developers on earth. We curate a special selection of the best video
          tutorials in the neighborhood to bring you unparallel educational content.
          It's like Netflix but for C sharp. </p>
      </div>
      <div class="col flex flex-center">
        <img width="500" src="http://pif.org.pk/wp-content/uploads/2016/10/Awards-medal.png">
      </div>

    </div>
    <div class = "row q-pa-xl" >
      <div class="col q-pa">
        <h2> Microsoft eat our dust</h2>
        <p> Are you tired of searching through those ugly tutorials in microsoft's page?
        Or are you, maybe, tired of searching through the infinite World Wide Web. So are we. (We
          built this site in js for the same reason) We brought you here everything you will ever
          need boy!
        </p>
      </div>
      <div class="col flex flex-center">
        <img width="500" src="https://i.ytimg.com/vi/OeHjN4oWVfk/maxresdefault.jpg">
      </div>
    </div>
    <q-parallax :height="500" :speed="3" class="text-white">
      <template v-slot:media>
        <img src="https://insights.dice.com/wp-content/uploads/2016/03/shutterstock_374227048.jpg">
      </template>
      <h1 class="text-white"> Pizza && Sharpdemy = true </h1>
      this was supposed to be funny btw.
    </q-parallax>
    <div class = "row q-pa-xl" >
      <div class="col q-pa">
        <h2> What are you waiting for!</h2>
        <p>
          Join us already! Hit this "e-mail us" and politely ask us to subscribe you as our student.
          We will be able to access all of your personal data
        </p>
      </div>
      <div class="col flex flex-center">
        <img width="500" src="https://i.ytimg.com/vi/OeHjN4oWVfk/maxresdefault.jpg">
      </div>
    </div>
    <div class = "row q-pa-xl bg-primary text-white" >
      <div class="col ">
        <h2> The best curate the best!</h2>
        <p> Sharpdemy is a online course created by the
          best developers on earth. We curate a special selection of the best video
          tutorials in the neighborhood to bring you unparallel educational content.
          It's like Netflix but for C sharp. </p>
      </div>
      <div class="col flex flex-center">
        <img width="500" src="http://pif.org.pk/wp-content/uploads/2016/10/Awards-medal.png">
      </div>

    </div>


  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageIndex'
  }
</script>
