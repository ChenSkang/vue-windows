<template>
  <div id="file-window" v-show="seen">
    <div id="file-title"><img src="../img/window-icon.png"/> Filemanager</div>
    <el-row id="file-show" type="flex" justify="between">
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
    <el-row class="file-button">
      <span id="tree-title">
        <p>{{treeMessage}}</p>
      </span>
      <span id="arrow-left" :title="leftView"><img src="../img/left.png" /></span>
      <span id="arrow-right" :title="rightView"><img src="../img/right.png" /></span>
      <span id="return" :title="upView"><img src="../img/up.png" /></span>
      <span id="icons-view" :title="iconsView" @click="iconsFile"><img src="../img/ViewGallery.png" /></span>
      <span id="table-view" :title="tableView" @click="tableFlie"><img src="../img/Viewlist.png" /></span>
    </el-row>
    <el-input icon="search" v-model="filterText" class="search"></el-input>
    <span id="el-dropdown-link" :title="actions" v-on:click="showFunction">
      <i class="el-icon-setting"></i>
    </span>
    <el-row class="fileFunction" v-show="seenFunction">
      <el-row @click="copy"><i class="el-icon-setting"></i>&nbsp;Copy</el-row>
      <el-row @click="cut"><i class="el-icon-setting"></i>&nbsp;Cut</el-row>
      <el-row @click="paste"><i class="el-icon-setting"></i>&nbsp;Paste</el-row>
      <el-row @click="create-file" class="createFolder"><i class="el-icon-document"></i>&nbsp;Create Folder</el-row>
      <el-row @click="cut-off"><i class="el-icon-delete2"></i>&nbsp;Delete</el-row>
      <el-row @click="rename"><i class="el-icon-edit"></i>&nbsp;Rename</el-row>
      <el-row @click="upload"><i class="el-icon-upload2"></i>&nbsp;Upload</el-row>
    </el-row>
    <div id="file-window-left" v-show="leftSee">
      <div id="tree-manager">
        <div id="put" @click="letleftsee"  v-show="leftSee" :title="putMessage"><img src="../img/put.png" /></div>
        <div id="expand" :title="expandTree"><img src="../img/window-icon.png" /></div>
        <div id="collapse" :title="collapseTree"><img src="../img/window-icon.png" /></div>
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
    <div id="puton" v-on:click="letleftsee" v-show="putOnSee" :title="putOnMessage"><img src="../img/puton.png" style="width: 13px; height: 13px; "></div>
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
</template>
<style>
  #file-window{
    width: 800px;
    height: 450px;
    background-color: white;
    border: solid 1px black;
    position: relative;
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

  #file-title{
    height: auto;
    font-size: 13px;
    position: absolute;
    left: 8px;
    top: 5px;
  }

  #file-show{
    position: absolute;
    right: 0;
    top: 0;
  }
  .el-row {
    margin-bottom: 0;
    &:last-child {
     margin-bottom: 0;
    }
  }

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

  .file-button{
    width: 100%;
    height: 30px;
    position: absolute;
    top: 35px;
  }

  .file-button span{
    width: 30px;
    height: 30px;
    border: 1px solid gainsboro;
    border-radius: 10%;
    cursor: pointer;
  }

  .file-button img{
    padding: 6px;
    width: 18px;
    height: 18px;
  }

  #el-dropdown-link{
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid gainsboro;
    border-radius: 10%;
    cursor: pointer;
    position: absolute;
    top: 35px;
    left: 10px;
  }

  #arrow-left{ position: absolute;left: 142px; }
  #arrow-right{ position: absolute;left: 174px; }
  #return{ position: absolute;left: 220px; }
  #icons-view{ position: absolute;right: 40px }
  #table-view{ position: absolute;right: 8px; }

  .fileFunction{
    border: 1px solid gainsboro;
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
    border-top: solid 1px gainsboro;
  }

  .search input{
    height: 30px;
    border-radius: 13px;
    border: 1px solid gainsboro;
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
    border: solid 1px gainsboro;
    height: 370px;
    width: 250px;
    position: absolute;
    bottom: 0;
  }

  #tree-manager{
    border-bottom: solid 1px gainsboro;
    width: 250px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
  }
  #tree-manager img{
    width: 13px;
    height: 13px;
  }

  #put{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    cursor: pointer;
  }
  #put:hover img{ box-shadow: inset 2px 2px 0 0 aqua; }

  #puton{
    border-top: solid 1px gainsboro;
    width: 20px;
    height: 370px;
    position: absolute;
    left: 0;
    top: 78px;
    background-color: #f3f1f5;
    cursor: pointer;
  }
  #puton img{
    position: absolute;
    left: 1px;
    top: 7px;
  }

  #puton:hover{ box-shadow: inset 2px 2px 0 0 aqua; }

  #expand{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 7px;
    right: 40px;
    cursor: pointer;
  }

  #expand:hover{ box-shadow: inset 1px 1px 0 0 aqua; }

  #collapse{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
  }
  #collapse:hover{ box-shadow: inset 1px 1px 0 0 aqua; }

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
    border: solid 1px gainsboro;
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
    border: solid 1px gainsboro;
    height: 370px;
    position: absolute;
    right: 0;
    bottom: 0;
  }

</style>
<script>
  import ElRow from 'element-ui/packages/row/src/row'
  document.oncontextmenu = function () {
    return false
  }
  export default{
    components: {ElRow},
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
          width: '68%'
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
            width: '68%'
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
