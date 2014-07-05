/*
 * @author Jelon Cheung
 * @description 跑马灯特效
 * @copyright http://jelon.in
 * @date 2014/7/4
 *
 */

/* 
 * 定义跑马灯对象
 * 
 */
var marquee = function() {
	var $$ = function(id) {
		return document.getElementById(id);
	};
	
	var	item = 1,	//内容块顺序
		list = 0,	//数据顺序
		height = $$('container').offsetHeight,	//容器高度
		len = data.length,
		timer = null;

	var	init = function() {
		$$('item_0').style.webkitTransitionDuration = '0ms';
		$$('item_0').style.transitionDuration = '0ms';
		$$('item_0').style.top = '-60px';
		$$('item_1').style.webkitTransitionDuration = '0ms';
		$$('item_1').style.transitionDuration = '0ms';	
		$$('item_1').style.top = '0';
		$$('item_2').style.webkitTransitionDuration = '0ms';
		$$('item_2').style.transitionDuration = '0ms';
		$$('item_2').style.top = '60px';

		changeItem();
	};

	//切换内容
	var	changeItem = function() {
		
		$$('item_' + item).innerHTML = '<strong>' + data[list].title + '</strong>' + '&nbsp;' + data[list].content;
		
		if (len > 1) {
			//过渡时间为1s
			$$('item_' + item).style.webkitTransitionDuration = '1000ms';
			$$('item_' + item).style.transitionDuration = '1000ms';
			$$('item_' + item).style.top = '0';

			$$('item_' + (item + 1)%3).style.webkitTransitionDuration = '1000ms';
			$$('item_' + (item + 1)%3).style.transitionDuration = '1000ms';
			$$('item_' + (item + 1)%3).style.top = -height + 'px';
			$$('item_' + (item + 2)%3).style.webkitTransitionDuration = '0ms';
			$$('item_' + (item + 2)%3).style.transitionDuration = '0ms';
			$$('item_' + (item + 2)%3).style.top = height + 'px';

			timer = setTimeout(function() {
				item--;
				if (item < 0) item = 2;
				list++;
				if (list > len - 1) list = 0;

				changeItem();
			}, 4000);
		}
	}

	return {init: init}
}(); 

/*
 * 执行跑马灯
 */
marquee.init();