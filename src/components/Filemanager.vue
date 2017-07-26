<template>
  <div id="File">
    <div id="file-window" v-show="seen">
      <div id="file-title"><img src="../img/window-icon.png">   Filemanager</div>
      <div class="file-show">
        <div id="close" @click="closeWindow"><li id="close-show"><img src="../img/close_button.png"></li></div>
        <div id="resize"><li id="resize-show"><img src="../img/resize_button.png"></li></div>
        <div id="hide" @click="closeWindow"><li id="hide-show"><img src="../img/hide_button.png"></li></div>
      </div>
      <div class="file-button">
        <div id="tree-title">
          <p>{{treeMessage}}</p>
        </div>
        <div class="arrow-left" :title="leftView"><img src="../img/left.png" style="width: 18px; height: 18px;"></div>
        <div class="arrow-right" :title="rightView"><img src="../img/right.png" style="width: 18px; height: 18px;"></div>
        <div class="return" :title="upView"><img src="../img/up.png" style="width: 18px; height: 18px;"></div>
        <div class="icons-view" :title="iconsView" @click="iconsFile"><img src="../img/ViewGallery.png" style="width: 18px; height: 18px; "></div>
        <div class="table-view" :title="tableView" @click="tableFlie"><img src="../img/Viewlist.png" style="width: 18px; height: 18px; "></div>
      </div>
      <el-input icon="search" v-model="filterText" class="search"></el-input>
      <span class="el-dropdown-link" :title="actions" v-on:click="showFunction">
        <i class="el-icon-setting"></i>
      </span>
      <div class="fileFunction" v-show="seenFunction">
        <div @click="copy"><i class="el-icon-setting"></i>Copy</div>
        <div @click="cut"><i class="el-icon-setting"></i>Cut</div>
        <div @click="paste"><i class="el-icon-setting"></i>Paste</div>
        <div @click="create-file" class="createFolder"><i class="el-icon-document"></i>Create Folder</div>
        <div @click="cut-off"><i class="el-icon-delete2"></i>Delete</div>
        <div @click="rename"><i class="el-icon-edit"></i>Rename</div>
        <div @click="upload"><i class="el-icon-upload2"></i>Upload</div>
      </div>
      <div id="file-window-left" v-show="leftSee">
        <div id="tree-manager">
          <div class="put" @click="letleftsee"  v-show="leftSee" :title="putMessage"><img src="../img/put.png" style="width: 13px; height: 13px; "></div>
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
            @click="showFunction"
            ref="tree2">
          </el-tree>
        </div>
      </div>
      <div class="puton" v-on:click="letleftsee" v-show="putOnSee" :title="putOnMessage"><img src="../img/puton.png" style="width: 13px; height: 13px; "></div>
      <div id="file-window-tableView" v-show="viewTable" :style="viewObject">
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
      <div id="file-window-iconsView" v-show="viewIcons" :style="viewObject"></div>
    </div>
  </div>
</template>
<style>
  #File{

  }

  #file-window{
    width: 800px;
    height: 450px;
    background-color: white;
    border: solid 1px black;
    position: relative;
    top: -50px;
    left: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    resize: both;
  }

  #file-window::-webkit-scrollbar {
    width: 5px;
    height: 80%;
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
  .el-dropdown-link{
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid aqua;
    border-radius: 10%;
    cursor: pointer;
    position: absolute;
    top: 35px;
    left: 10px;
  }

  .arrow-left{ position: absolute;left: 142px; }
  .arrow-right{ position: absolute;left: 174px; }
  .return{ position: absolute;left: 220px; }
  .icons-view{ position: absolute;right: 40px }
  .table-view{ position: absolute;right: 8px; }

  .fileFunction{
    border: 1px solid aqua;
    width: 200px;
    height: 252px;
    background-color: white;
    position: absolute;
    left: 20px;
    top: 60px;
    z-index: 9999;
  }

  .fileFunction div{
    width: 200px;
    height: 36px;
    text-align: left;
    text-indent: 5px;
    line-height: 36px;
  }
  .fileFunction div:hover{
    background-color: #f3f1f5;
  }

  .createFolder{
    border-top: solid 1px aqua;
  }

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
    background-color: #f3f1f5;
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
  .put:hover img{ box-shadow: inset 2px 2px 0 0 aqua; }

  .puton{
    border-top: solid 1px aqua;
    width: 20px;
    height: 370px;
    position: absolute;
    left: 0;
    top: 78px;
    background-color: #f3f1f5;
    cursor: pointer;
  }
  .puton img{
    position: absolute;
    left: 1px;
    top: 7px;
  }

  .puton:hover{ box-shadow: inset 2px 2px 0 0 aqua; }

  .expand{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 7px;
    right: 40px;
    cursor: pointer;
  }

  .expand:hover{ box-shadow: inset 1px 1px 0 0 aqua; }

  .collapse{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
  }
  .collapse:hover{ box-shadow: inset 1px 1px 0 0 aqua; }

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
    background-color: #f3f1f5;
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
    position: absolute;
    right: 0;
    bottom: 0;
  }

</style>
<script>
  document.oncontextmenu = function () {
    return false
  }
  export default{
    watch: {
      filterText (val) {
        this.$refs.tree2.filter(val)
      }
    },
    data () {
      return {
        seen: true,
        leftSee: true,
        putOnSee: false,
        viewTable: true,
        viewIcons: false,
        seenFunction: false,
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
        viewObject: {
          width: '67.5%'
        },
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
        if (this.putOnSee === true) {
          this.viewObject = {
            width: '97.5%'
          }
        } else {
          this.viewObject = {
            width: '67.5%'
          }
        }
      },
      showFunction () {
        this.seenFunction = !this.seenFunction
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
      }
    }
  }
</script>
