/* JavaScript Document
*
*	jcwblog.com javascript
*
*	Copyright © 2014 jcwblog.com - All rights reserved, Edit By jcwblog.com
* 
*	js 无缝滚动特效
*
*/
function gun(oUl,oLi,oImg,speed){
	var oInput = document.getElementsByTagName('a');
	oInput[0].onclick = function(){
		speed = -1;
	};
	oInput[1].onclick = function(){
		speed = 1;
	};
		oUl.style.width = (parseInt(getStyle(oLi[0],'width'))+2*parseInt(getStyle(oLi[0],'marginLeft')))*oLi.length+'px';
		var timer = setInterval(function(){
		if(parseInt(getStyle(oUl,'marginLeft'))>0){
			oUl.style.marginLeft = -parseInt(getStyle(oUl,'width'))/2 +'px';
				}
		if((-2*parseInt(getStyle(oUl,'marginLeft')))> parseInt(getStyle(oUl,'width'))){
			oUl.style.margin =0;
			}
		oUl.style.marginLeft =parseInt(getStyle(oUl,'marginLeft'))+speed +'px';	
		},10);
		
	for(var i=0;i<oLi.length;i++){
		oLi[i].index = i;
		oLi[i].onmouseover = function(){
			clearInterval(timer);
			changeStyle(oImg[this.index],-8);
		}
		oLi[i].onmouseout = function(){
			changeStyle(oImg[this.index],8);
			gun(oUl,oLi,oImg,speed);
		}
	}

}
function changeStyle(obj,speed){
	obj.style.width = parseInt(getStyle(obj,'width')) +speed+'px';
	obj.style.height = parseInt(getStyle(obj,'height')) +speed+'px';
	if(speed>0)
		obj.style.border = '0px solid #000000';
	else
		obj.style.border = '4px solid #000000';
}
function getStyle(obj,attr){
	if(obj.currentStyle)
		return obj.currentStyle[attr];	//适用于 IE 浏览器
	else
		return getComputedStyle(obj,false)[attr];	//适用于 火狐 chrome 浏览器
}
