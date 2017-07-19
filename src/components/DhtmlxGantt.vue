<template>
  <div id="Gantt">

    <div id="gantt-icon">
      <img src="../img/gantt.png">
      <p class="icon-name">Dhtmlx Gantt</p>
    </div>

    <div id="gantt-window">
      <div id="gantt-title"><img src="../img/window-icon.png">   DHTMLX Gantt</div>

      <div class="gantt-show">
        <div id="close"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>

      <div id="gantt-left">
          <div class="file-title">
            <span id="task-name">Task name</span>
            <span id="start-time">Start time</span>
            <span id="duration">Duration</span>
            <span id="add">Add</span>
          </div>

        <div id="left-list">
          <ul>
            <li>
              <div class="file-tree">
                <span class="plus-icon"></span>
                <span class="file-icon"></span>
                <span class="task-name"></span>
                <span class="start-time"></span>
                <span class="duration"></span>
                <span class="add"></span>
              </div>
            </li>
          </ul>  
        </div>
      </div>

      <div id="gantt-right">
        <div id="task"><li></li></div>
      </div>

    </div>

  </div>
</template>
<style>
  #Gantt{

  }
  #gantt-icon {
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 119px
  }
  .icon-name{
    font-size: 13px;
    height: auto;
    color: #FFFFFF;
  }
  #gantt-icon:hover{
    background: url("../img/icon_bg_full.png");
  }
  #gantt-window{
    width: 650px;
    height: 350px;
    background-color: white;
    border: solid 1px black;
    box-shadow: 0 1px 1px #000;
    position: relative;
    top: 160px;
    left: 400px;
  }
  #gantt-title{
    height: auto;
    font-size: 13px;
    position: absolute;
    left: 3px;
    top: 3px;
  }
  .gantt-show{
    height: 24px;
    width: 96px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .gantt-show div{
    width: 32px;
    float: right;
    height: auto;
  }
  .gantt-show li{
    display: inline;
  }
  #hide:hover{  background-color: powderblue  }
  #resize:hover{  background-color: powderblue  }
  #close:hover{  background-color: red  }

  #gantt-left{
    width: 350px;
    position: absolute;
    left: 0px;
    top: 24px;
  }
  .file-title{
    font-size: 11px;
  }
  #task-name{  position: absolute;  left: 60px;  top: auto;  }
  #start-time{  position: absolute;  left: 165px;  top: auto;  }
  #duration{  position: absolute;  left: 250px; top: auto;  }
  #add{  position: absolute;  left: 320px;  top: auto;  }

  #left-list{
    position: absolute;
    left: 0px;
    top: 11px;
  }
  #gantt-right{
    position: absolute;
    left: 350px;
    top: 24px;
  }
</style>
<script>
</script>
