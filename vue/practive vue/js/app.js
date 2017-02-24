/*
* @Author: Marte
* @Date:   2017-02-21 17:43:53
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-23 17:16:56
*/

'use strict';
var store = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}
// var list = [
//     {
//         title:'吃饭睡觉打豆豆',
//         isChecked:false,
//     },
//     {
//         title:'好好学习',
//         isChecked:true
//     }
// ];
var list = store.fetch('vueClass');
var filter = {
        all:function(list){
            return list;
        },
        unfinished:function(list){
            return list.filter(function(item){
                return !item.isChecked
            })
        },
        finished:function(){
            return list.filter(function(item){
                return item.isChecked
            })
        }
    };
var vm = new Vue({
    el:'.content',
    data:{
        list:list,
        todo:'',
        edtorTodo:'',
        beforeTitle:'',
        hashStr:'all'
    },
    watch:{
        // handler:function(){
        //     list:{
        //         store.save('vueClass',this.list)
        //     }
        // }
        list:{
            handler:function(){
                store.save('vueClass',this.list);
            },
            deep:true
        }
    },
    computed:{
        todoLength:function(){
            return this.list.filter(function(item){
                 return !item.isChecked
            }).length;
        },
        already:function(){
            return filter[this.hashStr]?filter[this.hashStr](list):list;
        }
    },
    methods:{
        addTodo(ev){
            console.log('push')
            this.list.push({
                title:this.todo,
                isChecked:false
            })
            this.todo='';
        },
        deleteData(todo){
            console.log('dele')
            var num = this.list.indexOf(todo);

            this.list.splice(num,1);
        },
        enterChange(todo){
            console.log(todo)
            this.edtorTodo = todo;
            this.beforeTitle = todo.title;
        },
        edtorOk(todo){
            this.edtorTodo=''
        },
        cancelEdit(todo){
            this.edtorTodo='';
            todo.title = this.beforeTitle;
        }
    },
    directives:{
        'focus':{
            update(el,binding){
                console.log(el,binding)
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
})
function watchHashChange(){
    var hash = window.location.hash.slice(1);
    console.log(hash);
    vm.hashStr = hash;
}
watchHashChange();
window.addEventListener('hashchange',watchHashChange);