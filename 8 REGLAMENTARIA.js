(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2074,1116);


(lib.x = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("Ak4EpQgwgzAmhBQAMgVATgUICbidQhOgig8gxQh4hiBZhJQA9gxB7BZQA9AtAyA3IAkgxQAug3AogkQA0gvAugJQA3gLA1AoQAvAignBCQgNAUgUAVIi1C4IB5ByQAxAvgHAtQgFAgglAiQgYAWgngDIgjgIIifieIiLCFQgSAXgcANQgTAJgRAAQgkAAgfghg");
	this.shape.setTransform(34.3645,33.0108);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// Capa_1 copia copia copia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("Ak4EpQgwgzAmhBQAMgVATgUICbidQhOgig8gxQh4hiBZhJQA9gxB7BZQA9AtAyA3IAkgxQAug3AogkQA0gvAugJQA3gLA1AoQAvAignBCQgNAUgUAVIi1C4IB5ByQAxAvgHAtQgFAgglAiQgYAWgngDIgjgIIifieIiLCFQgSAXgcANQgTAJgRAAQgkAAgfghg");
	this.shape_1.setTransform(34.4401,33.0859,0.8032,0.8032);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa_1 copia copia
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("Ak4EpQgwgzAmhBQAMgVATgUICbidQhOgig8gxQh4hiBZhJQA9gxB7BZQA9AtAyA3IAkgxQAug3AogkQA0gvAugJQA3gLA1AoQAvAignBCQgNAUgUAVIi1C4IB5ByQAxAvgHAtQgFAgglAiQgYAWgngDIgjgIIifieIiLCFQgSAXgcANQgTAJgRAAQgkAAgfghg");
	this.shape_2.setTransform(34.4401,33.0859,0.8032,0.8032);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,66);


// stage content:
(lib._8REGLAMENTARIA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		function fl_ClickToGoToWebPage() {
			window.open("6 TIPOS DE SÑALES DE TRANSITO.html", "_self");
		}
		var parent = this
		parent.stop()
		
		const sonidoX = new Audio("sounds/X.mp3");
		this.X.addEventListener("click",() => {
			sonidoX.play();
			setTimeout(() => {
				window.open("6 TIPOS DE SÑALES DE TRANSITO.html", "_self");
			}, "700");	
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Botón
	this.X = new lib.x();
	this.X.name = "X";
	this.X.setTransform(78.65,68.7,1,1,0,0,0,34.4,33);
	new cjs.ButtonHelper(this.X, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.X).wait(1));

	// fondo
	this.instance = new lib.Mapadebits7();
	this.instance.setTransform(-74,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(886,524,1114,576);
// library properties:
lib.properties = {
	id: '75E456F9A02FDD4290F8F27F32017C89',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits7.png?1698940253525", id:"Mapadebits7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['75E456F9A02FDD4290F8F27F32017C89'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;