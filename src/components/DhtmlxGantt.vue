<template>
  <div id="Gantt">
    <div id="gantt-window" v-show="seen">
      <div id="gantt-title"><img src="../img/window-icon.png">   DHTMLX Gantt</div>
      <div class="gantt-show">
        <div id="close" @click="closeWindow"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>
      <div id="gantt-left">
        <div class="list-title">
          <li id="task-name">Task name</li>
          <li id="start-time">Start time</li>
          <li id="duration">Duration</li>
          <li class="plus-button"></li>
        </div>
        <div id="task-tree">
          <el-tree
            :data="data2"
            :props="defaultProps"
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
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
  #gantt-window{
    width: 800px;
    height: 450px;
    background-color: white;
    border: solid 1px powderblue;
    box-shadow: 0 1px 1px #000;
    position: relative;
    top: 225px;
    left: 440px;
  }
  #gantt-title{
    width: auto;
    height: 29px;
    font-size: 13px;
    position: absolute;
    left: 3px;
    top: 8px;
  }
  .gantt-show{
    height: 29px;
    width: 120px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .gantt-show div{
    width: 40px;
    height: 29px;
    float: right;
  }
  .gantt-show li{
    display: inline-block;
  }
  #hide:hover{  background-color: powderblue  }
  #resize:hover{  background-color: powderblue  }
  #close:hover{  background-color: red  }

  #gantt-left{
    width: 360px;
    height: auto;
    position: absolute;
    left: 0;
    top: 29px;
    border-style: none solid solid solid;
    border-width: 0.5px;
    border-color: gray;
  }
  .list-title{
    font-size: 11px;
    width: 360px;
    height: 35px;
    left: 0;
    top: 0;
  }
  .list-title > li{
    height: 35px;
    float: left;
    display: inline;
    line-height: 35px;
  }
  #task-name{  width: 150px;  }
  #start-time{  width: 100px;  }
  #duration{  width: 65px;  }
  .plus-button{  width: 45px; right: 0; background-image: url(../img/plus_iconxx.png) }
  #task-tree{
    width: 360px;
    height: auto;
    position: absolute;
    left: 0;
    top: 32px;
  }
  #task-tree > el-tree{

  }
  #gantt-right{
    width: auto;
    height: auto;
    position: absolute;
    left: 360px;
    top: 29px;
    border: solid 1px powderblue;
    float: left;
  }
</style>
<script>
  let id = 1000
  export default {
    data () {
      return {
        seen: true,
        data2: [{
          id: 1,
          name: 'Project #1',
          children: [{
            id: 4,
            name: 'Task #1.1'
          }]
        }, {
          id: 2,
          name: 'Project #2',
          children: [{
            id: 5,
            name: 'Task #2.1'
          }, {
            id: 6,
            name: 'Task #2.2'
          }]
        }, {
          id: 3,
          name: 'Project #3',
          children: [{
            id: 7,
            name: 'Task #3.1'
          }, {
            id: 8,
            name: 'Task #3.2'
          }]
        }],
        defaultProps: {
          children: 'children',
          name: 'name'
        }
      }
    },
    methods: {
      showWindow () {
        this.seen = true
      },
      closeWindow () {
        this.seen = false
      },
      append (store, data) {
        store.append({ id: id++, name: 'testtest', children: [] }, data)
      },

      remove (store, data) {
        store.remove(data)
      },
      renderContent (h, { node, data, store }) {
        return (
          <span>
          <span>
          <span>{node.name}</span>
        <span>{node.time}</span>
        </span>
        <span style="float: right; margin-right: 20px">
          <li class="plus-button"></li>
          </span>
          </span>
        )
      }
    }
  }
</script>



