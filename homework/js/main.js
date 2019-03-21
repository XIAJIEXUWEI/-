        	var getUl=document.getElementsByTagName('ul');
        	let options=['成都','上海','北京','深圳','杭州','厦门','苏州','武汉','重庆'];
	        //渲染模板
	        (function(){
	        	for(let n=0;n<options.length;n++){
	        		var list = document.createElement('li');
	        		console.log(list)
	        		list.setAttribute('pname',options[n]);
	        		list.innerHTML=options[n];
	        		getUl[0].appendChild(list);
	        	}
	        })();
        	var li=document.getElementsByTagName('li');
        	var text=document.getElementsByTagName('input')[0];
        	var img=document.getElementsByTagName('img');
        	img[0].style.transform='rotate(90deg)'
        	//设置第一个li上边框
        	li[0].style.borderTop="1px solid darkgray";
        	//实现类似select选择功能
        	window.onload=function(){
	        	for(let x=0;x<li.length;x++){
	        		li[x].onclick=function(){
	        			text.value=this.innerText;
	        			getUl[0].style.display="none";
	        			img[0].style.transform='rotate(90deg)';
	        		};
	        	}
	        }
        	//实现检索功能
        	function search(){
        		var arr=text.value;
        		for(var i=0;i<li.length;i++)
        		{
        			
        			li[i].style.display="none";
        			if(arr==""){//判断输入框是否为空
        				li[i].style.display="block";
        				var innr=li[i].innerText;
	        			li[i].innerHTML=li[i].innerText;
	        			img[0].style.transform='rotate(0deg)';
	        			getUl[0].style.display="block";
        			}
        			else{
        				//判断输入框输入的内容是否有相匹配的内容
	        			if(li[i].getAttribute('pname').indexOf(arr)!=-1)
	        			{
	        				getUl[0].style.display="block";
	        				li[i].style.display="block";
	        				var innr=li[i].innerText;
	        				li[i].innerHTML=li[i].innerText;
	        				//实现红字
	        				li[i].innerHTML=li[i].innerHTML.replace(RegExp(arr,'g'),'<span>'+arr+'</span>');
	        				img[0].style.transform='rotate(0deg)';
	        			}
	        		}
        		}
        	}
        	//在输入框输入时的监听事件
	        text.oninput=function(){
	        	search();
	        }
	        //点击图片实现下拉功能
	        img[0].onclick=function(){
	        	if(getUl[0].style.display=="none"){
	        		getUl[0].style.display="block";
	        		img[0].style.transform='rotate(0deg)';
	        	}
	        	else if(getUl[0].style.display=="block"){
	        		getUl[0].style.display="none";
	        		img[0].style.transform='rotate(90deg)';
	        	}
	        }
	        
