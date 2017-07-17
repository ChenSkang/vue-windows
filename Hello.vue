<template>
  <div id="window">
    <div id="start">
      <img src="../img/start.png" v-on:click="" style="float: left">
    </div>
  </div>
</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-image: url("../img/wallpaper.jpg");
    background-size: cover;
  }

  #window {
    width: 100%;
    background-color: black;
    opacity: 0.85;
    position: absolute;
    bottom: 0;
  }
  #start{
    width: 50px;
  }
  #start:hover{
    opacity: 0.2;
  }
</style>
