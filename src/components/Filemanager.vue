<template>
  <div id="File">
    <div id="file-icon" v-on:dbclick="show-window">
      <img src="../img/filemanager.png">
      <p class="icon-name">Filemanager</p>
    </div>

    <div id="file-window">
      <div id="file-title"><img src="../img/window-icon.png">     Filemanager</div>
      <div id="file-window-left"></div>
      <div id="file-window-right"></div>
      <div class="file-show">
        <div id="close"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>
    </div>
  </div>
</template>
<style>
  #File{

  }
  #file-icon {
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 100px
  }
  .icon-name{
    font-size: 13px;
    height: auto;
    color: #FFFFFF;
  }
  #file-icon:hover{
    background: url("../img/icon_bg_full.png");
  }
  #file-window{
    width: 650px;
    height: 350px;
    background-color: white;
    border: solid 1px black;
    box-shadow: 0 1px 1px #000;
    position: relative;
    top: 160px;
    left: 400px;
  }
  #file-title{
    height: auto;
    font-size: 13px;
    position: absolute;
    left: 3px;
    top: 3px;

  }
  #file-window-left{
    background-color: powderblue;
    border: solid 1px aqua;
    height: 300px;
    width: 211px;
    position: absolute;
    bottom: 0;
  }
  #file-window-right{
    border: solid 1px aqua;
    height: 300px;
    width: 431px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .file-show{
    height: 24px;
    width: 96px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .file-show div{
    width: 32px;
    float: right;
    height: auto;
  }
  .file-show li{
    display: inline;
  }
  #hide:hover{  background-color: powderblue  }
  #resize:hover{  background-color: powderblue  }
  #close:hover{  background-color: red  }
</style>
<script>

</script>
