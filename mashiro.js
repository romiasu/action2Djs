var mashiro_data = {
  name: "mashiro",
  head: {
    image: './images/mashiro/face.png',
    origin: [0.5, 1.0],
    size: [300, 300],
    position: [-20, -210],
    rotation: 0,
  },
  body: {
    image: './images/mashiro/body.png',
    origin: [0.5, 0.5],
    size: [550, 550],
    position: [0, 0],
    rotation: 0,
  },
  rarm: {
    image: './images/mashiro/rarm.png',
    origin: [0.5, 0.0],
    size: [80, 180],
    position: [-80, -220],
    rotation: 0,
  },
  larm: {
    image: './images/mashiro/larm.png',
    origin: [0.5, 0.0],
    size: [80, 180],
    position: [80, -220],
    rotation: 0,
  },
  rhand: {
    image: './images/mashiro/rhand.png',
    origin: [0.5, 0.0],
    size: [120, 250],
    position: [0, 130],
    rotation: 0,
  },
  lhand: {
    image: './images/mashiro/lhand.png',
    origin: [0.5, 0.0],
    size: [120, 250],
    position: [0, 130],
    rotation: 0,
  },
  rleg: {
    image: './images/mashiro/rleg.png',
    origin: [0.5, 0.0],
    size: [120, 220],
    position: [-30, 50],
    rotation: 0,
  },
  lleg: {
    image: './images/mashiro/lleg.png',
    origin: [0.5, 0.0],
    size: [100, 250],
    position: [30, 50],
    rotation: 0,
  },
  rfoot: {
    image: './images/mashiro/rfoot.png',
    origin: [0.5, 0.0],
    size: [120, 350],
    position: [0, 130],
    rotation: 0,
  },
  lfoot: {
    image: './images/mashiro/lfoot.png',
    origin: [0.5, 0.0],
    size: [200, 350],
    position: [30, 130],
    rotation: 0,
  },
};
  
function addToASSET(data) {
  for (var link of ["body", "head", "rarm", "rhand", "larm", "lhand", "rleg", "rfoot", "lleg", "lfoot"]) {
    ASSETS["image"][data["name"] + "_" + link] = (data[link])["image"];
  }
}

function genBoneFromData(data) {
  return DisplayElement().setPosition(data['position'][0], data['position'][1]).setRotation(data['rotation']);
}

phina.define('HumanBody', {
  superClass: 'DisplayElement',
  init: function(all_body_data) {
    this.superInit();
    this.name = all_body_data['name'];
    this.body_data = all_body_data;
    this.head = genBoneFromData(all_body_data['head']);
    this.body = genBoneFromData(all_body_data['body']);
    this.rarm = genBoneFromData(all_body_data['rarm']);
    this.larm = genBoneFromData(all_body_data['larm']);
    this.rhand = genBoneFromData(all_body_data['rhand']);
    this.lhand = genBoneFromData(all_body_data['lhand']);
    this.rleg = genBoneFromData(all_body_data['rleg']);
    this.lleg = genBoneFromData(all_body_data['lleg']);
    this.rfoot = genBoneFromData(all_body_data['rfoot']);
    this.lfoot = genBoneFromData(all_body_data['lfoot']);

    this.link_list = {
      head: this.head,
      body: this.body,
      rarm: this.rarm,
      rhand: this.rhand,
      larm: this.larm,
      lhand: this.lhand,
      rleg: this.rleg,
      rfoot: this.rfoot,
      lleg: this.lleg,
      lfoot: this.lfoot,
    };

    this.body.addChildTo(this);
    this.larm.addChildTo(this.body);
    this.gen_image_body('larm');
    this.lhand.addChildTo(this.larm);
    this.gen_image_body('lhand');
    this.head.addChildTo(this.body);
    this.gen_image_body('head');
    this.lleg.addChildTo(this.body);
    this.gen_image_body('lleg');
    this.lfoot.addChildTo(this.lleg);
    this.gen_image_body('lfoot');
    this.rleg.addChildTo(this.body);
    this.gen_image_body('rleg');
    this.rfoot.addChildTo(this.rleg);
    this.gen_image_body('rfoot');
    this.gen_image_body('body');
    this.rarm.addChildTo(this.body);
    this.gen_image_body('rarm');
    this.rhand.addChildTo(this.rarm);
    this.gen_image_body('rhand');

    this.initial_pose();
  },

  gen_debug_body: function(name) {
    RectangleShape({
      width: this.body_data[name]['size'][0],
      height: this.body_data[name]['size'][1],
      fill: 'blue',
    }).addChildTo(this.link_list[name])
    .setOrigin(this.body_data[name]['origin'][0], this.body_data[name]['origin'][1]);
  },

  gen_image_body: function(name) {
    console.log(name);
    this.link_list[name].image = Sprite(this.name + "_" + name).addChildTo(this.link_list[name])
                                .setOrigin(this.body_data[name]['origin'][0], this.body_data[name]['origin'][1]);
  },

  initial_pose: function() {
    this.rarm.rotation = 20;
    this.larm.rotation = -20;
    this.rhand.rotation = -20;
    this.lhand.rotation = -20;
    this.rfoot.rotation = 10;
    this.lfoot.rotation = 40;
    this.rleg.rotation = 10;
    this.lleg.rotation = -30;
    this.head.rotation = 40;
  },

});
