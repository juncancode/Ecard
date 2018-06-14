// Ecard Script

var facts = [
    "Independence Day is celebrated every year on July 4 in the United States", //0
    "Independence Day is the day when the United States was freed from the control of Great Britain in 1776",//1
    'The phrase "Fourth of July" is not referred in the same way as "Independence Day" It is important to formally refer it as "Independence Day"',//2
    "The United States was formed by 13 colonies: New Hampshire, Massachusetts Bay, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia", //3
    'The first flag of United States – which was known as "Betsy Ross" -- had 13 stars as America was made up of 13 colonies along the east coast',//4
    "3 presidents have passed away on July 4. John Adams (second president) passed away in 1826, which was the 50th anniversary of Independence Day",//5
    "3 presidents have passed away on July 4. Thomas Jefferson (third president) passed away in 1826, which was the 50th anniversary of Independence Day",//6
    "3 presidents have passed away on July 4. James Monroe (fifth president) passed away in 1831",//7
    "The eldest daughter of former president Barack Obama, Malia Obama, was born on July 4th, Independence Day",//8
    "Fireworks are one of the main events on Independence Day",//9
    "An average of 155 million hotdogs are consumed on Independence Day",//10
    "Independence Day was actually declared on July 2 as the majority signees signed on July 2",//11
    "$ Independence Day is a paid holiday $",//12
    "The first Independence Day on July 8, 1776 took place in Philadelphia",//13
]
// Clouds 
var cloud_one = document.getElementById("cloud1");
var cloud_two = document.getElementById("cloud2");
var cloud_three = document.getElementById("cloud3");

// Factbox Intro
var factbox = document.getElementById("factbox");

factbox.innerHTML = "Click an object you desire to reveal the fact";

// Audio Control
var playContainer = document.getElementById("audioplay_container");
var audioMuteContainer = document.getElementById("audiomute_container");
var audioPlayButton = document.getElementById("audiobutton");


function playAudio(){
    audioPlayButton.src = "sound/TheStarSpangledBanner.mp3";
    audioPlayButton.play();
    firework_sound.play();
    audioPlayButton.volume = 0.5;
    audioMuteContainer.style.display = "block";
    playContainer.style.display = "none";
    
}

function muteAudio(){
    audioPlayButton.pause();
    firework_sound.pause();
    audioMuteContainer.style.display = "none";
    playContainer.style.display = "block";
}

// Intro scene

var flagUp = document.getElementById("intro");
var title = document.getElementById("title");

document.getElementById("title").addEventListener("click",function(){
    //flagUp.style.bottom = "100%"; 
    flagUp.style.transform = "translateY(-100%)";
    title.style.opacity = "0";
    title.style.visibility = "hidden";
    factbox.style.opacity = 1;
    audioPlayButton.src = "sound/TheStarSpangledBanner.mp3";
    audioPlayButton.play();
    audioPlayButton.volume = 0.5;
});

// Fact 1: Map + 13 Colonies
var map = document.getElementById("map");

document.getElementById("flag1").addEventListener("click",function(){
    map.style.display = "block";
    factbox.innerHTML = "<br>" + facts[3];
    factbox.style.transition = "0s";
    factbox.style.bottom = "50px";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg"; 
});

// Option to turn off the map
$('#off').click(function(){
    $("#map").hide();
  $('iframe').attr('src', $('iframe').attr('src'));
});

// Fact 2
document.getElementById("flag2").addEventListener("click",function(){
    factbox.innerHTML = facts[11];
    factbox.style.bottom = "100px";  
    factbox.style.transition = "0s";  
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg"; 
});

// Fact 3
document.getElementById("flag3").addEventListener("click",function(){
    factbox.innerHTML = facts[2];   
    factbox.style.bottom = "50px";  
    factbox.style.transition = "0s";    

    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";     
});

// Fact 4 
document.getElementById("flag4").addEventListener("click",function(){
    factbox.innerHTML = facts[12];
    factbox.style.bottom = "100px";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg"; 
});

// Fact 5 
document.getElementById("flag5").addEventListener("click",function(){
   factbox.innerHTML = facts[13]; 
   factbox.style.bottom = "70px";
   factbox.style.transition = "0s";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";     
});

// Presidents 
var JA = document.getElementById("Jadams");
var halo_audio = document.getElementById("halo");
var halos = document.getElementById("halos");
// Johan Adams
JA.addEventListener("click",function(){

    factbox.innerHTML = facts[5];
    factbox.style.bottom = "50px";  
    factbox.style.transition = "0s";  
    
    JA.style.transitionDuration = "3s";
    JA.style.filter = "brightness(50%)";
    JA.style.animationPlayState = "paused";
    JA.style.webkitAnimation ="paused";
    
    halo_audio.src = "sound/halo.wav";
    halo_audio.play();
    halo_audio.volume = 1;
    
    var halo = document.createElement("IMG");
    console.log('halo');
    halo.src = 'SVG/halo.svg';
    halo.id = "Newhalo";
    halo.style.width = "100px";
    halo.style.position = "absolute";
    halo.style.bottom = "50%";
    halo.style.left = "10%";
    halo.style.animation = "halo 2s infinite";
    halos.appendChild(halo);
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";     
});

// Thomas Jefferson
var TJ = document.getElementById("Tjefferson");
var halos2 = document.getElementById("halos2");

TJ.addEventListener("click",function(){
    
    factbox.innerHTML = facts[6];
    factbox.style.bottom = "50px";  
    factbox.style.transition = "0s";  
    
    TJ.style.transitionDuration = "3s";
    TJ.style.filter = "brightness(50%)";
    TJ.style.animationPlayState = "paused";
    TJ.style.webkitAnimation ="paused";  
    
    halo_audio.src = "sound/halo.wav";
    halo_audio.play();
    halo_audio.volume = 1;
    
    var halo = document.createElement("IMG");
    console.log('halo');
    halo.src = 'SVG/halo.svg';
    halo.id = "Newhalo";
    halo.style.width = "100px";
    halo.style.position = "absolute";
    halo.style.animation = "halo 2s infinite";
    halos2.appendChild(halo);
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg"; 
});

// James Mornoue 
var JM = document.getElementById("Jmornoe");
var halos3 = document.getElementById("halos3");

JM.addEventListener("click",function(){
    
    factbox.innerHTML = facts[7];
    factbox.style.bottom = "70px";
    factbox.style.transition = "0s";
    
    JM.style.transitionDuration = "3s";
    JM.style.filter = "brightness(50%)";
    JM.style.animationPlayState = "paused";
    JM.style.webkitAnimation ="paused";  
    
    halo_audio.src = "sound/halo.wav";
    halo_audio.play();
    halo_audio.volume = 1;
    
    var halo = document.createElement("IMG");
    console.log('halo');
    halo.src = 'SVG/halo.svg';
    halo.id = "Newhalo";
    halo.style.width = "100px";
    halo.style.position = "absolute";
    halo.style.animation = "halo 2s infinite";
    halos3.appendChild(halo);
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg"; 
});

// Malia Obama
var malia = document.getElementById("malia");
var bd_audio = document.getElementById("bd");

malia.addEventListener("click",function(){
    
    console.log('malia');
    factbox.innerHTML = facts[8]; 
    factbox.style.bottom = "50px";
    factbox.style.transition = "0s";
    
    malia.style.top = "20%";
    malia.style.transitionDuration = "1s";
    
    bd_audio.src = "sound/birthday.mp3";
    bd_audio.play();
    bd_audio.volume = "1";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg"; 
    
});

// Wooden British sign
var sign = document.getElementById("british");
var sign_audio = document.getElementById("fall");
var NumClick2 = 0;

sign.addEventListener("click",function(){
    NumClick2 ++;
    if (NumClick2 == 1) {
    factbox.innerHTML = facts[1];
    factbox.style.bottom = "50px";
    factbox.style.transition = "0s";
    
    sign.style.transform = "rotateZ(-70deg)";
    sign.style.transformOrigin = "bottom center";
    sign.style.transitionDuration = "1s";
    
    sign_audio.src = "sound/falling.wav";
    sign_audio.play();
    sign_audio.volume = "1";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";      
    } else {
        
    sign_audio.pause();
    factbox.innerHTML = facts[1];
    factbox.style.bottom = "50px";
    factbox.style.transition = "0s";    
     
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";      
    }
});

// Betsy Ross Flag
var Betsy = document.getElementById("betsy");

Betsy.addEventListener("click",function(){
    
    factbox.innerHTML = facts[4];
    factbox.style.bottom = "50px";
    factbox.style.transition = "0s";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";  
});

// Calendar
var calendar = document.getElementById("calendar");

calendar.addEventListener("click",function(){

    factbox.innerHTML = facts[0];
    factbox.style.bottom = "70px";
    factbox.style.transition = "0s";    
    calendar.style.transform = "rotateX(-50deg)";
    calendar.style.transformOrigin = "bottom center";
    
    cloud_one.src = "SVG/cloud1.svg";
    cloud_two.src = "SVG/cloud2.svg"; 
    cloud_three.src = "SVG/cloud3.svg";    
});

// Hotdog
var hotdog = document.getElementById("hotdog");
var everywhere = document.getElementById("everywhere");
var NumClick4 = 0;
hotdog.addEventListener("click",function(){
    
    NumClick4++;
    if(NumClick4 == 1) {
    
    factbox.innerHTML = facts[10];
    factbox.style.bottom = "70px";
    factbox.style.transition = "0s";

    cloud_one.src = "SVG/hotdog.svg";
    cloud_two.src = "SVG/hotdog.svg"; 
    cloud_three.src = "SVG/hotdog.svg";
    
    } else {
    
    factbox.innerHTML = facts[10];
    factbox.style.bottom = "70px";
    factbox.style.transition = "0s";
        
    cloud_one.src = "SVG/hotdog.svg";
    cloud_two.src = "SVG/hotdog.svg"; 
    cloud_three.src = "SVG/hotdog.svg";    
    
    }
});

// Monument 
var monument = document.getElementById("monument");
var clouds = document.getElementById("clouds");
var firework_sound = document.getElementById("firework");
var sky = document.getElementById("sky");
// monument at night  
var topleft = document.querySelector(".cls-2"); 
var bottomleft = document.querySelector(".cls-3");
var topright = document.querySelector(".cls-4");
var bottomright = document.querySelector(".cls-5");
var midleft = document.querySelector(".cls-6");
var midright = document.querySelector(".cls-7");
var NumClick3 = 0; 

monument.addEventListener("click",function(){
    NumClick3++;
    if (NumClick3 == 1) {
    factbox.innerHTML = facts[9];
    factbox.style.bottom = "70px";
    factbox.style.transition = "0s";
    document.sky_n.src = "SVG/night.svg";
    clouds.style.display = "none"; // hide the clouds
    
    topleft.style.fill = "#484849";
    topleft.style.transition = "0.5s";
    topright.style.fill = "#464647";
    topright.style.transition = "0.5s";
    bottomright.style.fill = "#827971";
    bottomright.style.transition = "0.5s";
    bottomleft.style.fill = "#818182";
    bottomleft.style.transition  = "0.5s";
    midleft.style.fill = "#423E3A";
    midleft.style.transition = "0.5s";
    midright.style.fill = "#4C4743";
    midright.style.transition = "0.5s";
    
    //create fireworks
    var firework_B = document.createElement("IMG");
    console.log("firework_B");
    firework_B.src = "SVG/fireworks_bottom.svg";
    firework_B.id = "firework_begin";
    firework_B.style.position = "absolute";
    firework_B.style.bottom = "100%";
    firework_B.style.left = "100px";
    firework_B.style.animation = "fireStart 2s ease-in-out 1s infinite";
    sky.appendChild(firework_B);
    
    //create second fireworks
    var firework_F = document.createElement("IMG");
    console.log("firework_F");
    firework_F.src = "SVG/fireworks_top.svg";
    firework_F.id = "firework_final";
    firework_F.style.position = "absolute";
    firework_F.style.bottom = "70%";
    firework_F.style.left = "100px";   
    firework_F.style.animation = "fireEnd 3s ease-in-out infinite";
    sky.appendChild(firework_F);
    
    firework_sound.src = "sound/fireworks.wav";
    firework_sound.play();
    } else {
    factbox.innerHTML = facts[9];
    factbox.style.bottom = "70px";
    factbox.style.transition = "0s";     
    }
});