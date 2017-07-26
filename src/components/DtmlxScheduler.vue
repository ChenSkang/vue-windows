<template>
  <div id="Scheduler">
    <div id="scheduler-window" v-show="seen">
      <div id="scheduler-title"><img src="../img/window-icon.png">Scheduler</div>
      <div class="scheduler-show">
        <div id="close" v-on:click="closeWindow"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize" v-on:click="resizeWindow"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide" v-on:click="hideWindow"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>
      <div id="dateSelect">
        <el-button-group id="dateButtonGroup">
          <el-button id="day">Day</el-button>
          <el-button id="week">Week</el-button>
          <el-button id="month">Month</el-button>
        </el-button-group>
      </div>
    </div>

  </div>
</template>
<style>
 #scheduler-icon{
   width:81px;
   height:81px;
   position: absolute;
   left: 10px;
   top: 10px;
   cursor:pointer;
 }
  .icon-name{
    font-size:13px;
    height:auto;
    color: #ffffff;
  }
  #scheduler-icon:hover{
    background:url("../img/icon_bg_full.png");
  }
  #scheduler-window{
    width:800px;
    height:450px;
    background-color: white;
    border:solid 1px black;
    position: relative;
    top: 80px;
    left: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    resize: both;
  }
 #scheduler-window::-webkit-scrollbar {
   width: 10px;
   height: 80%;
   bottom: 0;
 }
  #scheduler-title{
    height: auto;
    font-size: 13px;
    position: absolute;
    left: 8px;
    top: 5px;
  }
  .scheduler-show{
    width:120px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .scheduler-show div{
    width: 40px;
    height: 25px;
    float:right;
    cursor:pointer;
  }
  .scheduler-show li{
    display:inline;
  }
  #hide:hover{
    background-color:powderblue;
  }
  #resize:hover{
    background-color:powderblue;
  }
  #close:hover{
    background-color:red;
  }
  #dateSelect{
    width: 186px;
    height:33px;
    position:absolute;;
    top:45px;
    left:15px;
  }
  #dateButtonGroup{
    width:62px;
    height:auto;
    float:left;
    text-align:center;
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
        this.close()
      },
      hideWindow () {
        this.seen = false
      }
    }
  }
</script>
