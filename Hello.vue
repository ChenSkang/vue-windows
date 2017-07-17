<template>
<div id="menu">
  <div id="start">
    <img src="../img/start.png"/>
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
  background-image: url("../img/background.jpeg");
  background-size: 100%;
  background-repeat: no-repeat;
}
#menu{
  height: 50px;
  width: 100%;
  background-color: black;
  opacity: 0.85;
  position: absolute;
  bottom: 0px;
}
#start{
  width: 60px;
}
  #start:hover{
    opacity: 0.6;
  }
</style>
