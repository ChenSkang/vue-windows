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
          <el-button size="mini" class="title-button" @click="showTools = !showTools"><i class="el-icon-menu"></i></el-button>
        </div>
      </el-col>
    </el-row>

    <transition name="tool">
      <div class="tools" v-if="showTools">
        <ul class="tools-sidebar ">
          <li>
            <el-button class="tools-btn" @click="openTheme" :style="theme">切换主题</el-button>
          </li>
          <li>
            <el-button class="tools-btn" @click="openTable" :style="theme">编辑数据</el-button>
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

    <div class="table">
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="12" offset="3">
          <el-input v-model="message"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="hand">提交</el-button>
        </el-col>
      </el-row>
      <div class="todo">
        <div class="todo-tab" :style="theme" @click="changeCollapse(0,$event)">未完成
         <span class="close" :style="theme"></span>
        </div>
        <div class="todo-box">
          <ul>
            <li class="todo-list" v-for="(value, index) in getToDo">
              <input type="checkbox">
              {{value}}
              <button class="cancel-btn">取消</button>
            </li>
          </ul>
        </div>

        <div class="todo-tab" :style="theme" @click="changeCollapse(1,$event)">已完成
          <span class="close" :style="theme"></span>
        </div>
        <div class="todo-box">
          <ul>
            <li class="todo-list" v-for="(value, index) in getDone" :key="value">
              <input type="checkbox">
              <div>{{value}}</div>
              <span class="event-time">{{value.time}}</span>
            </li>
          </ul>
        </div>

        <div class="todo-tab" :style="theme" @click="changeCollapse(2,$event)">已取消
          <span class="close" :style="theme"></span>
        </div>
        <div class="todo-box">
          <ul>
            <li class="todo-list" v-for="(value, index) in getCancle">
              <input type="checkbox">
              <div class="event-delete">{{value.content}}</div>
              <button>恢复</button>
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
      theme: {
        background: '#58B7FF'
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
      getCancel: []
    }
  },
  methods: {
    noteShow () {
      this.seen = true
      this.showTools = false
    },
    hand () {
      this.getToDo.push(this.message)
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
    width: 150px;
    height: 400px;
    background: rgba(0,0,0,.5);
    position: absolute;
    bottom:0;
    left: 0;
  }

  .tools li{
    padding: 20px;
  }

  .tools-btn{
    color: white;
    font-family: inherit;
    cursor: pointer;
    font-size: inherit;
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

  .close {
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
