var $container = $('.bola');
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
var scene = new THREE.Scene();
// 
// https://dribbble.com/shots/3967265-FAQ/attachments/906583
//

scene.add(camera);
renderer.setSize(300,300);
$container.append(renderer.domElement);

///////////////////////////////////////////////

// Camera
camera.position.z = 200;

// Material
var pinkMat = new THREE.MeshPhongMaterial({
  color      :  new THREE.Color("rgb(226,35,213)"),
  emissive   :  new THREE.Color("rgb(0,0,0)"),
  specular   :  new THREE.Color("rgb(255,155,255)"),
  shininess  :  100,
  shading    :  THREE.FlatShading,
  transparent: 1,
  opacity    : 1
});

var L1 = new THREE.PointLight( 0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight( 0xffffff, 0.8);
L2.position.z = 200;
L2.position.y = 400;
L2.position.x = -100;
scene.add(L2);

// IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75,1), pinkMat);
Ico.rotation.z = 0.5;
scene.add(Ico);

function update(){
   Ico.rotation.x+=2/100;
   Ico.rotation.y+=2/100;
}

// Render
function render() {
  requestAnimationFrame(render);			
  renderer.render(scene, camera);	
  update();
}

render();

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Zatrzymaj film w tle";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Zatrzymaj film w tle";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Wznów";
  }
})

function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var a2 = today.getMonth()	
    var d = today.getDate();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var n = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    n = checkTime(n);
    
    var weekday = new Array(7);
    weekday[0] = "Niedziela";
    weekday[1] = "Poniedziałek";
    weekday[2] = "Wtorek";
    weekday[3] = "Środa";
    weekday[4] = "Czwartek";
    weekday[5] = "Piątek";
    weekday[6] = "Sobota";
    var a1 = weekday[today.getDay()];

    
    document.getElementById('time').innerHTML =
    a1+"  " + d +"-"+ a2 + "-" +y+ "   " + h + ":" + m + ":" + s + ":" + n;
    var t = setTimeout(startTime, 1);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function my1() {
    document.getElementById("browser").innerHTML =
navigator.userAgent;
}

function my2() {
document.getElementById("sys").innerHTML = navigator.platform;
}

function my3() {
document.getElementById("lang").innerHTML =
navigator.language;
}

function my4() {
    
    var tak1 = new Array(2);
    tak1[true] = "tak";
    tak1[false] = "nie";
    var a11 = tak1[navigator.cookieEnabled];
    
    document.getElementById("cias").innerHTML = a11;
    
    
}

function my5() {

    
    var tak1 = new Array(2);
    tak1[true] = "tak";
    tak1[false] = "nie";
    var a11 = tak1[navigator.javaEnabled()];
    
    document.getElementById("acjav").innerHTML = a11;
}

function my6() {
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("sizebrow");
x.innerHTML = "Rozmiar okna przeglądarki to: " + w + "x" + h + ".";
    
}



