<template>
  <div id="File">
    <div id="file-icon" v-on:dblclick="showWindow">
      <img src="../img/filemanager.png">
      <p class="icon-name">Filemanager</p>
    </div>
    <div id="file-window" v-show="seen">
      <div id="file-title"><img src="../img/window-icon.png">     Filemanager</div>
      <div class="file-show">
        <div id="close" v-on:click="closeWindow"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide" v-on:click="closeWindow"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>
      <div class="file-button">
        <div class="more" :title="actions"></div>
        <div class="arrow-left" :title="leftView"><img src="../img/left.png" style="width: 18px; height: 18px;"></div>
        <div class="arrow-right" :title="rightView"><img src="../img/right.png" style="width: 18px; height: 18px;"></div>
        <div class="return" :title="upView"><img src="../img/up.png" style="width: 18px; height: 18px;"></div>
        <input type="search" class="file-search">
        <div class="icons-view" :title="iconsView"><img src="../img/ViewGallery.png" style="width: 18px; height: 18px; "></div>
        <div class="table-view" :title="tableView"><img src="../img/Viewlist.png" style="width: 18px; height: 18px; "></div>
      </div>
      <div id="file-window-left" v-show="leftSee">
        <div id="file" is="file-tree" :key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
        </div>
        <div id="tree-manager">
          <div class="put" v-on:click="letleftsee"  v-show="leftSee" :title="putMessage"><img src="../img/put.png" style="width: 13px; height: 13px; "></div>
          <div class="expand" :title="expandTree"><img src="../img/window-icon.png" style="width: 13px; height: 13px; "></div>
          <div class="collapse" :title="collapseTree"><img src="../img/window-icon.png" style="width: 13px; height: 13px; "></div>
        </div>
        <div id="tree">
        </div>
      <div class="puton" v-on:click="letleftsee" v-show="putOnSee" :title="putOnMessage"><img src="../img/puton.png" style="width: 13px; height: 13px; "></div>
      </div>
      <div id="file-window-right"></div>
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
  .file-button div{
    width: 24px;
    height: 24px;
    border: 1px ;
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

  #tree-manager{
    border-bottom: solid 1px aqua;
    width: 211px;
    height: 25px;
    position: absolute;
    left: 0;
    bottom: 268px;
  }
  .put{
    width: 15px;
    height: 15px;
    position: absolute;
    top: 3px;
  }
  .put:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  .puton{
    width: 15px;
    height: 15px;
    position: absolute;
    left: 0;
    bottom: 278px;
  }
  .puton:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  .expand{
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
    right: 40px;
  }
  .expand:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  .collapse{
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
    right: 10px;
  }
  .collapse:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  #tree{

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
  let id = 1000
  export default{
    data () {
      return {
        seen: false,
        leftSee: true,
        putOnSee: false,
        putMessage: 'Hide Tree',
        putOnMessage: 'Show Tree',
        actions: 'Actions',
        iconsView: 'Icons View',
        tableView: 'Table View',
        leftView: 'Back',
        rightView: 'Forward',
        upView: 'Level up',
        expandTree: 'Expand Tree',
        collapseTree: 'Collapse Tree',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
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
      letleftsee () {
        this.leftSee = !this.leftSee
        this.putOnSee = !this.putOnSee
      },
      append (store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data)
      },
      remove (store, data) {
        store.remove(data)
      }
    }
  }
</script>
