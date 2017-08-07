/*
* MIT License
*
* Copyright (c) 2017 TechCatsLab Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
/**
* Revision History:
*     Initial: 2017/07/19       Chen Shuaikang
*/
<template>
  <div>
    <div v-on:dblclick="showWindow">
      <div class="icon" >
        <img src="../img/filemanager.png" />
        <p class="icon-name">Filemanager</p >
      </div>
    </div>
    <div id="file-window" v-show="seen" v-drag>
      <div>
        <el-row id="file-title"><img src="../img/window-icon.png"/> Filemanager</el-row>
        <el-row id="file-show" type="flex" justify="between">
          <el-col :span="8">
            <div class="grid" @click="closeWindow"><img src="../img/hide_button.png" /></div>
          </el-col>
          <el-col :span="8">
            <div class="grid"><img src="../img/resize_button.png" /></div>
          </el-col>
          <el-col :span="8">
            <div class="grid closed" @click="closeWindow"><img src="../img/close_button.png" /></div>
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
        <el-input
          icon="search"
          v-model="filterText"
          class="search"
          size="small"
          rows="1">
        </el-input>
        <el-popover
          ref="popover"
          placement="bottom-start"
          width="180"
          trigger="click">
          <el-row @click="copy" class="fileFunction"><i class="el-icon-setting"></i>&nbsp;Copy</el-row>
          <el-row @click="cut" class="fileFunction"><i class="el-icon-setting"></i>&nbsp;Cut</el-row>
          <el-row @click="paste" class="fileFunction"><i class="el-icon-setting"></i>&nbsp;Paste</el-row>
          <el-row @click="create-file" class="createFolder fileFunction"><i class="el-icon-document"></i>&nbsp;Create Folder</el-row>
          <el-row @click="cut-off" class="fileFunction"><i class="el-icon-delete2"></i>&nbsp;Delete</el-row>
          <el-row @click="rename" class="fileFunction"><i class="el-icon-edit"></i>&nbsp;Rename</el-row>
          <el-row @click="upload" class="fileFunction"><i class="el-icon-upload2"></i>&nbsp;Upload</el-row>
        </el-popover>
        <el-row
          v-popover:popover
          id="el-dropdown-link"
          :title="actions">
          <i class="el-icon-setting"></i>
        </el-row>
        <div id="file-window-left" v-show="leftSee">
          <el-row id="tree-manager">
            <div id="put" @click="letleftsee"  v-show="leftSee" :title="putMessage"><img src="../img/put.png" /></div>
            <div id="expand" :title="expandTree"><img src="../img/window-icon.png" /></div>
            <div id="collapse" :title="collapseTree"><img src="../img/window-icon.png" /></div>
          </el-row>
          <el-row id="tree">
            <el-tree
              class="filter-tree"
              :data="data"
              :props="defaultProps"
              indent="14"
              node-key="id"
              :filter-node-method="filterNode"
              :render-content="renderContent"
              ref="tree2">
            </el-tree>
          </el-row>
        </div>
        <div id="puton" v-on:click="letleftsee" v-show="putOnSee" :title="putOnMessage"><img src="../img/puton.png" style="width: 13px; height: 13px;"/></div>
        <div id="file-window-tableView" v-show="viewTable" :style="viewObject">
          <el-table
            :data="tableData"
            border
            highlight-current-row
            fit="false"
            style="width: 100%">
            <el-table-column
              label="Name"
              width="150">
              <template scope="scope">
                <el-icon name="document"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="Date"
              width="175">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="type"
              label="Type"
              width="100">
            </el-table-column>
            <el-table-column
              prop="size"
              label="Size"
              sortable
              width="100">
            </el-table-column>
          </el-table>
        </div>
        <div id="file-window-iconsView" v-show="viewIcons" :style="viewObject">
          <span class="demonstration">Click 指示器触发</span>
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 5">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
  let id = 1000
  import ElRow from 'element-ui/packages/row/src/row'
  import ElPopover from '../../node_modules/element-ui/packages/popover/src/main'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  document.oncontextmenu = function () {
    return false
  }
  export default{
    components: {
      ElInput,
      ElCol,
      ElButton,
      ElPopover,
      ElRow},
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
        seenFunction: false,
        showTools: false,
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
        },
        tableData: [{
          name: 'chao',
          date: '1998/9/12',
          type: 'excel',
          size: '101KB'
        }, {
          name: 'feng',
          date: '2016/7/29',
          type: 'avi',
          size: '15GB'
        }, {
          name: 'chen',
          date: '2017/7/29',
          type: 'document',
          size: '101MB'
        }, {
          name: 'shi',
          date: '2013/7/29',
          type: 'mp3',
          size: '66MB'
        }]
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
      append (store, data) {
        store.append({ id: id++, label: 'newFolder', children: [] }, data)
      },
      remove (store, data) {
        store.remove(data)
      },
      renderContent (h, { node, data, store }) {
        return (
          <span>
            <span>
              <span>{node.label}</span>
            </span>
            <span style="float: right; margin-right: 20px">
              <el-button size="mini" on-click={ () => this.append(store, data) }>A</el-button>
              <el-button size="mini" on-click={ () => this.remove(store, data) }>D</el-button>
            </span>
          </span>)
      }
    }
  }
</script>

<style scoped>
  #file-window{
    width: 800px;
    height: 450px;
    background-color: white;
    user-select: none;
    border: solid 1px #6b6a6c;
    position: absolute;
    left: 350px;
    top: 100px;
    overflow-x: hidden;
  }

  .icon{
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 100px;
  }

  .icon-name{
    font-size: 13px;
    height: auto;
  }

  .icon:hover{
    background: url("../img/icon_bg_full.png");
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
  }

  .grid {
    min-width: 40px;
    min-height: 25px;
    line-height: 25px;
  }

  .grid:hover{
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

  #arrow-left{ position: absolute; left: 142px; }
  #arrow-right{ position: absolute; left: 174px; }
  #return{ position: absolute; left: 220px; }
  #icons-view{ position: absolute; right: 40px }
  #table-view{ position: absolute; right: 8px; }

  .fileFunction{
    height: 35px;
    line-height: 35px;
    font-size: 15px;
  }
  .fileFunction:hover{
    background-color: #f3f1f5;
  }
  .createFolder{
    border-top: solid 1px gainsboro;
  }

  .search{
    width: 12.5%;
    position: absolute;
    right: 80px;
    top: 36px;
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
    width: 250px;
    border: none;
    position: absolute;
    background-color: #f3f1f5;
    float: left;
  }

  #tree-title{
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

  #file-window-iconsView{
    border: solid 1px gainsboro;
    height: 370px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
