<template>
  <div id="Menu">
      <div id="User">
        <img  id="User_logo" src="../img/user_logo.png"/>
        <div id="User_name">Yan Tsishko</div>
      </div>
      <div id="Life">
        <div id="Life_title">Life at a glance</div>
        <div id="Calendar">
        <img id="Calendar_png" src="../img/calendar.png"/>
        <div id="Calendar_name">Calendar</div>
        </div>
        <div id="Email">
          <img id="Email_png" src="../img/20.png"/>
          <div id="Email_name">Email</div>
        </div>
        <div id="Photos">
          <div id="Photos_name">Photos</div>
        </div>
        <div id="Friend">
          <img id="Friend_png" src="../img/34.png"/>
          <div id="Friend_name">Friend</div>
        </div>
        <div id="Install">
          <img id="Install_png" src="../img/06.png"/>
          <div id="Install_name">Install</div>
        </div>
        <div id="Video">
          <img id="Video_png" src="../img/31.png"/>
          <div id="Video_name">Video</div>
        </div>
      </div>
      <div id="Play">
        <div id="Play_title">Play and Explore</div>
        <div id="Game">
          <img id="Game_png" src="../img/games.png"/>
          <div id="Game_name">Games</div>
        </div>
        <div id="Music">
          <img id="Music_png" src="../img/music.png"/>
          <div id="Music_name">Music</div>
        </div>
        <div id="Camera">
          <img id="Camera_png" src="../img/camera.png"/>
          <div id="Camera_name">Camera</div>
        </div>
        <div id="Sports">
          <div id="Sports_name">Sports</div>
        </div>
        <div id="News">
          <div id="News_name">News</div>
        </div>
        <div id="Store">
          <img id="Store_png" src="../img/shop.png"/>
          <div id="Store_name">Store</div>
        </div>
        <div id="Money">
          <img id="Money_png" src="../img/graph.png"/>
          <div id="Money_name">Money</div>
        </div>
        <div id="Travel">
          <img id="Travel_png" src="../img/24.png"/>
          <div id="Travel_name">Travel</div>
        </div>
      </div>
  </div>
</template>
<style>
  #Menu{
    display: none;
    background-color: black;
    width: 840px;
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
  #Life{
    position: relative;
    height: 300px;
    width: 310px;
    margin-left: 240px;
    margin-top: 20px;
  }
  #Play{
    position: relative;
    height: 300px;
    width: 300px;
    margin-left: 540px;
    margin-top: -300px;
  }
  #Life_title{
    margin-left: 0;
    position: absolute;
    margin-top: 5px;
    color: white;
  }
  #Play_title{
    margin-left: 0;
    position: absolute;
    margin-top: 5px;
    color: white;
  }
  #Calendar{
    background: #107c10;
    width: 90px;
    height: 90px;
    margin-top: 30px;
    position: absolute;
    float: left;
  }
  #Calendar_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Calendar_name{
    color: white;
    font-size: 12px;
  }
  #Email{
    background-color: #00b1f0;
    width: 185px;
    height: 90px;
    margin-left: 95px;
    margin-top: 30px;
    position: absolute;
  }
  #Email_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Email_name{
    color: white;
    font-size: 12px;
  }
  #Photos{
    background-image: url("../img/photos.png");
    width: 185px;
    height: 90px;
    position: absolute;
    margin-top: 125px;
  }
  #Photos_name{
    color: white;
    font-size: 12px;
    padding-top: 65px;
  }
  #Friend{
    position: absolute;
    margin-top: 125px;
    width: 90px;
    height: 90px;
    margin-left: 190px;
    background-color: #00b1f0;
  }
  #Friend_png{
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
  #Friend_name{
    color: white;
    font-size: 12px;
  }
  #Install{
    position: absolute;
    width: 90px;
    height: 90px;
    background-color: #2143af;
    margin-top: 220px;
  }
  #Install_png{
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
  #Install_name{
    color: white;
    font-size: 12px;
  }
  #Video{
    position: absolute;
    width:185px;
    height: 90px;
    margin-top: 220px;
    background-color: #90228a;
    margin-left: 95px;
  }
  #Video_png{
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
  #Video_name{
    color: white;
    font-size: 12px;
  }
  #Game{
    background: #2143af;
    width: 90px;
    height: 90px;
    margin-top: 30px;
    position: absolute
  }
  #Game_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Game_name{
    color: white;
    font-size: 12px;
  }
  #Music{
    width: 90px;
    height: 90px;
    margin-top: 30px;
    position: absolute;
    margin-left: 95px;
    background-color: #e12429;
  }
  #Music_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Music_name{
    color: white;
    font-size: 12px;
  }
  #Camera{
    width: 90px;
    height: 90px;
    margin-top: 30px;
    position: absolute;
    margin-left: 190px;
    background-color: #90228a;
  }
  #Camera_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Camera_name{
    color: white;
    font-size: 12px;
  }
  #Sports{
    margin-top: 125px;
    width: 90px;
    height: 90px;
    position: absolute;
    background-image: url("../img/sports.png");
  }
  #Sports_name{
    color: white;
    font-size: 12px;
    padding-top: 65px;
  }
  #News{
    width: 185px;
    height: 90px;
    position: absolute;
    margin-top: 125px;
    margin-left: 95px;
    background-image: url("../img/news.png");
  }
  #News_name{
    color: white;
    font-size: 12px;
    padding-top: 65px;
  }
  #Store{
    position: absolute;
    width: 90px;
    height: 90px;
    background-color: #107c10;
    margin-top: 220px;
  }
  #Store_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Store_name{
    color: white;
    font-size: 12px;
  }
  #Money{
    position: absolute;
    margin-left: 95px;
    margin-top: 220px;
    width: 90px;
    height: 90px;
    background-color:#2143af ;
  }
  #Money_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Money_name{
    color: white;
    font-size: 12px;
  }
  #Travel{
    margin-left: 190px;
    margin-top: 220px;
    width: 90px;
    height: 90px;
    position: absolute;
    background-color: #00b1f0;
  }
  #Travel_png{
    width: 50px;
    height: 50px;
    margin-top:10px;
  }
  #Travel_name{
    color: white;
    font-size: 12px;
  }
</style>

<script>

</script>
