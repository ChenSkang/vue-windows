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
  <div v-on:dblclick="noteShow">
    <div class="icon" >
      <img src="../img/gantt.png" />
      <p class="icon-name">Notebook</p >
    </div>
  </div>

  <div v-if="seen" class="note-book">
    <el-row id="header">
      <el-col :span="24">
        <div class="noteTitle" :style="theme">
          <span class="note-title">Notebook</span>
          <el-button size="mini" class="title-button" @click="menuShow">
            <i class="el-icon-menu"></i>
          </el-button>
        </div>
      </el-col>
    </el-row>

    <transition name="tool">
      <div class="tools" v-if="showTools">
        <ul>
          <li style="margin-top: 40px">
            <el-button class="tools-btn" @click="openTheme = true, showTools = false" :style="theme">切换主题</el-button>
          </li>
          <li>
            <el-button class="tools-btn" @click="showDialog" :style="theme">清空数据</el-button>
          </li>
          <li>
            <el-button class="tools-btn" @click="seen = false" :style="theme">关闭窗口</el-button>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="tool">
      <div class="color-list" v-if="openTheme" @click="showTools = true, openTheme = false">
        <ul>
          <li>&nbsp点击切换主题</li>
          <li><el-button class="colors-btn" @click="colorChange(0)">
            <span style="background-color: #00b0f0" class="color-span"></span>&&nbsp#00b0f0</el-button></li>
          <li><el-button class="colors-btn" @click="colorChange(1)">
            <span style="background-color: #00d1b2" class="color-span"></span>&&nbsp#00d1b2</el-button></li>
          <li><el-button class="colors-btn" @click="colorChange(2)">
            <span style="background-color: #f4b976" class="color-span"></span>&&nbsp#f4b976</el-button></li>
          <li><el-button class="colors-btn" @click="colorChange(3)">
            <span style="background-color: #f39894" class="color-span"></span>&&nbsp#f39894</el-button></li>
          <li><el-button class="colors-btn" @click="colorChange(4)">
            <span style="background-color: #26b6be" class="color-span"></span>&&nbsp#26b6be</el-button></li>
        </ul>
      </div>
    </transition>

    <div class="table">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="12" offset="3">
          <el-input v-model="message" placeholder="代办事项" :disabled="tasks"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="hand" :plain="true" :disabled="tasks">提交</el-button>
        </el-col>
      </el-row>
      <div class="todo">
        <div class="todo-tab" :style="theme" @click="changeCollapse(0)">未完成
         <span class="close" :style="theme" :class="{open:!collapse[0]}"></span>
        </div>
        <div class="todo-box" v-show="collapse[0].show">
          <ul>
            <li class="todo-list" v-for="(value, index) in getToDo" @dblclick="edit(index)">
              <input type="checkbox" @click="haveDone(index)"/>
              {{value}}
              <button class="cancel-btn" @click="cancelDone(index)">取消</button>
              <input v-if="editInput" v-model="editValue" @keyup.enter="edited(index)"/>
            </li>
          </ul>
        </div>

        <div class="todo-tab" :style="theme" @click="changeCollapse(1)">已完成
          <span class="close" :style="theme" :class="{open:!collapse[1]}"></span>
        </div>
        <div class="todo-box"  v-show="collapse[1].show">
          <ul>
            <li class="todo-list" v-for="(value, index) in getDone" :key="value">
              <input type="checkbox" checked @click="notDone(index)">
              <div>{{value}}</div>
              <span class="event-time">{{value.time}}</span>
            </li>
          </ul>
        </div>

        <div class="todo-tab" :style="theme" @click="changeCollapse(2)">已取消
          <span class="close" :style="theme" :class="{open:!collapse[2]}"></span>
        </div>
        <div class="todo-box"  v-show="collapse[2].show">
          <ul>
            <li class="todo-list" v-for="(value, index) in getCancel">
              <div class="event-delete">{{value}}</div>
              <button @click="returnDone(index)" class="cancel-btn">恢复</button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data () {
    return {
      seen: false,
      showTools: false,
      message: '',
      openTheme: false,
      editInput: false,
      editValue: '',
      tasks: false,
      theme: {
        background: '#00B0F0'
      },
      collapse: [
        {
          show: true
        },
        {
          show: true
        },
        {
          show: true
        }
      ],
      getToDo: [],
      getDone: [],
      getCancel: [],
      colors: [
        '#00b0f0',
        '#00d1b2',
        '#f4b976',
        '#f39894',
        '#26b6be'
      ]
    }
  },
  methods: {
    colorChange (num) {
      this.theme.background = this.colors[num]
    },
    menuShow () {
      if (this.openTheme === false) {
        this.showTools = !this.showTools
      } else {
        this.openTheme = false
      }
    },
    noteShow () {
      this.seen = true
      this.showTools = false
    },
    hand () {
      if (this.message.length) {
        this.getToDo.push(this.message)
        this.message = ''
      } else {
        this.$message({
          message: '请输入待办事项'
        })
      }
      let leng = this.getToDo.length + this.getDone.length + this.getCancel.length
      if (leng === 4) {
        this.tasks = true
        this.message = '请清除数据后输入'
      }
    },
    changeCollapse (num) {
      this.collapse[num].show = !this.collapse[num].show
    },
    edit (index) {
      this.editInput = true
      this.editValue = this.getToDo[index]
      this.getToDo[index] = ''
    },
    edited (index) {
      this.editInput = false
      this.getToDo[index] = this.editValue
    },
    haveDone (index) {
      let str = this.getToDo[index]
      this.getToDo.splice(index, 1)
      this.getDone.push(str)
    },
    notDone (index) {
      let str = this.getDone[index]
      this.getDone.splice(index, 1)
      this.getToDo.push(str)
    },
    cancelDone (index) {
      let cel = this.getToDo[index]
      this.getToDo.splice(index, 1)
      this.getCancel.push(cel)
    },
    returnDone (index) {
      let ret = this.getCancel[index]
      this.getCancel.splice(index, 1)
      this.getToDo.push(ret)
    },
    showDialog () {
      this.getCancel = []
      this.getToDo = []
      this.getDone = []
      this.tasks = false
      this.message = ''
    }
  }
}
</script>

<style scoped>
  ul li{
    list-style: none;
  }
  .note-book{
    width: 800px;
    height: 450px;
    background-color: white;
    user-select: none;
    border: solid 1px #6b6a6c;
    position: absolute;
    left: 320px;
    top: 120px;
    overflow-x: hidden;
  }

  .icon{
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 200px;
    text-align: center;
  }

  .icon-name{
    font-size: 13px;
    height: auto;
    text-align: center;
  }

  .icon:hover{
    background: url("../img/icon_bg_full.png");
  }

  .noteTitle{
    height: 50px;
    text-align: center;
  }

  .note-title{
    font-size: 30px;
    line-height: 50px;
    color: #ffffff;
  }

  .title-button{
    position: absolute;
    top: 16px;
    right: 290px;
  }

  .tool-enter, .tool-leave-to{
    transform: translate3d(-100%,0,0);
  }
  .tool-enter-active, .tool-leave-active{
    transition: all .6s ease;
  }

  .tools{
    width: 140px;
    height: 400px;
    background: rgba(0,0,0,.4);
    position: absolute;
    bottom:0;
    left: 0;
  }

  .tools li{
    padding: 20px;
  }
  .color-list{
    width: 140px;
    height: 400px;
    position: absolute;
    bottom:0;
    left: 0;
    background: #f8f8f8
  }
  .color-list li{
    padding: 10px;
  }

  .tools-btn{
    color: white;
    cursor: pointer;
    font-size: inherit;
  }

  .colors-btn{
    width: 108px;
    height: 38px;
    border: 1px solid #aaa;
    cursor: pointer;
    background: #fff;
    position: relative;
    font-size: inherit;
  }

  .color-span{
    position: absolute;
    left: 8px;
    top: 8px;
    width: 20px;
    height: 20px;
  }
  .table{
    width: 700px;
    position: absolute;
    right: 0;
  }
  .todo{
    width: 500px;
    position: relative;
    left: 50px;
    margin-top: 20px;
    float: left;
   }
  .todo-tab{
    position: relative;
    height: 44px;
    width: 500px;
    padding-left: 15px;
    line-height: 44px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
  }

  .close{
    position: absolute;
    right: 20px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(135deg);
    transition: transform .3s;
  }

  .open{
    transform: rotate(45deg);
  }

  .todo-box{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    transition: height .3s;
  }
  .todo-list{
    position: relative;
    min-height: 44px;
    line-height: 25px;
    padding: 10px 100px 10px 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
  }
  input[type=checkbox] {
    position: absolute;
    left: 15px;
    top: 12px;
    width: 20px;
    height: 20px;
  }
  .cancel-btn {
    position: absolute;
    right: 10px;
    top: 7px;
    width: 50px;
    height: 30px;
    line-height: 30px;
    padding: 0;
    background: #fff;
    border: 1px solid #c0ccda;
    color: #666;
    font-size: 12px;
  }
  .event-time {
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 44px;
    font-size: 12px;
    color: #aaa;
  }
  .event-delete {
    text-decoration: line-through;
    color: #999;
  }
</style>
