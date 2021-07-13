phina.globalize();

var ASSETS = {
  image: {
  },
};

var SCREEN_WIDTH = 960;
var SCREEN_HEIGHT = 540;

phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    HumanBody(mashiro_data).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center()).setScale(0.3, 0.3);
    console.log("title");
  },
  onpointend: function() {
    this.exit();
  },
});

phina.define('MainScene', {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    console.log("main");
  },
});

phina.main(function() {
  addToASSET(mashiro_data);
  var app = GameApp({
    query: '#mycanvas',
    fit: false,
    fps: 60,
    assets: ASSETS,
    startLabel: 'title',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  });
  console.log(ASSETS);
  app.run();
});
