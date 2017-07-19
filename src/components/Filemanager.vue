<template>
  <div id="File">
    <div id="file-icon" v-on:dbclick="show-window">
      <img src="../img/filemanager.png">
      <p class="icon-name">Filemanager</p>
    </div>

    <div id="file-window">
      <div id="file-title"><img src="../img/window-icon.png">     Filemanager</div>
      <div id="file-window-left">

      </div>
      <div id="file-window-right"></div>
      <div class="file-show">
        <div id="close"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>
      <div class="file-button">
        <button class="more"></button>
        <button class="arrow-left"><img src="../imgs_flat/arrow_left.png"></button>
        <button class="arrow-right"><img src="../imgs_flat/arrow_right.png"></button>
        <button class="return"></button>
        <input type="search" class="file-search">
        <button class="icons-view"></button>
        <button class="table-view"></button>
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
    position: relative;
    top: 160px;
    left: 400px;
  }
  #file-title{
    height: auto;
    font-size: 12px;
    position: absolute;
    left: 3px;
    top: 2px;
  }
  .file-button{
    width: 650px;
    height: 24px;
    position: absolute;
    top: 24px;
  }
  .file-button button{
    width: 24px;
    height: 24px;
  }
  .more{ position: absolute;left: 10px;}
  .arrow-left{ position: absolute;left: 126px;}
  .arrow-right{ position: absolute;left: 150px;}
  .return{ position: absolute;left: 187px;}
  .file-search{ position: absolute;height: 24px; }
  .icons-view{ position: absolute;right: 34px;}
  .table-view{ position: absolute;right: 10px;}
  #file-window-left{
    background-color: honeydew;
    border: solid 1px aqua;
    height: 293px;
    width: 211px;
    position: absolute;
    bottom: 0;
  }
  #file-window-right{
    border: solid 1px aqua;
    height: 293px;
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
