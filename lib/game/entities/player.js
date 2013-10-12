ig.module(
  'game.entities.player'
)
.requires(
  'impact.entity'
)
.defines(function() {

  EntityPlayer = ig.Entity.extend({
    
    size: {x:32, y:32},
    offset: {x:16, y:16},

    maxVel: {x:400, y:400},
    friction: {x:100, y:100},

    type: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,

    animSheet: new ig.AnimationSheet( 'media/player.png', 32, 32 ),
    
    init: function( x, y, settings) {
        
        this.addAnim( 'idle', 1, [0]);
        ig.game.player = this;
	    this.parent( x, y, settings);
	},
	
	update: function() {

        if ( ig.input.state('up') ) {
            this.accel.y = -this.speed;
        } else if ( ig.input.state('down') ) {
            this.accel.y = this.speed;
        } else {
            this.accel.y = 0;
        }

        if ( ig.input.state('left') ) {
            this.accel.x = -this.speed;
        } else if ( ig.input.state('right') ) {
            this.accel.x = this.speed;
        } else {
            this.accel.x = 0;
        }

	    this.parent();
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

  	}
  });
});
