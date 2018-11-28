const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()

    .then(result => {
      const contenedor = document.getElementsByClassName('characters-container')
      result.forEach(element => {
        var div = document.createElement("div")
        div.className ="character-info"
        div.innerHTML += `
          <div class="name">id:  ${element.id} </div>
          <div class="name">Name:  ${element.name} </div>
          <div class="occupation">Occupation:  ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
      `
      contenedor[0].firstElementChild.style.display = "none"
      contenedor[0].append(div)
     
      });
      console.log(result)
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
   
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
