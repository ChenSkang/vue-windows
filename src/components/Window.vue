<template xmlns="http://www.w3.org/1999/html" xmlns:v-drag="http://www.w3.org/1999/xhtml">
  <div id="Window">
    <router-view></router-view>
    <div id="footer" v-if="footerVisible">
      <div id="start" v-on:click="showWindow">
        <img src="../img/start.png"  style="float: left">
      </div>
      <div id="Time"></div>
      <div id="Date"></div>
    </div>
    <div id="DhtmlxGantt" v-on:dblclick="showDhtmlxGantt" v-if="dhtmlVisible">
      <div id="Dhtml-icon" class="icon">
        <img src="../img/gantt.png">
        <p class="icon-name">DhtmlxGantt</p>
        <dhtmlx-gantt v-if="seen_dhtmlxGantt"></dhtmlx-gantt>
      </div>
    </div>
    <div id="Filemanager" v-on:dblclick="showFilemanager" v-if="fileVisible">
      <div id="file-icon" class="icon" >
        <img src="../img/filemanager.png">
        <p class="icon-name">Filemanager</p>
        <file-manager v-if="seen_filemanager"></file-manager>
      </div>
    </div>
    <div id="DtmlScheduler" v-on:dblclick="showDtmlxScheduler" v-if="dtmlVisible">
      <div id="Dtml-icon" class="icon">
        <img src="../img/scheduler.png">
        <p class="icon-name">DtmlxScheduler</p>
      </div>
      <dtmlx-scheduler v-if="seen_dtmlx"></dtmlx-scheduler>
    </div>
    <transition name="el-fade-in-linear">
      <div id="WindowsMenu" v-show="seen">
      <div id="Menu" >
        <div id="User">
          <img  id="User_logo" src="../img/user_logo.png" />
          <div id="User_name">Yan Tsishko</div>
        </div>
        <el-button type="text" @click="signOut" id="SignOut"><img src="../img/signout.png"/><span id="SignText">sign out</span></el-button>
        <div id="Life">
          <div id="Life_title">Life at a glance</div>
          <div id="Life_content">
            <el-row :gutter="5">
              <el-col :span="8">
                <div class="grid-content border text" id="Calendar" v-on:click="showCalendar">
                  <span class="content_title">Calendar</span>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content border text" id="Email" v-on:click="showEmail">
                  <span class="content_title">E-mail</span>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="16">
                <div class="grid-content border text" id="Photos" v-on:click="showPhotos">
                  <span class="content_title">Photos</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content border text" id="Friend" v-on:click="showFriend">
                  <span class="content_title">Friend</span>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="8">
                <div class="grid-content border text" id="Install" v-on:click="showInstall">
                  <span class="content_title">Install</span>
                </div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content border text" id="Video" v-on:click="showVideo">
                  <span class="content_title">Video</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div id="Play">
          <div id="Play_title">Play and Explore</div>
          <div id="Play_content">
          <el-row :gutter="5">
            <el-col :span="8">
              <div class="grid-content border text" id="Game" v-on:click="showGame">
                <span class="content_title">Game</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content border text" id="Music" v-on:click="showMusic">
                <span class="content_title">Music</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content border text" id="Camera" v-on:click="showCamera">
                <span class="content_title">Camera</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="8">
              <div class="grid-content border text" id="Sports" v-on:click="showSports">
                <span class="content_title">Sports</span>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content border text" id="News" v-on:click="showNews">
                <span class="content_title">News</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="5">
            <el-col :span="8">
              <div class="grid-content border text" id="Store" v-on:click="showStore">
                <span class="content_title">Store</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content border text" id="Money" v-on:click="showMoney">
                <span class="content_title">Money</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content border text" id="Travel" v-on:click="showTravel">
                <span class="content_title">Travel</span>
              </div>
            </el-col>
          </el-row>
          </div>
        </div>
      </div>
    </div>
    </transition>
    <div id="Calendar_content" v-show="seen_calendar" v-drag>
      <div class="title">
        <div class="close" v-on:click="closeCalendar">
          <img class="close_png" src="../img/close_button.png" />
        </div>
        <div class="name">Calendar</div>
      </div>
      <img class="content_body" id="content" src="../img/calendar.png" />
    </div>
    <div id="Email_content" v-show="seen_email">
      <div class="title">
        <div class="close" v-on:click="closeEmail">
          <img class="close_png" src="../img/close_button.png" />
        </div>
        <div class="name">Email</div>
      </div>
      <img class="content_body" src="../img/20.png" />
    </div>
    <div id="Photos_content" v-show="seen_photos">
      <div class="title">
        <div class="close" v-on:click="closePhotos">
          <img class="close_png" src="../img/close_button.png" />
        </div>
        <div class="name">Photos</div>
        <img class="content_body" src="../img/shop.png"/>
      </div>
    </div>
    <div id="Friend_content" v-show="seen_friend">
      <div class="title">
        <div class="close" v-on:click="closeFriend">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Friend</div>
      </div>
      <img class="content_body" src="../img/34.png"/>
    </div>
    <div id="Install_content" v-show="seen_install">
      <div class="title">
        <div class="close" v-on:click="closeInstall">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Install</div>
      </div>
      <img class="content_body" src="../img/06.png"/>
    </div>
    <div id="Video_content" v-show="seen_video">
      <div class="title">
        <div class="close" v-on:click="closeVideo">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Video/div>
        </div>
        <img class="content_body" src="../img/video.png"/>
      </div>
    </div>
    <div id="Game_content" v-show="seen_game">
      <div class="title">
        <div class="close" v-on:click="closeGame">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Games/div>
        </div>
        <img class="content_body" src="../img/games.png"/>
      </div>
    </div>
    <div id="Music_content" v-show="seen_music">
      <div class="title">
        <div class="close" v-on:click="closeMusic">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Music</div>
        </div>
      <img class="content_body" src="../img/music.png"/>
    </div>
    <div id="Camera_content" v-show="seen_camera">
      <div class="title">
        <div class="close" v-on:click="closeCamera">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Camera</div>
        <img class="content_body" src="../img/camera.png"/>
      </div>
    </div>
    <div id="Sports_content" v-show="seen_sports">
      <div class="title">
        <div class="close" v-on:click="closeSports">
          <img class="close_png" src="../img/close_button.png" />
        </div>
        <div class="name">Sports</div>
        <img class="content_body" src="../img/shop.png"/>
      </div>
    </div>
    <div id="News_content" v-show="seen_news">
      <div class="title">
        <div class="close" v-on:click="closeNews">
          <img class="close_png" src="../img/close_button.png" />
        </div>
        <div class="name">News</div>
        <img class="content_body" src="../img/shop.png"/>
      </div>
    </div>
    <div id="Store_content" v-show="seen_store">
      <div class="title">
        <div class="close" v-on:click="closeStore">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Store</div>
        <img class="content_body" src="../img/shop.png"/>
      </div>
    </div>
    <div id="Money_content" v-show="seen_money">
      <div class="title">
        <div class="close" v-on:click="closeMoney">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Money</div>
      </div>
        <img class="content_body" src="../img/graph.png"/>
    </div>
    <div id="Travel_content" v-show="seen_travel">
      <div class="title">
        <div class="close" v-on:click="closeTravel">
          <img class="close_png" src="../img/close_button.png"/>
        </div>
        <div class="name">Travel</div>
        <img class="content_body" src="../img/24.png"/>
      </div>
    </div>
    <div id="SignIn" v-if="signinVisible">
      <img id="UserLogo" src="../img/user_logo.png"/>
      <span id="UserName">Yan Tsishko</span>
      <el-button type="success" id="SigninButton" v-on:click="signIn">Sign In</el-button>
    </div>
  </div>
</template>

<script>
  import fileManager from './Filemanager.vue'
  import dtmlxScheduler from './DtmlxScheduler.vue'
  import dhtmlxGantt from './DhtmlxGantt.vue'

  function setTime () {
    var time = new Date()
    var hour = time.getHours()
    if (hour <= 9) { hour = '0' + hour }
    var minute = time.getMinutes()
    if (minute <= 9) { minute = '0' + minute }
    var second = time.getSeconds()
    if (second <= 9) { second = '0' + second }
    var times = hour + ':' + minute + ':' + second
    document.getElementById('Time').innerHTML = times
  }
  setInterval(setTime, 1000)
  function setDate () {
    var date = new Date().toLocaleDateString()
    document.getElementById('Date').innerHTML = date
  }
  setInterval(setDate, 1000)
  export default{
    data () {
      return {
        seen: false,
        seen_calendar: false,
        seen_email: false,
        seen_photos: false,
        seen_friend: false,
        seen_install: false,
        seen_video: false,
        seen_game: false,
        seen_music: false,
        seen_camera: false,
        seen_sports: false,
        seen_news: false,
        seen_store: false,
        seen_money: false,
        seen_travel: false,
        seen_filemanager: false,
        seen_dtmlx: false,
        seen_dhtmlxGantt: false,
        footerVisible: true,
        dhtmlVisible: true,
        fileVisible: true,
        dtmlVisible: true,
        signinVisible: false
      }
    },
    components: {
      fileManager,
      dtmlxScheduler,
      dhtmlxGantt
    },
    methods: {
      showWindow () {
        this.seen = !this.seen
      },
      showCalendar () {
        this.seen_calendar = true
        this.seen = !this.seen
      },
      closeCalendar () {
        this.seen_calendar = false
      },
      showEmail () {
        this.seen = !this.seen
        this.seen_email = true
      },
      closeEmail () {
        this.seen_email = false
      },
      showPhotos () {
        this.seen = !this.seen
        this.seen_photos = true
      },
      closePhotos () {
        this.seen_photos = false
      },
      showFriend () {
        this.seen = !this.seen
        this.seen_friend = true
      },
      closeFriend () {
        this.seen_friend = false
      },
      showInstall () {
        this.seen = !this.seen
        this.seen_install = true
      },
      closeInstall () {
        this.seen_install = false
      },
      showVideo () {
        this.seen = !this.seen
        this.seen_video = true
      },
      closeVideo () {
        this.seen_video = false
      },
      showGame () {
        this.seen = !this.seen
        this.seen_game = true
      },
      closeGame () {
        this.seen_game = false
      },
      showMusic () {
        this.seen = !this.seen
        this.seen_music = true
      },
      closeMusic () {
        this.seen_music = false
      },
      showCamera () {
        this.seen = !this.seen
        this.seen_camera = true
      },
      closeCamera () {
        this.seen_camera = false
      },
      showSports () {
        this.seen = !this.seen
        this.seen_sports = true
      },
      closeSports () {
        this.seen_sports = false
      },
      showNews () {
        this.seen = !this.seen
        this.seen_news = true
      },
      closeNews () {
        this.seen_news = false
      },
      showStore () {
        this.seen = !this.seen
        this.seen_store = true
      },
      closeStore () {
        this.seen_store = false
      },
      showMoney () {
        this.seen = !this.seen
        this.seen_money = true
      },
      closeMoney () {
        this.seen_money = false
      },
      showTravel () {
        this.seen = !this.seen
        this.seen_travel = true
      },
      closeTravel () {
        this.seen_travel = false
      },
      showFilemanager () {
        this.seen_filemanager = true
      },
      showDtmlxScheduler () {
        this.seen_dtmlx = true
      },
      showDhtmlxGantt () {
        this.seen_dhtmlxGantt = true
      },
      signOut () {
        this.footerVisible = false
        this.dhtmlVisible = false
        this.fileVisible = false
        this.dtmlVisible = false
        this.seen = false
        this.signinVisible = true
      },
      signIn () {
        this.footerVisible = true
        this.dhtmlVisible = true
        this.fileVisible = true
        this.dtmlVisible = true
        this.signinVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-image: url("../img/background.jpeg");
    background-size: cover;
    overflow: hidden;
    min-width: 1520px;
    min-height: 1080px;
  }

  #file-icon{
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 100px;
    cursor: pointer;
  }

  #Dhtml-icon{
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 200px;
    cursor: pointer;
  }

  #Dtml-icon{
    width: 81px;
    height: 81px;
    position: absolute;
    left: 10px;
    top: 300px;
    cursor: pointer;
  }

  .icon-name{
    font-size: 13px;
    height: auto;
    color: #FFFFFF;
  }

  .icon:hover{
    background: url("../img/icon_bg_full.png");
  }

  #footer{
    width: 100%;
    background-color: black;
    opacity: 0.85;
    position: absolute;
    bottom: 0;
  }

  #start{
    width: 50px;
  }

  #start:hover{
    opacity: 0.6;
  }

  #Time{
    color: white;
    font-size: 15px;
    position: absolute;
    right: 20px;
  }

  #Date{
    color: white;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    right: 13px;
  }

  #Menu{
    background-color: black;
    width: 850px;
    height: 380px;
    position: absolute;
    bottom: 41px;
    opacity: 0.8;
  }

  #User_logo{
    border-radius: 50px;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }

  #User_name{
    color: white;
    float: left;
    margin-top: 25px;
    margin-left: 5px;
  }

  #SignOut{
    position: absolute;
    top: 330px;
    left: 20px;
  }

  #SignText{
    font-size: 16px;
    color: white;
    position: absolute;
    left: 20px;
  }

  #Life{
    position: relative;
    height: 300px;
    width: 300px;
    margin-left: 210px;
    margin-top: 20px;
  }

  #Life_content{
    width: 310px;
    height: 280px;
    position: absolute;
    margin-top: 30px;
  }

  .el-row {
     margin-bottom: 5px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 1px;
    min-height: 90px;
    min-width: 90px;
  }

  .row-bg {
    padding: 5px 5px;
    background-color: #f9fafc;
  }

  #Life_title{
    margin-left: 0;
    position: absolute;
    margin-top: 5px;
    color: white;
  }

  .content_title{
    position: absolute;
    bottom: 3px;
  }

  #Calendar{
    background: #107c10;
    background-image : url("../img/calendar.png");
    background-repeat: no-repeat;
    background-size: 55% 55%;
    background-position: center center;
    position: relative;
  }

  #Email{
    background-color: #00b1f0;
    background-image: url("../img/20.png");
    background-repeat: no-repeat;
    background-size: 32% 58%;
    background-position: center center;
    position: relative;
  }

  #Photos{
    background-image: url("../img/photos.png");
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

  #Friend{
    background-image: url("../img/34.png");
    background-repeat: no-repeat;
    background-size: 65% 65%;
    background-position: center center;
    background-color: #00b1f0;
    position: relative;
  }

  .text{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    color: white;
  }

  #Install{
    background-color: #2143af;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-image: url("../img/06.png");
    position: relative;
  }

  #Video{
    background-repeat: no-repeat;
    background-size: 35% 60%;
    background-position: center center;
    background-color: #90228a;
    background-image: url("../img/31.png");
    position: relative;
  }

  #Play{
    position: relative;
    height: 300px;
    width: 300px;
    margin-left: 530px;
    margin-top: -300px;
  }

  #Play_content{
    width: 310px;
    height: 280px;
    position: absolute;
    margin-top: 30px;
  }

  #Play_title{
    margin-left: 0;
    position: absolute;
    margin-top: 5px;
    color: white;
  }

  #Game{
    background: #2143af;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-image: url("../img/games.png");
    position: relative;
  }

  #Music{
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-color: #e12429;
    background-image: url("../img/music.png");
    position: relative;
  }

  #Camera{
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-color: #90228a;
    background-image: url("../img/camera.png");
    position: relative;
  }

  #Sports{
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../img/sports.png");
    position: relative;
  }

  #News{
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../img/news.png");
    position: relative;
  }

  #Store{
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-color: #107c10;
    background-image: url("../img/shop.png");
    position: relative;
  }

  #Money{
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-image: url("../img/graph.png");
    background-color: #2143af;
    position: relative;
  }

  #Travel{
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    background-color: #00b1f0;
    background-image: url("../img/24.png");
    position: relative;
  }

  .title{
    height: 25px;
    width: 100%;
    background-color: white;
    position: absolute;
  }

  .name{
    font-size: 12px;
    position: absolute;
    margin-left: 15px;
    margin-top: 5px;
  }

  .close{
    width: 25px;
    height: 25px;
    position: absolute;
    margin-left: 726px;
  }

  .close_png{
    width: 10px;
    height: 10px;
    position: absolute;
    margin-top: 7.5px;
    margin-left: -5px;
  }

  .content_body{
    margin-top: 150px;
    margin-left: -50px;
  }

  .close:hover{
    background-color: red;
  }

  .border:hover{
    box-shadow: inset 0px 0px 2px 2px rgba(255,255,255,0.8);
  }

  #Calendar_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #107c10;
  }

  #Email_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #00b1f0;
  }

  #Photos_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #00b1f0;
  }

  #Friend_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #00b1f0;
  }

  #Install_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #2143af ;
  }

  #Video_content{
    background-color: #90228a;
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
  }

  #Game_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position:absolute;
    background-color: #2143af ;
  }

  #Music_content{
     width: 750px;
     height: 450px;
     margin-left: 400px;
     margin-top: 100px;
     position: absolute;
     background-color: #e12429 ;
   }

  #Camera_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #90228a ;
  }

  #Sports_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position:absolute;
    background-color: #00b1f0;
  }

  #News_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #00b1f0;
  }

  #Store_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #107c10;
  }

  #Money_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #2143af;
  }

  #Travel_content{
    width: 750px;
    height: 450px;
    margin-left: 400px;
    margin-top: 100px;
    position: absolute;
    background-color: #00b1f0;
  }

  #UserLogo{
    border-radius: 100px;
    width: 70px;
    height: 70px;
    position: absolute;
    top: 250px;
    left: 850px;
  }

  #UserName{
    position: absolute;
    top: 340px;
    left: 835px;
    color: white;
    font-size: 20px;
  }

  #SigninButton{
    position: absolute;
    top: 390px;
    left: 850px;
  }
</style>
