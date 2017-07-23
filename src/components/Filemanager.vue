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
        <div id="tree-title">
          <p>{{treeMessage}}</p>
        </div>
        <div class="more" :title="actions"></div>
        <div class="arrow-left" :title="leftView"><img src="../img/left.png" style="width: 18px; height: 18px;"></div>
        <div class="arrow-right" :title="rightView"><img src="../img/right.png" style="width: 18px; height: 18px;"></div>
        <div class="return" :title="upView"><img src="../img/up.png" style="width: 18px; height: 18px;"></div>
        <div class="icons-view" :title="iconsView" v-on:click="iconsFile"><img src="../img/ViewGallery.png" style="width: 18px; height: 18px; "></div>
        <div class="table-view" :title="tableView" v-on:click="tableFlie"><img src="../img/Viewlist.png" style="width: 18px; height: 18px; "></div>
      </div>
      <el-input icon="search" v-model="filterText" class="search"></el-input>
      <div id="file-window-left" v-show="leftSee">
        <div id="tree-manager">
          <div class="put" v-on:click="letleftsee"  v-show="leftSee" :title="putMessage"><img src="../img/put.png" style="width: 13px; height: 13px; "></div>
          <div class="expand" :title="expandTree"><img src="../img/window-icon.png" style="width: 13px; height: 13px; "></div>
          <div class="collapse" :title="collapseTree"><img src="../img/window-icon.png" style="width: 13px; height: 13px; "></div>
        </div>
        <div id="tree">
          <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            indent="14"
            :filter-node-method="filterNode"
            @node-click="handleNodeClick"
            ref="tree2">
          </el-tree>
        </div>
      </div>
      <div class="puton" v-on:click="letleftsee" v-show="putOnSee" :title="putOnMessage"><img src="../img/puton.png" style="width: 13px; height: 13px; "></div>
      <div id="file-window-tableView" v-show="viewTable">
        <el-table
          :data="tableData3"
          border
          height="string"
          fit="false"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="Name"
            width="150%">
          </el-table-column>
          <el-table-column
              prop="name"
              label="Date"
              width="185%">
          </el-table-column>
          <el-table-column
            prop="province"
              label="Type"
            width="100%">
          </el-table-column>
          <el-table-column
            prop="city"
            label="Size"
            width="100%">
          </el-table-column>
        </el-table>
      </div>
      <div id="file-window-iconsView" v-show="viewIcons"></div>
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
    top: 100px;
    cursor: pointer;
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
    width: 800px;
    height: 450px;
    background-color: white;
    border: solid 1px black;
    position: relative;
    top: 80px;
    left: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    resize: both;
  }
  #file-window::-webkit-scrollbar {
    width: 10px;
    height: 80%;
    bottom: 0;
  }

  #file-title{
    height: auto;
    font-size: 13px;
    position: absolute;
    left: 8px;
    top: 5px;
  }

  .file-button{
    width: 100%;
    height: 30px;
    position: absolute;
    top: 35px;
  }
  .file-button div{
    width: 30px;
    height: 30px;
    border: 1px solid aqua;
    border-radius: 10%;
    cursor: pointer;
  }
  .file-button img{
    padding: 6px;
  }
  .more{ position: absolute;left: 10px;  }
  .arrow-left{ position: absolute;left: 142px; }
  .arrow-right{ position: absolute;left: 174px; }
  .return{ position: absolute;left: 220px; }
  .icons-view{ position: absolute;right: 40px }
  .table-view{ position: absolute;right: 8px; }
  .search input{
    height: 30px;
    border-radius: 13px;
  }
  .search{
    width: 12.5%;
    position: absolute;
    right: 80px;
    top: 37px;
    cursor: pointer;
  }

  #file-window-left{
    background-color: honeydew;
    border: solid 1px aqua;
    height: 370px;
    width: 250px;
    position: absolute;
    bottom: 0;
  }

  #tree-manager{
    border-bottom: solid 1px aqua;
    width: 250px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .put{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    cursor: pointer;
  }
  .put:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  .puton{
    width: 20px;
    height: 370px;
    position: absolute;
    left: 0;
    top: 85px;
    background-color: honeydew;
    cursor: pointer;
  }
  .puton:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  .expand{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 7px;
    right: 40px;
    cursor: pointer;
  }
  .expand:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  .collapse{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
  }
  .collapse:hover{ box-shadow: inset 2px 2px 0 0 aqua; }
  #tree{
    height: 339px;
    width: 250px;
    position: absolute;
    bottom: 0;
    overflow-x: hidden;
  }
  #tree::-webkit-scrollbar {
    width: 10px;
    height: 80%;
    bottom: 0;
  }
  .filter-tree{
    height: 340px;
    width: 240px;
    border: none;
    position: absolute;
    background-color: honeydew;
  }
  .filter-tree div{
    float: left;
    width: 250px;
    text-align: left;
  }

  #tree-title{
    display: inline-block;
    width: 200px;
    border: none;
    position: absolute;
    left: 280px;
  }
  #tree-title p{
    font-size: 15px;
    line-height: 30px;
    float: left;
  }

  #file-window-tableView{
    border: solid 1px aqua;
    height: 370px;
    width: 67.5%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  #file-window-tableView div{
    height: 30px;
    text-align: left;
    line-height: 20px;
  }

  #file-window-iconsView{
    border: solid 1px aqua;
    height: 370px;
    width: 67.5%;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .file-show{
    height: 50px;
    width: 120px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .file-show div{
    width: 40px;
    height: 25px;
    float: right;
    cursor: pointer;
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
    watch: {
      filterText (val) {
        this.$refs.tree2.filter(val)
      }
    },
    data () {
      return {
        seen: false,
        leftSee: true,
        putOnSee: false,
        viewTable: true,
        viewIcons: false,
        input2: '',
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
        filterText: '',
        treeMessage: 'Files',
        data: [{
          id: 1,
          label: 'Files',
          children: [{
            id: 2,
            label: 'Documents',
            children: [{
              id: 5,
              label: 'Presentations'
            }, {
              id: 6,
              label: 'Reports',
              children: [{
                id: 9,
                label: 'China'
              }, {
                id: 10,
                label: 'USA'
              }]
            }]
          }, {
            id: 3,
            label: 'Images',
            children: [{
              id: 7,
              label: 'Thumbnails'
            }, {
              id: 8,
              label: 'Base images'
            }]
          }, {
            id: 4,
            label: 'Video'
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
      tableFlie () {
        this.viewTable = true
        this.viewIcons = false
      },
      iconsFile () {
        this.viewTable = false
        this.viewIcons = true
      },
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      handleNodeClick (data) {
        console.log(data)
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
