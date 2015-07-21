window.onload = function() {
  // create canvas element
  var canvas = document.createElement('canvas');
  canvas.width = '800';
  canvas.height = '800';
  canvas.id = 'canvas';
  document.body.appendChild(canvas);
  // get 2d context
  var context = canvas.getContext('2d');

  // RANDOM COLOR GENERATION
  this.randColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // CREATING A RECTANGLE
  // ---------------------------------------------------------------------
  this.drawRect = function() {
    context.fillStyle = randColor();
    // you can use the following methods rect, strokeRect, fillRect, clearRect
    context.fillRect(Math.random() * 800, Math.random() * 800, Math.random() * 200, Math.random() * 200);
  };
  // drawRect();

  // CREATING LINES
  // ---------------------------------------------------------------------
  this.drawLine = function() {
    context.lineWidth = Math.random() * 10;
    context.strokeStyle = randColor();
    context.lineCap = 'round'; // butt, square, round
    context.lineJoin = 'miter'; // miter, bevel, round
    context.miterLimit = 1; // 10 is the default
    context.beginPath();
    context.moveTo(Math.random() * 800, Math.random() * 800);
    context.lineTo(Math.random() * 800, Math.random() * 800);
    context.lineTo(Math.random() * 800, Math.random() * 800);
    context.lineTo(Math.random() * 800, Math.random() * 800);
    // you don't need to manually close the path, you can use close path
    //context.lineTo(100, 100);
    context.closePath();
    // you can use fill or stroke
    // context.fill();
    context.stroke();
  };

  // CREATING CURVED LINES
  // ---------------------------------------------------------------------
  // SIN WAVE
  this.drawSinWave = function() {
    context.beginPath();
    context.strokeStyle=randColor();
    var sinWaveHeight = Math.random() * 400;
    for(var x = 1; x <= 800; x++) {
      var y = sinWaveHeight + Math.sin(x * 0.01) * sinWaveHeight;
      context.lineTo(x, y);
    }
    context.stroke();
  };

  // setup draw point funciton to show various points on the canvas
  this.drawPoint = function(p) {
    context.fillRect(p.x - 4, p.y - 4, 8, 8);
  };

  // QUADRATIC CURVE
  this.drawQuadCurve = function() {
    var colorVal = randColor();
    // set up points for curves
    var p0 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    },
    p1 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    },
    p2 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    };
    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    context.strokeStyle = colorVal;
    context.stroke();
    // show cuve points
    context.fillStyle = colorVal;
    // show the curve points
    // drawPoint(p0);
    // drawPoint(p1);
    // drawPoint(p2);
  };

  // BEZIER CURVE
  this.drawBezierCurve = function() {
    var colorVal = randColor();
    // set up points for curves
    var p0 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    },
    p1 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    },
    p2 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    },
    p3 = {
      x: Math.random() * 800,
      y: Math.random() * 800
    };
    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    context.strokeStyle = colorVal;
    context.stroke();
    context.fillStyle = colorVal;
    // show the curve points
    // drawPoint(p0);
    // drawPoint(p1);
    // drawPoint(p2);
    // drawPoint(p3);
  };

  // CREATING CIRCLES
  // ---------------------------------------------------------------------
  this.drawCircle = function() {
    context.beginPath();
    context.arc(Math.random() * 800, Math.random() * 800, 100, 0, Math.PI * 2, false);
    context.strokeStyle = randColor();
    context.stroke();
  };

  this.drawArc = function() {
    var reverseArc = false;
    if(Math.random() > 0.5) {
      reverseArc = true;
    }
    context.beginPath();
    context.arc(Math.random() * 800, Math.random() * 800, 100, 0, Math.random() * (Math.PI * 2), reverseArc);
    context.strokeStyle = randColor();
    context.stroke();
  };

  this.drawGradient = function() {
    // var gradient = context.createLinearGradient(); // createRadialGradient
    // gradient.addColorStop();
    // context.fillStyle = gradient;
  };

  // FUN WITH A LOOP!! OH YEAH!
  for(var i = 0; i < 5; i++) {
    drawRect();
    drawLine();
    drawSinWave();
    drawPoint({x: Math.random() * 800, y: Math.random() * 800});
    drawQuadCurve();
    drawBezierCurve();
    drawCircle();
    drawArc();
  }
};
