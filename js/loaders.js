//loaders
//demo: https://connoratherton.com/loaders
var Loader = (function(){
	
	var _instance;
	
	var _init = function(){
		var head = document.getElementsByTagName('HEAD').item(0);
		var style = document.createElement('link');
		style.href = 'css/loaders.less';
		style.rel = 'stylesheet/less';
		style.type = 'text/css';
		head.appendChild(style);
		var options = document.createElement('script');
		options.innerHTML = "less = {globalVars:{color:'" + _config.color + "'}};";
		head.appendChild(options);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'js/less.min.js';
		head.appendChild(script);
	}
	
	var _render = function(){
		var divs= {
			"ball-pulse" : 3,
			"ball-grid-pulse" : 9,
			"ball-clip-rotate" : 1,
			"ball-clip-rotate-pulse" : 2,
			"square-spin" : 1,
			"ball-clip-rotate-multiple" : 2,
			"ball-pulse-rise" : 5,
			"ball-rotate" : 1,
			"cube-transition" : 2,
			"ball-zig-zag" : 2,
			"ball-zig-zag-deflect" : 2,
			"ball-triangle-path" : 3,
			"ball-scale" : 1,
			"line-scale" : 5,
			"line-scale-party" : 4,
			"ball-scale-multiple" : 3,
			"ball-pulse-sync" : 3,
			"ball-beat" : 3,
			"line-scale-pulse-out" : 5,
			"line-scale-pulse-out-rapid" : 5,
			"ball-scale-ripple" : 1,
			"ball-scale-ripple-multiple" : 3,
			"ball-spin-fade-loader" : 8,
			"line-spin-fade-loader" : 8,
			"triangle-skew-spin" : 1,
			"pacman" : 5,
			"ball-grid-beat" : 9,
			"semi-circle-spin" : 1,
		};
		
		var loader = document.createElement("div");
		loader.className = "loader";
		var loader_inner = document.createElement("div");
		loader_inner.className = "loader-inner " + _config.type;
		for(var i = 0; i < divs[_config.type]; i++){
			var div = document.createElement("div");
			loader_inner.appendChild(div);
		}
		loader.appendChild(loader_inner);
		document.body.appendChild(loader);
		_instance = loader;
	}
	
	var _config = {
		type : "ball-pulse",
		color : "#fff"
	}
	
	var _adaptParams = function(config){
		if(config){
			for(var param in _config){
				if(config[param]){
					_config[param] = config[param];
				}
			}
		}
	}
	
	var LoadingFun = function(config){
		_adaptParams(config);
		_init();
		_render();
		_instance.style.display = "none";
	}
	
	LoadingFun.prototype.show = function(){
		_instance.style.display = "flex";
		return this;
	}
	
	LoadingFun.prototype.hide = function(){
		_instance.style.display = "none";
		return this;
	}
	
	return LoadingFun;
})();
