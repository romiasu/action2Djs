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

    //this.initial_pose();
    this.run_motion(500);
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
    this.body.rotation = 20;
    this.rarm.rotation = 30;
    this.larm.rotation = -30;
    this.rhand.rotation = -30;
    this.lhand.rotation = -30;
    this.rfoot.rotation = 90;
    this.lfoot.rotation = 30;
    this.rleg.rotation = -0;
    this.lleg.rotation = -10;
    this.head.rotation = 0;
  },

  run_motion: function(tm) {
    this.body.rotation = 20;
    this.rarm.rotation = 40;
    this.larm.rotation = -40;
    this.rhand.rotation = -40;
    this.lhand.rotation = -90;
    this.rleg.rotation = -80;
    this.lleg.rotation = 10;
    this.rfoot.rotation = 90;
    this.lfoot.rotation = 30;

    this.rarm.tweener.clear()
    .to({rotation: -50}, tm)
    .to({rotation: 50}, tm)
    .setLoop(true);
    this.rhand.tweener.clear()
    .to({rotation: -90}, tm)
    .to({rotation: -40}, tm)
    .setLoop(true);
    this.larm.tweener.clear()
    .to({rotation: 50}, tm)
    .to({rotation: -50}, tm)
    .setLoop(true);
    this.lhand.tweener.clear()
    .to({rotation: -40}, tm)
    .to({rotation: -90}, tm)
    .setLoop(true);
    this.rleg.tweener.clear()
    .to({rotation: 10}, tm)
    .to({rotation: -80}, tm)
    .setLoop(true);
    this.rfoot.tweener.clear()
    .to({rotation: 30}, tm)
    .to({rotation: 90}, tm)
    .setLoop(true);
    this.lleg.tweener.clear()
    .to({rotation: -80}, tm)
    .to({rotation: 10}, tm)
    .setLoop(true);
    this.lfoot.tweener.clear()
    .to({rotation: 90}, tm)
    .to({rotation: 30}, tm)
    .setLoop(true);
  },

});
