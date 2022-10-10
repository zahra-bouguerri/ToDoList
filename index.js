let ques=document.getElementById("ques");
let submit=document.getElementById("submit");

let list;
//verifier si local storage vide ou no
if(localStorage.todolist!=null){
    list=JSON.parse(localStorage.todolist);
   }else{
   list=[];
         }

 //cree un objet
submit.onclick=function(){
   let task=ques.value;
   if(!task){
      alert("list vide");
   }else if(task){

    let newElem ={
        ques:task,  
    }
list.push(newElem);
//add les elemnt to local storage de nom todolist
localStorage.setItem('todolist' , JSON.stringify(list));
clear();
read();
   }
}

   //clear donne
function clear(){
   ques.value="";
}

//read donne
function read(){
  let table='';
  for(i=0;i<list.length;i++){

   table+=`
  <input id="text" type="text" placeholder="${list[i].ques}" readonly >
   <div class="button">
    <input onclick="edit(${i})" id="edit" type="submit" value="Edit">
    <input onclick="Delete(${i})" id="delete" type="submit" value="Delete">
   </div>`
  }
  //mettre le style table dans container
  document.getElementById("container").innerHTML=table;
//verifier si il y a des elelents dans to do list 
//si oui cree un button delete all sinon non
let deleteAll;
  if(list.length>0){
deleteAll=`<input onclick="deleteAll()" id="dl" type="submit" value="Delete All"></input>`
  }else{
   deleteAll="";
  }
  document.getElementById("deleteAll").innerHTML=deleteAll;
}
read();

//delete element
function Delete(i){
 list.splice(i,1);
 //met les donne dans local storage apres deleting un element
 localStorage.todolist=JSON.stringify(list);
 //read la liste apres delete un element 
 read();
}

//delete all elements
function deleteAll(){
   //splice(0):supprimer les element from index 0 to length
   list.splice(0);
   //supprimer les element de local storage
   localStorage.clear();
   //read la list apres deleting
   read();
}

//modifier les donnee

function edit(i){

 ques.value=list[i].ques;
 Delete(i);
}




