window.onload=function(){
    var titleIco = document.getElementById('titleIco');
    var lis = titleIco.getElementsByTagName('li');
    var content = document.getElementById('content');
    var folder = content.getElementsByClassName('folder');
    var checkbox = content.getElementsByTagName('span');
    var checkboxAll = document.getElementById('checkbox');
    var prompt = document.getElementById('window');
    var cancel = document.getElementById('cancel');
    var name = document.getElementById('name');
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    var addText = document.getElementById('addText');
    var add = document.getElementById('add');
    var currentPid = 0;
    var elements=[];
    //内容content....的高度随着浏览器的大小变化而变化
    var title = document.getElementById('title');
    var navigation = document.getElementById('navigation');
    var contentWrap =document.getElementById('content-wrap');
    var step = document.getElementById('step');
    var right = document.getElementById('right');
    var left = document.getElementById('left');
    var contentPack = document.getElementById('content-pack');
    var navRight = document.getElementById('nav-right');
    var frame = document.getElementById('frame');

    changeHeight();
    function changeHeight(){
        var value=window.innerHeight-title.offsetHeight-navigation.offsetHeight;
        var documentWidth = document.documentElement.clientWidth;
        contentWrap.style.height=value+'px'
        right.style.width=documentWidth-left.offsetWidth-10+'px';
        navRight.style.width=documentWidth-222+'px';
        contentPack.style.width=right.offsetWidth-step.offsetWidth+'px';
    }
    window.onresize=changeHeight;
    //根据datas生成文件夹
    function generate(){
        var arr=[];
        for(var i=0;i<datas.length;i++){
            if(datas[i].pid==0){
                arr.push(datas[i]);
            }
        }
       
        for(var i=0;i<arr.length;i++){
            createFile(arr[i].name,arr[i]);
        }
    }
    generate();

    // 新建文件夹
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var promptWidth = prompt.offsetWidth;
    var promptHeight = prompt.offsetHeight;
    console.log(lis[0])
    lis[0].onclick=function(){
        console.log('我');
        prompt.style.display="block";
        var promptWidth = prompt.offsetWidth;
        var promptHeight = prompt.offsetHeight;
        
        prompt.style.left=(windowWidth-promptWidth)/2+'px';
        prompt.style.top=(windowHeight-promptHeight)/2+'px';
    }
    prompt.onmousedown=function(e){
        var a=e.clientX;
        var b=e.clientY;
        var c=a-prompt.offsetLeft;
        var d=b-prompt.offsetTop;
        document.onmousemove=function(e){
            console.log(b,prompt.offsetTop+30);
            prompt.style.top=e.clientY-d+'px';
            prompt.style.left=e.clientX-c+'px';
        }
       document.onmouseup=function(){
            document.onmousemove=null;
          
       }
      
    }
    cancel.onclick=function(){
        prompt.style.display='none';
    }
    no.onclick=function(){
        prompt.style.display='none';
    }
    yes.onclick=function(){
        var name1 = name.value; 
        datas.push({
            id:getMaxId(datas)+1,
            pid:currentPid,
            name:name1,
            type:'folder'
        })
        console.log(datas);
        createFile(name1,datas[datas.length-1]);
        name.value='';
        prompt.style.display='none';
    }
    // 面包屑导航点击事件
    add.onclick=function(e){
        console.log('点击');
        if(e.target.tagName.toLowerCase()=='a'){
            currentPid=e.target.getAttribute('fileId');
            render(getChildren(currentPid));
            showBread();
        }
    }
    
    // 阶梯菜单功能
    
    step.innerHTML=back();
    // tree (childs,treeId);
// 函数大全

    // 获取datas中最大ID值；
   function getMaxId (arr){
        var maxId=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i].id>maxId){
                maxId=arr[i].id;
            }
        }
        return maxId;
   }

   // 新建文件夹
    function createFile(who,data){
        var div1 = document.createElement('div');
        div1.fileId = data.id;
        div1.className='folder';
        var div2 = document.createElement('div');
        div2.className='folder-pic';
        var span = document.createElement('span');
        
        div2.appendChild(span);
        div1.appendChild(div2);
        var input = document.createElement('input');
        input.className='text';
        input.value=who;
        div1.appendChild(input);
        content.appendChild(div1);
        elements.push(div1);
        // 鼠标移入移除div
        
        div1.onmouseover=function(){
           if(this.checked){
                this.className='folder-checked';
                span.className='folder-checked-checkbox';
           }else{
                this.className='folder-hover';
                span.className='folder-hover-checkbox';
           }
        }
        div1.onmouseout=function(){
            if(this.checked){
                this.className='folder-checked';
                span.className='folder-checked-checkbox';
            }else{
                this.className='folder';
                span.className='';
            }
        }


        // 单选
        span.onclick=function(e){
            
            e.cancelBubble=true;
            setState(div1,!div1.checked,this,'folder-hover');
            if(getCheckedNumber().length==elements.length){
                checkboxAll.checked=true;
            }else{
                checkboxAll.checked=false;
            }

            // 重命名
            lis[1].onclick=function(e){
                console.log(this);
                e.cancelBubble=true;
                for(var i=0;i<elements.length;i++){
                    if(elements[i].checked){
                        if(getCheckedNumber().length==1){
                            elements[i].children[1].focus();
                        }else{
                            alert('请指定一个文件夹');
                            break;
                        }
                        
                    }
                }
                // 点击其他地方，选中地方为未选中
                document.onclick=function(){
                    var str='';
                    for(var i=0;i<div.length;i++){
                        if(div[i].className!=='folder'){
                            div[i].className='folder';
                            div[i].children[0].children[0].className='';
                            div[i].checked=false;
                            str=div[i].fileId;
                           
                            for(var i=0;i<datas.length;i++){
                                if(datas[i].id==str){
                                    datas[i].name=div[i].children[1].value;
                                }
                            }
                        }
                    }
                    showBread();
                }
            }

            // 重命名2
            input.onclick=function(e){
                e.cancelBubble=true;
            } 
            // 删除文件夹
            var div = content.children;
            console.log(div);
            var d=[];
            lis[3].onclick=function(){
                for(var i=0;i<div.length;i++){
                    if(div[i].className=='folder-checked'){
                        d.push(div[i].fileId);
                        var p=getInfo(div[i].fileId).pid;
                    }
                }
                console.log(d);
                for(var i=0;i<datas.length;i++){
                    for(var j=0;j<d.length;j++){
                        if(datas[i].id==d[j]){
                            datas.splice(index(datas[i].id),1)
                            content.innerHTML='';
                            generate();
                        }
                    }
                }
            }
            
        }

        
        //全选
        checkboxAll.onclick=function(){
            var span = content.getElementsByTagName('span');
           for(var i=0;i<elements.length;i++){

            setState(elements[i],this.checked,span[i],'folder',' ');
            console.log(elements[i].children[0].children)
           }
           
        }
        // 框选加碰撞检测
        // document.onmousemove=function(){
        //     return false;
        // }
        // contentPack.onmousedown=function(e){
        //     var x=e.clientX;
        //     var y=e.clientY;
        //     frame.style.display='block';
        //     frame.style.left=e.clientX+'px';
        //     frame.style.top=e.clientY+'px';
        //     contentPack.onmousemove=function(e){
        //         e.cancelBubble=true;
        //         var value1=Math.abs(e.clientX-x);
        //         var value2=Math.abs(e.clientY-y);
        //         if(value1+frame.offsetLeft>contentPack.innerWidth){
        //             value1=contentPack.innerWidth-frame.offsetLeft;
        //         }
        //         if(value2+frame.offsetTop>contentPack.innerHeight){
        //             value2=contentPack.innerHeight-frame.offsetTop;
        //         }
        //         frame.style.width=value1+'px';
        //         frame.style.height=value2+'px';
        //         if(e.clientX<x){
        //             var xL=x-frame.offsetWidth;
        //             if(xL<contentPack.offsetLeft){
        //                 xL=contentPack.offsetLeft
        //             }
        //             frame.style.left=xL+'px';
        //         }
        //         if(e.clientY<y){
        //             var yT=y-frame.offsetHeight;
        //             if(yT<contentPack.offsetTop){
        //                 yT=contentPack.offsetTop;
        //             }
        //             frame.style.top=yT+'px';
        //         }
        //         return false;
        //     }
        //     document.onmouseup=function(){
        //         contentPack.onmousemove=null;
        //         frame.style.display='none';
        //         frame.style.width=frame.style.height=0;
        //     }
        // }

        // 点击div进一级
        div1.onclick=function(){
            console.log(this.fileId);
            currentPid=this.fileId;
            render(getChildren(this.fileId));
            showBread();
        }
    }

    // 获取已经选中的文件夹数量
    function getCheckedNumber(){
        var arr=[];
        for(var i=0;i<elements.length;i++){
            if(elements[i].checked){
                arr.push(elements[i]);
            }
        }
        return arr;
    }

    // 设置文件夹状态
    function setState(file,state,who,className,className2){
        var className = className || 'folder';
        var className2 = className2 ||'folder-hover-checkbox';
        file.checked=state;
       
        if(state){
            who.className='folder-checked-checkbox';
            file.className='folder-checked';
        }else{
            who.className=className2;
            file.className=className;
        }
    }

    // 根据ID获取信息
    function getInfo(id){
        
        for(var i=0;i<datas.length;i++){
            if(datas[i].id==id){
                return datas[i];
            }
        }
    }
    // 获取父级
    
    function getParent(id){
        var info=getInfo(id);
        if(info){
            return getInfo(info.pid);
        }
    }
    // 获取全部父级
    
    function getParents(id){
        var arr=[];
        var parent=getParent(id);
        if(parent){
            arr.push(parent);
            arr=arr.concat(getParents(parent.id))
        }
        return arr;
    }
    
    // 获取所有子级
    function getChildrenAll(id,level){
        var arr=[];
        var level = level || 0;
        var children=getChildren(id);
        for(var i=0;i<children.length;i++){
            children[i].level=level;
            arr.push(children[i]);
            arr=arr.concat(getChildrenAll(children[i].id,level+1));
        }
        return arr;
    }
    
    // 点击生成子级菜单
    function render(renderData){
        content.innerHTML='';
        elements=[];
        for(var i=0;i<renderData.length;i++){
            createFile(renderData[i].name,renderData[i]);
        }
    }
    // 获取下标值
    function index(id){
        var n=0;
        for(var i=0;i<datas.length;i++){
            if(datas[i].id==id){
                break;
            }else{
                n++;
            }
        }
        return n;
    }

    // 面包屑导航
    function showBread(){
        var parentList=getParents(currentPid);
        
        if(getInfo(currentPid)){
            parentList.unshift(getInfo(currentPid));
        }
        parentList.pop();
        console.log(parentList);
        var html='';
        for(var i=parentList.length-1;i>=0;i--){
            html+='> <a fileId='+parentList[i].id+' href="javascript:;">'+parentList[i].name+'</a>';
        }
        addText.innerHTML=html;
    }
}
