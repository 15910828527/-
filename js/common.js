
var scene,
    camera,
    renderer,
    container,
    aspect,
    foot,
    fov,
    plane,
    far,
    mouseX,
    mouseY,
    windowHalfX,
    windowHalfY,
    geometry,
    starStuff,
    materialOptions,
    autoWidth,
    stars;
    autoWidth = window.innerWidth;
    console.log(autoWidth);
    init();
    animate();
    $(window).resize(function(){
      foot = document.getElementById('foot');
      foot.removeChild(container);
      autoWidth = window.innerWidth;
      init();
      animate();
    });    
function init() {
  container = document.createElement('div');
  container.classList.add("foot-bac");
  foot = document.getElementById('foot');
  foot.appendChild(container);
  mouseX = 0;
  mouseY = 0;

  aspect = autoWidth / 280;
  fov = 40;
  plane = 1;
  far = 800;

  windowHalfX = autoWidth / 2;
  windowHalfY = 280;

  camera = new THREE.PerspectiveCamera(
    fov,
    aspect,
    plane,
    far
  );

  camera.position.z = far / 2;

  scene = new THREE.Scene({ antialias: true });
  scene.fog = new THREE.FogExp2(0x1b1b1b, 0.0001);

  starForge();

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(autoWidth-50, 330);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  container.appendChild(renderer.domElement);

  document.addEventListener('mousemove', onMouseMove, false);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.03;
  camera.position.y += (-mouseY - camera.position.y) * 0.03;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}

function starForge() {
  var amount = 4000;
  geometry = new THREE.SphereGeometry(1000, 100, 50);

  materialOptions = {
    color: new THREE.Color(0xffffff),
    size: 1.1,
    transparency: true,
    opacity: 0.8
  };

  starStuff = new THREE.PointsMaterial(materialOptions);


  for (var i = 0; i < amount; i++) {
    var item = new THREE.Vector3();
    item.x = Math.random() * 2000 - 1000;
    item.y = Math.random() * 2000 - 1000;
    item.z = Math.random() * 2000 - 1000;

    geometry.vertices.push(item);
  }

  stars = new THREE.PointCloud(geometry, starStuff);
  scene.add(stars);
}

function onMouseMove(e) {
  mouseX = e.clientX - windowHalfX;
  mouseY = e.clientY - windowHalfY;
}


$(window).load(function () {
    $(".mobile-inner-header-icon").click(function(){
      $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
      $(".mobile-inner-nav").slideToggle(250);
    });
    $(".mobile-inner-nav a").each(function( index ) {
      $( this ).css({'animation-delay': (index/10)+'s'});
    });
  });