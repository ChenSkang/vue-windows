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
      <label class="date-show" v-show="ddateShow"><span>{{showDdate}}</span></label>
      <label class="date-show" v-show="wdateShow"><span>{{showWdate}}</span></label>
      <label class="date-show" v-show="mdateShow"><span>{{showMdate}}</span></label>
      <el-button id="today" class="someButtons" v-on:click="getDate()"><span>Today</span></el-button>
      <el-table :data="dtableData" max-height="360" :border="true" style="width:100%" id="ddayTable" class="dateTable" v-show="viewdTable">
        <el-table-column prop="time" label="" width="100%" :resizable="false"></el-table-column>
        <el-table-column prop="plans" label=""  width=""  :resizable="false"></el-table-column>
      </el-table>
      <el-table :data="wtableData" max-height="360" :border="true" style="width:100%" id="dweekTable" class="dateTable" v-show="viewwTable">
        <el-table-column
          prop="time"
          label=""
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Monday"
          label="Mon"
          width="100%"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Tuesday"
          label="Tue"
          width="100%"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Wednesday"
          label="Wed"
          width="100%"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Thursday"
          label="Thus"
          width="100%"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Friday"
          label="Fri"
          width="100%"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Saturday"
          label="Sat"
          width="100%"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Sunday"
          label="Sun"
          width="100%"
          :resizable="false"
        ></el-table-column>
      </el-table>
      <el-table :data="mtableData" max-height="360" :border="true" style="width:100%"  id="dmonthTable" class="dateTable" v-show="viewmTable">
        <el-table-column
          prop="Monday"
          label="Mon"
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Tuesday"
          label="Tues"
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Wednesday"
          label="Wed"
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Thursday"
          label="Thursy"
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Friday"
          label="Fri"
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Saturday"
          label="Sat"
          width=""
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="Sunday"
          label="Sun"
          width=""
          :resizable="false"
        ></el-table-column>
      </el-table>
      <div id="newGroup">
        <el-button-group>
        <el-button type="primary" size="mini" icon="edit"></el-button>
        <el-button type="primary" size="mini" icon="check"></el-button>
        <el-button type="primary" size="mini" icon="close"></el-button>
        </el-button-group>
      </div>
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
  .date-show{
    position: relative;
    margin:0 auto;
    top: 53px;
    width:235px;
    text-align:center;
  }
  .someButtons{
    position: absolute;
    top:45px;
  }
  .dateTable{
    top:70px;
  }
  #newGroup{
    top: 50px;
    left: 60px;
  }
  #Scheduler{
    font-weight: bolder;
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
</style>
<script>
    import ElCol from 'element-ui/packages/col/src/col'
    import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
    import ElButtonGroup from '../../node_modules/element-ui/packages/button/src/button-group.vue'
    var myDate = new Date()
    var nextDate = new Date(myDate.getTime() + 7 * 24 * 3600 * 1000)
    var theDate = myDate.getDate()
    var theNDate = nextDate.getDate()
    var i = myDate.getMonth()
    var j = nextDate.getMonth()
    var theYear = myDate.getFullYear()
    var theNYear = nextDate.getFullYear()
    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var theMonth = monthName[i]
    var theNMonth = monthName[j]
    export default{
      components: {
        ElButtonGroup,
        ElButton,
        ElCol},
      data: function () {
        return {
          seen: true,
          ddateShow: true,
          wdateShow: false,
          mdateShow: false,
          viewdTable: true,
          viewwTable: false,
          viewmTable: false,
          showDdate: theDate.toString() + '·' + theMonth.toString() + '·' + theYear.toString(),
          showWdate: theDate.toString() + '·' + theMonth.toString() + '·' + theYear.toString() + '——' + theNDate.toString() + '·' + theNMonth.toString() + '·' + theNYear.toString(),
          showMdate: theMonth.toString() + '·' + theYear.toString(),
          dtableData: [ {
            time: '06:00',
            plans: ''
          }, {
            time: '07:00',
            plans: ''
          }, {
            time: '08:00',
            plans: ''
          }, {
            time: '09:00',
            plans: ''
          }, {
            time: '10:00',
            plans: ''
          }, {
            time: '11:00',
            plans: ''
          }, {
            time: '12:00',
            plans: ''
          }, {
            time: '13:00',
            plans: ''
          }, {
            time: '14:00',
            plans: ''
          }, {
            time: '15:00',
            plans: ''
          }, {
            time: '16:00',
            plans: ''
          }, {
            time: '17:00',
            plans: ''
          }, {
            time: '18:00',
            plans: ''
          }, {
            time: '19:00',
            plans: ''
          }, {
            time: '20:00',
            plans: ''
          }, {
            time: '21:00',
            plans: ''
          }, {
            time: '22:00',
            plans: ''
          } ],
          wtableData: [ {
            time: '06:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '07:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '08:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '09:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '10:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '11:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '12:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '13:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '14:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '15:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '16:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '17:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '18:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '19:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '20:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '21:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            time: '22:00',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          } ],
          mtableData: [{
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          }, {
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: '',
            Sunday: ''
          } ]
        }
      },
      methods: {
        closeWindow () {
          this.seen = false
        },
        turnOndTable () {
          this.ddateShow = true
          this.wdateShow = false
          this.mdateShow = false
          this.viewdTable = true
          this.viewwTable = false
          this.viewmTable = false
        },
        turnOnwTable () {
          this.ddateShow = false
          this.wdateShow = true
          this.mdateShow = false
          this.viewdTable = false
          this.viewwTable = true
          this.viewmTable = false
        },
        turnOnmTable () {
          this.ddateShow = false
          this.wdateShow = false
          this.mdateShow = true
          this.viewdTable = false
          this.viewwTable = false
          this.viewmTable = true
        }
      }
    }
</script>
