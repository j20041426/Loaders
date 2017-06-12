###Loaders

一个用于显示加载动画的js组件。

所使用的加载动画的css代码来源于[这里](https://connoratherton.com/loaders)。

用法：

	var loader = new Loader({type:'pacman',color:'#cc0000'}).show();
	loader.hide();

因为在加载css时，使用了less预编译功能，所以建议在页面加载初期执行：
	
	var loader = new Loader({type:'pacman',color:'#cc0000'});

然后在需要显示时调用`show()`，需要隐藏时调用`hide()`。
