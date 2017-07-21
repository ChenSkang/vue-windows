<template>
  <div id="Gantt">

    <div id="gantt-icon" v-on:click="showWindow">
      <img src="../img/gantt.png">
      <p class="icon-name">Dhtmlx Gantt</p>
    </div>

    <div id="gantt-window" v-show="seen">
      <div id="gantt-title"><img src="../img/window-icon.png">   DHTMLX Gantt</div>

      <div class="gantt-show">
        <div id="close" v-on:click="closeWindow"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>

      <div id="gantt-left">
          <div class="file-title">
            <div id="task-name">Task name</div>
            <div id="start-time">Start time</div>
            <div id="duration">Duration</div>
            <button class="plus-icon"><img id="plus-icon" src="../img/plus_icon.png"></button>
          </div>

        <div id="left-list">
          <ul>
            <li>
              <div class="file-tree">
                <button class="add-icon">+</button>
                <span class="file-icon"><img src="../img/001-folder.png"></span>
                <span class="task-name"></span>
                <span class="start-time"></span>
                <span class="duration"></span>
                <span id="plus-icon"></span>
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
    display: none;
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
    height: 1000px;
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
    height:1000px;
    position: absolute;
    left: 0px;
    top: 24px;
    border-style: solid solid solid solid; border-width: 1px; border-color: gray;
  }

  .plus{  width: 24px; height: 24px; position: absolute;  left: 320px; }

  .file-title{ font-size: 11px; width: 350px; height: 32px;  left: 0px; top: 0px;  border-style: solid none solid none; border-width: 1px; border-color: gray;  }
  #task-name{  position: absolute;  left: 50px;  top: 8px;  }
  #start-time{  position: absolute;  left: 155px;  top: 8px;  }
  #duration{  position: absolute;  left: 240px; top: 8px;  }
  .plus-icon{ width: 32px; height: 32px; position: absolute;  right:60px; top: 1px;}
  #plus-icon{ width: 32px;  height:auto;  position:absolute; top: 0px; left: -2px; }

  #left-list{
    width: 350px;
    position: absolute;
    left: 0px;
    top: 48px;
  }
  #gantt-right{
    position: absolute;
    left: 400px;
    top: 24px;
  }
</style>

<script>
  export default{
    data () {
      return {
        seen: false
      }
    },
    methods: {
      showWindow () {
        this.seen = true
      },
      closeWindow () {
        this.seen = false
      }
    }
  }
</script>
