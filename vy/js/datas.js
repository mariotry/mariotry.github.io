var datas=[
            {
                id:0,
                pid:-1,
                name:'微云',
                type:'folder'
            },
            {
                id:1,
                pid:0,
                name:'聊天软件',
                type:'folder'
            },
             {
                id:2,
                pid:1,
                name:'QQ',
                type:'folder'
            },
             {
                id:3,
                pid:1,
                name:'微信',
                type:'folder'
            },
            {
                id:4,
                pid:0,
                name:'music',
                type:'folder'
            },
            {
                id:5,
                pid:0,
                name:'照片',
                type:'folder'
            },
            {
                id:6,
                pid:0,
                name:'书籍',
                type:'folder'
            },
            {
                id:7,
                pid:2,
                name:'903675859',
                type:'folder'
            },
            {
                id:8,
                pid:4,
                name:'好久不见-陈奕迅',
                type:'folder'
            }
        ];


        // 获取子级
        
        function getChildren(id){
            var arr=[];
            for(var i=0;i<datas.length;i++){
                if(datas[i].pid==id){
                    arr.push(datas[i]);
                }
            }
            return arr;
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
        console.log() ;
        function getParents(id){
            var arr=[];
            var parent=getParent(id);
            if(parent){
                arr.push(parent);
                arr=arr.concat(getParents(parent.id))
            }
            return arr;
        }


        // 渲染结构
        function back(){
            var str=tree (-1);
            return str;
        }
        
        
        function tree (ID){
            var children=getChildren(ID);
            var html='<ul>';
            children.forEach(function(item){
                
                var num=getChildren(item.id).length;
                var str=getParents(item.id).length;
                if(num){
                    var className='ico-block';
                }else{
                    var className='no-ico'
                }
                html+=
                `
                <li class='step-content '>
                    <div style='padding-left:${str*20}px'>
                        <span class='${className}' ></span>
                        <span class='step-ico2'></span>
                        <span class='step-text'>${item.name}</span>
                    </div>
                    ${tree(item.id)}
                </li>
                `

            })
                
            html+='</ul>'
            
            return html;
            
        }