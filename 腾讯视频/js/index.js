$(function(){
	function dingshiqi(){
		f=setInterval(function(){
			if(index==$(".play").length-1){
				index=0;
				$(".play").css("opacity",0);
				$(".play").eq(index).css("opacity",0.8);
			}
			else{
				index++;
				$(".play").css("opacity",0);
				$(".play").eq(index).css("opacity",0.8);
			}
		},4000)
	}
	//标记当前图片索引
	var index=0;
	var f;
	dingshiqi();
	$(".button").click(function(){
		clearInterval(f)
		var indexx=$(this).index();
		index=indexx;
		$(".play").css("opacity",0);
		$(".play").eq(index).css("opacity",0.8);
		dingshiqi();
	})
})


// 定义一个函数用来创建和插入弹幕
function createDanmu(text) {
  // 创建一个span元素
  var danmu = document.createElement("span");
  // 设置其文本内容为参数值
  danmu.innerText = text;
  // 设置其类名为danmu
  danmu.className = "danmu";

  // 设置其随机的高度
  danmu.style.top = Math.random() * (container.clientHeight - danmu.clientHeight) + "px";
  // 设置其随机的颜色
  danmu.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
  // 将span元素插入到容器元素中
  container.appendChild(danmu);
  // 使用CSS动画来让span元素从右向左移动
  danmu.style.animation = "move " + (5 + Math.random() * 5) + "s linear infinite";
}

// 获取容器元素
var container = document.getElementById("container");
// 定义一个数组用来存放一些弹幕内容
var texts = ["Hello", "常华森常华森","大家好", "弹幕", "吴磊wulei", "哈哈哈"];
// 定义一个定时器，每隔一秒创建并插入一条弹幕
setInterval(function() {
  // 随机选择一个弹幕内容
  var text = texts[Math.floor(Math.random() * texts.length)];
  // 调用函数创建并插入弹幕
  createDanmu(text);
},1000);