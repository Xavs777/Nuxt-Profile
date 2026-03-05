// Xavier Ribeiro
// u25398441

<script setup>
  import Homepage from './section/homepage.vue';
  import Contacts from './section/contacts.vue';
  import Projects from './section/projects.vue';
</script>

<template>
  <div class="main">
    <Homepage />
    <Projects />
    <Contacts />
  </div>
</template>

<style>
  body { margin: 0;
  background-color: #0f172a; /* dark navy instead of pure black */
  font-family: Arial, Helvetica, sans-serif;
}

  .main { max-width: 900px;
  margin: auto;
  padding: 40px 20px;
}
</style>