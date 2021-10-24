const list=document.querySelector(".item-list");
const input = document.querySelector('#input-val');

const addbtn= document.querySelector(".btn");

addbtn.addEventListener('click',addtodo);



var size=99999;


window.onload=function(){
    size=size-localStorage.length;
    for(let key in localStorage)
    {
        if(localStorage.getItem(key))
            rendertodo(localStorage.getItem(key),key)   
    }
}
function addtodo()
{
    let val=input.value;
    if(val!='')
    {
        localStorage.setItem(size,val);
        size--;
     rendertodo(val,size+1);   
    }
}
function rendertodo(val,currsize)
{
    var templi=document.createElement('li');
        templi.id=currsize;
        var delbtn = document.createElement('span');
        delbtn.classList.add('libtn');
        delbtn.innerHTML+=' <img class="donebtn" src="done.jpg" height="25px">  <img  class ="dltbtn" src="delete.jpg" height="25px">';

        
        let txt=document.createTextNode(val);
        templi.appendChild(txt);
        templi.appendChild(delbtn);
        list.appendChild(templi);
        templi.addEventListener('click',update);
}
function update(e)
{
    if(e.target.classList=='dltbtn')
    {
        this.style.display='none';
        let idname= this.id
        localStorage.removeItem(idname)
    }
}
