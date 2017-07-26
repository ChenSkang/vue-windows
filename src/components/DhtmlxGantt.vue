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
          <div id="task-name">Task name</div>
          <div id="start-time">Start time</div>
          <div id="duration">Duration</div>
          <button class="plus-icon"><div id="plus"><img id="plus-icon" src="../img/plus_icon.png"></div></button>
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
  #gantt-icon:hover{  background: url("../img/icon_bg_full.png");  }
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
    left: 0;
    top: 24px;
    border-style: solid solid solid solid;
    border-width: 1px;
    border-color: gray;
  }
  .list-title{
    display: inline-flex;
    font-size: 11px;
    width: 350px;
    height: 32px;
    left: 0;
    top: 0;
    border-style: solid none solid none;
    border-width: 1px;
    border-color: gray;
  }
  #task-name{
    position: absolute;
    left: 50px;
    top: 8px;
  }
  #start-time{
    position: absolute;
    left: 155px;
    top: 8px;
  }
  #duration{
    position: absolute;
    left: 240px;
    top: 8px;
  }
  .plus-icon{
    width: 32px;
    height: 32px;
    position: absolute;
    right:10px;
    top: 1px;
  }
  .plus-icon img{
    width: 32px;
    height:auto;
    position:absolute;
    top: 0;
    left: -2px;
  }
  .plus-icon div:hover{ background-color: powderblue }
  #task-tree{
    width: 350px;
    height: auto;
    position: absolute;
    left: 0px;
    top: 32px;
  }
  #task-tree > el-tree{
    position: absolute;
    left: -50px;
    text-align: left;
  }
  #gantt-right{
    width: 500px;
    position: absolute;
    left: 400px;
    top: 24px;
    overflow: auto;
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
          <el-button size="small" on-click={ () => this.append(store, data) }> <i src="../img/plus-icon.png"></i></el-button>
          </span>
          </span>
        )
      }
    }
  }
</script>



