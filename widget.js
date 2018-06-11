window.widget = {};
widget.createElement = function(elementName,option,children){
	var element = document.createElement(elementName);
	if(option){
		if(option.arrt)option.arrt.forEach(function(name,value){
			element.setAttribute(name, value);
		});
		if(option.event)option.event.forEach(function(index, eventi){
			if(element.addEventListener) {
				element.addEventListener(eventi.type,function (e){eventi.listener.call(element,e,eventi.arg)},false);
	        }else {
	        	element.attachEvent(type, function (e){eventi.listener.call(element,e,eventi.arg)});
	        }
		});
		if(option.style)option.style.forEach(function(styleNam,styleVal){
			element.style[styleNam] = styleVal;
		});
		if(option.classce)option.classce.forEach(function(index,classi){
			element.classList.add(classi);
		});
	}
	if(children)children.forEach(function(index,child){
		if(child.tagName!= undefined && child.tagName!= "undefined"){
			element.appendChild(child);
		}
	});
	return element;
}