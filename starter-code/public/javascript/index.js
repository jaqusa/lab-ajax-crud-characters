const charactersAPI = new APIHandler("http://localhost:8000")


function Push(element){
  const contenedor = document.getElementsByClassName('characters-container')

  var div = document.createElement("div")
  div.className ="character-info"
  div.innerHTML += `
    <div class="name">id:  ${element.id} </div>
    <div class="name">Name:  ${element.name} </div>
    <div class="occupation">Occupation:  ${element.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
    <div class="weapon">Weapon: ${element.weapon}</div>
`


var info = document.querySelector('.character-info:nth-child('+element.id+')')
info.style.display = "initial"
//contenedor[0](:nth-child:).style.display = "none"
contenedor[0].append(div)
}



$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()

    .then(result => {
      result.forEach(element => {
            Push(element)

      });
      console.log(result)
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(2)
    .then(result =>{
        Push(result)
    }) 
  
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
