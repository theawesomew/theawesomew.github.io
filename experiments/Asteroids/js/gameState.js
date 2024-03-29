var AsteroidSize = 8;

var GameState = State.extend({

	init: function (game) {
		this._super(game);

		this.canvasWidth = game.canvas.ctx.width;
		this.canvasHeight = game.canvas.ctx.height;

		this.ship = new Ship(Points.SHIP, Points.FLAMES, 2, this.canvasWidth/2, this.canvasHeight/2);
		this.ship.MaxX = this.canvasWidth;
		this.ship.MaxY = this.canvasHeight;

		this.lives = 3;
		this.lifepolygon = new Polygon(Points.SHIP);
		this.lifepolygon.scale(1.5);
		this.lifepolygon.rotate(-Math.PI/2);

		this.testLetter = new Polygon(Points.LETTERS[0]);

		this.gameOver = true;

		this.score = 0;

		this.lvl = 0;

		this.generateLvl();	
	},

	generateLvl: function () {
		var num = Math.round(10 * Math.atan(this.lvl / 25)) + 3;

		console.log(num);

		this.ship.x = this.canvasWidth/2;
		this.ship.y = this.canvasHeight/2;

		this.bullets = [];
		this.asteroids = [];

		for (var i = 0; i < num; i++) {
			var n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1));

			var x = 0, y = 0;
			if(Math.random() > 0.5) {
				x = Math.random() * this.canvasWidth;
			} else {
				y = Math.random() * this.canvasHeight;
			}

			var astr = new Asteroid(Points.ASTEROIDS[n], AsteroidSize, x, y);
			astr.MaxX  = this.canvasWidth;
			astr.MaxY  = this.canvasHeight;

			this.asteroids.push(astr);
		}
	},

	handleInputs: function (input) {
		if (!this.ship.visible) {
			if (input.isPressed('spacebar')) {
				this.ship.visible = true;
			}
			return;
		}

		if (input.isDown('right')) {
			this.ship.rotate(0.06);
		}
		
		if (input.isDown('left')) {
			this.ship.rotate(-0.06);
		}

		if (input.isDown('up')) {
			this.ship.addVel();
		}

		if (input.isPressed('spacebar')) {
			this.bullets.push(this.ship.shoot());		
		}
	},

	update: function () {
		for (var i = 0, len = this.asteroids.length; i < len; i++) {
			var a = this.asteroids[i];
			a.update();

			if (this.ship.collide(a)) {
				this.ship.x = this.canvasWidth / 2;
				this.ship.y = this.canvasHeight / 2;

				this.ship.vel = {
					x: 0,
					y: 0,
				}

				this.lives--;
				if (this.lives <= 0) {
					this.gameOver = true;
				}
				this.ship.visible = false;
			}

			for (var j = 0, len2 = this.bullets.length; j < len2; j++) {
				var b = this.bullets[j];

				if (a.hasPoint(b.x, b.y)) {
					this.bullets.splice(j, 1);
					len2--;
					j--;

					if (a.size > AsteroidSize/4) {
						for (var k = 0; k < 2; k++) {
							var n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1));

							var astr = new Asteroid(Points.ASTEROIDS[n], a.size/2, a.x, a.y);
							astr.MaxX  = this.canvasWidth;
							astr.MaxY  = this.canvasHeight;

							this.asteroids.push(astr);
							len++;
						}
					}
					this.asteroids.splice(i, 1);
					len--;
					i--;
				}
			}
		} 

		for (var i = 0, len = this.bullets.length; i < len; i++) {
			var b = this.bullets[i]
			b.update();

			if (b.shallRemove) {
				this.bullets.splice(i, 1);
				len--;
				i--;
			}
		}

		this.ship.update();

		if (this.asteroids.length == 0) {
			this.lvl++;
			this.generateLvl();
		}
	},

	render: function (ctx) {
		ctx.clearAll();

		for (var i = 0; i < this.lives; i++) {
			ctx.drawPolygon(this.lifepolygon, 40 + 15 * i, 50);
		}

		for (var i = 0, len = this.asteroids.length; i < len; i++) {
			this.asteroids[i].draw(ctx);
		}

		for (var i = 0, len = this.bullets.length; i < len; i++) {
			this.bullets[i].draw(ctx);
		}
		this.ship.draw(ctx);
	}
});