<template>
  <div id="Gantt">
    <!--桌面图标-->
    <div id="gantt-icon" @click="showWindow">
      <img src="../img/gantt.png">
      <p class="icon-name">Dhtmlx Gantt</p>
    </div>

    <!--窗口-->
    <div id="gantt-window" v-show="seen">

      <!--窗口icon和标题-->
      <div id="gantt-title"><img src="../img/window-icon.png">   DHTMLX Gantt</div>

      <!--窗口控制按钮-->
      <div class="gantt-show">
        <div id="close" @click="closeWindow"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>

      <!--左边部分-->
      <div id="gantt-left">

        <!--列表标题行-->
        <div class="list-title">
          <div id="task-name">Task name</div>
          <div id="start-time">Start time</div>
          <div id="duration">Duration</div>
          <button class="plus-icon"><div id="plus"><img id="plus-icon" src="../img/plus_icon.png"></div></button>
        </div>

        <!--列表树-->
        <div id="task-tree">
          <el-tree
          :data="data2"
          :props="defaultProps"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent">
        </el-tree>
        </div>
      </div>

      <!--右边部分-->
      <div id="gantt-right">
        <div id="task"><li></li></div>
      </div>
    </div>
  </div>
</template>

<style>
  #Gantt{

  }

  #gantt-icon {  width: 81px;  height: 81px;  position: absolute;  left: 10px;  top: 119px  }
  .icon-name{  font-size: 13px;  height: auto;  color: #FFFFFF;  }
  #gantt-icon:hover{  background: url("../img/icon_bg_full.png");  }

  #gantt-window{  width: 650px;  height: 1000px;  background-color: white;  border: solid 1px black;  box-shadow: 0 1px 1px #000;  position: relative;  top: 160px;  left: 400px;  }

  #gantt-title{  height: auto;  font-size: 13px;  position: absolute;  left: 3px;  top: 3px;  }

  .gantt-show{  height: 24px;  width: 96px;  position: absolute;  top: 0;  right: 0;  }
  .gantt-show div{  width: 32px;  float: right; height: auto;  }
  .gantt-show li{  display: inline;  }
  #hide:hover{  background-color: powderblue  }
  #resize:hover{  background-color: powderblue  }
  #close:hover{  background-color: red  }

  #gantt-left{  width: 350px;  height:1000px;  position: absolute;  left: 0;  top: 24px;  border-style: solid solid solid solid; border-width: 1px; border-color: gray;  }

  .list-title{ font-size: 11px; width: 350px; height: 32px;  left: 0; top: 0;  border-style: solid none solid none; border-width: 1px; border-color: gray;  }
  #task-name{  position: absolute;  left: 50px;  top: 8px;  }
  #start-time{  position: absolute;  left: 155px;  top: 8px;  }
  #duration{  position: absolute;  left: 240px; top: 8px;  }
  .plus-icon{ width: 32px; height: 32px; position: absolute;  right:60px; top: 1px;}
  #plus-icon{ width: 32px;  height:auto;  position:absolute; top: 0; left: -2px; }
  #plus:hover{ background-color: powderblue }

  #gantt-right{
    width: 500px;
    position: absolute;
    left: 400px;
    top: 24px;
    overflow: auto;
  }
</style>

<script>
  /* eslint-disable indent */

// eslint-disable-next-line indent
  let id = 1000

  export default {
    data () {
      return {
        seen: false,
        data2: [{
          id: 1,
          label{
            taskName: 'Level one 1',
            startTime: '2015-01-01',
            duration: '1'
          },
          children: [{
            id: 4,
            label{
              taskName: 'Level one 1',
              startTime: '2015-01-01',
              duration: '1'
            },
            children: [{
              id: 9,
              label{
                taskName: 'Level one 1',
                startTime: '2015-01-01',
                duration: '1'
              }
            }, {
              id: 10,
              label{
                taskName: 'Level one 1',
                startTime: '2015-01-01',
                duration: '1'
              }
            }]
          }]
        }, {
          id: 2,
          label{
            taskName: 'Level one 1',
            startTime: '2015-01-01',
            duration: '1'
          },
          children: [{
            id: 5,
            label{
              taskName: 'Level one 1',
              startTime: '2015-01-01',
              duration: '1'
            }
          }, {
            id: 6,
            label{
              taskName: 'Level one 1',
              startTime: '2015-01-01',
              duration: '1'
            }
          }]
        }, {
          id: 3,
          label{
            taskName: 'Level one 1',
            startTime: '2015-01-01',
            duration: '1'
          },
          children: [{
            id: 7,
            label{
              taskName: 'Level one 1',
              startTime: '2015-01-01',
              duration: '1'
            }
          }, {
            id: 8,
            label{
              taskName: 'Level one 1',
              startTime: '2015-01-01',
              duration: '1'
            }
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
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
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data)
      },

      renderContent(h, { node, data, store }) {
        return (
          <span>
          <span>
          <span>{node.label}</span>
        </span>
        <span style="float: right; margin-right: 20px">
          <el-button size="mini" on-click={ () => this.append(store, data) }>Append</el-button>
          <el-button size="mini" on-click={ () => this.remove(store, data) }>Delete</el-button>
        </span>
        </span>);
      }
    }
  }
</script>


