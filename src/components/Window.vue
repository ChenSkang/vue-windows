<template>
  <div id="window">
    <div id="footer">
      <div id="start">
        <img src="../img/start.png" v-on:click="" style="float: left">
      </div>
      <div id="Time"></div>
      <div id="Date"></div>
    </div>
    <div id="DhtmlxGantt">
      <router-view></router-view>
    </div>
    <div id="Filemanager">
      <router-view></router-view>
    </div>
    <div id="DtmlScheduler">
      <router-view></router-view>
    </div>
    <div id="WindowsMenu">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  function setTime () {
    var time = new Date()
    var hour = time.getHours()
    var minute = time.getMinutes()
    if (minute <= 9) { minute = '0' + minute }
    var second = time.getSeconds()
    if (second <= 9) { second = '0' + second }
    var times = hour + ':' + minute + ':' + second
    document.getElementById('Time').innerHTML = times
  }
  setInterval(setTime, 1000)
  function setDate () {
    var date = new Date().toLocaleDateString()
    document.getElementById('Date').innerHTML = date
  }
  setInterval(setDate, 1000)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-image: url("../img/pexels-photo-505674.jpeg");
    background-size: cover;
  }
  #footer {
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
    opacity: 0.6;
  }
  #Time{
    color: white;
    font-size: 15px;
    position: absolute;
    right: 20px;
  }
  #Date{
    color: white;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    right: 13px;
  }
</style>
