<template>
  <div id="Scheduler">
    <div id="scheduler-window" v-show="seen">
      <div id="scheduler-title"><img src="../img/window-icon.png"><span>&nbsp;&nbsp;Scheduler</span></div>
      <el-row id="scheduler-show" type="flex" justify="between">
        <el-col :span="8">
          <div class="grid-content" @click="closeWindow"><img src="../img/hide_button.png" /></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content"><img src="../img/resize_button.png" /></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content closed" @click="closeWindow"><img src="../img/close_button.png" /></div>
        </el-col>
      </el-row>
      <el-button-group id="dateButtonGroup" class="someButtons">
          <el-button id="dday" v-on:click="turnOndTable"><span>Day</span></el-button>
          <el-button id="dweek" v-on:click="turnOnwTable"><span>Week</span></el-button>
          <el-button id="dmonth" v-on:click="turnOnmTable"><span>Month</span></el-button>
      </el-button-group>
      <el-button-group id="changeDateGroup" class="someButtons">
        <el-button><i class="el-icon-caret-left"></i></el-button>
        <el-button><i class="el-icon-caret-right"></i></el-button>
      </el-button-group>
      <label id="date-show"><span>27 JUL 2017</span></label>
      <el-button id="today" class="someButtons"><span>Today</span></el-button>
      <el-table :data="dtableData" height="360" border style="width: 100%" id="ddayTable" class="dateTable" v-show="viewdTable">
        <el-table-column prop="time" label="" width="100%"></el-table-column>
        <el-table-column prop="plans" label="" width=""></el-table-column>
      </el-table>
      <el-table :data="wtableData" height="360" border style="width:100%" id="dweekTable" class="dateTable" v-show="viewwTable">
        <el-table-column
          prop="time"
          label=""
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Monday"
          label="Mon"
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Tuesday"
          label="Tue"
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Wednesday"
          label="Wed"
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Thursday"
          label="Thus"
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Friday"
          label="Fri"
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Saturday"
          label="Sat"
          width="100%"
        ></el-table-column>
        <el-table-column
          prop="Sunday"
          label="Sun"
          width="100%"
        ></el-table-column>
      </el-table>
      <el-table :data="mtableData" height="360" border style="width:100%" id="dmonthTable" class="dateTable" v-show="viewmTable">
        <el-table-column
          prop="Monday"
          label="Monday"
          width=""
        ></el-table-column>
        <el-table-column
          prop="Tuesday"
          label="Tuesday"
          width=""
        ></el-table-column>
        <el-table-column
          prop="Wednesday"
          label="Wednesday"
          width=""
        ></el-table-column>
        <el-table-column
          prop="Thursday"
          label="Thursday"
          width=""
        ></el-table-column>
        <el-table-column
          prop="Friday"
          label="Friday"
          width=""
        ></el-table-column>
        <el-table-column
          prop="Saturday"
          label="Saturday"
          width=""
        ></el-table-column>
        <el-table-column
          prop="Sunday"
          label="Sunday"
          width=""
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style>
  .grid-content {
    min-width: 40px;
    min-height: 25px;
    line-height: 25px;
  }

  .grid-content:hover{
    background-color: #f3f1f5;
  }

  .closed:hover{
    background-color: orangered;
  }
  .someButtons{
    position: absolute;
    top:45px;
  }
  .dateTable{
    top:90px;
    font-size: 1em;
    font-weight: normal;
  }
  #Scheduler{
    font-weight: bold;
    font-family: Helvetica Neue;
    user-select: none;
  }
  #scheduler-window {
    width: 800px;
    height: 450px;
    background-color: white;
    border: solid 1px black;
    position: relative;
    top: 80px;
    left: 350px;
  }
  #scheduler-show {
    position: absolute;
    right: 0;
    top: 0;
  }
  #scheduler-window::-webkit-scrollbar {
   width: 10px;
   height: 80%;
   bottom: 0;
 }
  #scheduler-title{
    height: auto;
    font-size: 15px;
    position: absolute;
    left: 8px;
    top: 5px;
  }
  #dateButtonGroup{
    left:15px;
  }
  #today{
    right: 125px;
  }
  #changeDateGroup{
    right:15px;
  }
  #date-show{
    position: relative;
    margin:0 auto;
    top: 53px;
    width:235px;
    text-align:center;
  }
</style>
<script>
    export default{
      data: function () {
        return {
          seen: true,
          viewdTable: true,
          viewwTable: false,
          viewmTable: false
        }
      },
      methods: {
        closeWindow () {
          this.seen = false
        },
        turnOndTable () {
          this.viewdTable = true
          this.viewwTable = false
          this.viewmTable = false
        },
        turnOnwTable () {
          this.viewdTable = false
          this.viewwTable = true
          this.viewmTable = false
        },
        turnOnmTable () {
          this.viewdTable = false
          this.viewwTable = false
          this.viewmTable = true
        }
      }
    }
</script>
