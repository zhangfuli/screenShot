function screenShots(setting){
	var webPage = require('webpage');
	var page = webPage.create();

	page.viewportSize = { width: setting.width, height: setting.height };
	page.open(setting.address, function start(status) {
	  page.render(setting.name, {format: setting.formats, quality: setting.quality});
	  phantom.exit();
	});
}
var setting = {
	'address': "http://www.github.com/zhangfuli",       //想要截图的地址
	'formats' : "png",						//图片保存格式
	'name' : "myGithub.jpg",				//图片的名字
	'quality': 100	,						//图片的质量    0--100
	'width' : 1920,							//设置图片宽度
	'height' : 1080							//设置图片长度
							
}
screenShots(setting);
