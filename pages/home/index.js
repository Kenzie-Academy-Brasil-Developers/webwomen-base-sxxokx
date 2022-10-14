/* Desenvolva sua lógica aqui... */
let id = 0
/*
function favoritsCards(){
    const buttonFavorit = document.querySelectorAll('.candidatar')
    const secFavorit = document.getElementById('favorit')
    
    buttonFavorit.addEventLinester('click', (event) => {
        event.preventDefault()
        const favcards = cardsFavort(jobsData)
        secFavorit.appendChild(favcards)

    })
    
}
favoritsCards()*/


function showFavCards(data){
    const buttonFav = document.querySelectorAll('.candidatar')
   
    
    buttonFav.forEach((button, index)=> {
        buttonFav.addEventLinester('click', (event) =>{
            const itensVaga = document.querySelectorAll('.favorit')
            const itensJson = JSON.stringify(data[index])
            if(button.innerText == "Remover Candidatura"){
                itensVaga.remove()
                localStorage.removeItem('itens', itensJson)
                button.innerText = 'Candidatar'
            }else{
                itensVaga.classList.toggle('cardVagas')
                button.innerText = 'Remover Candidatura'
                localStorage.setItem('itens', itensJson)
            }

    })

    })
}
showFavCards(jobsData)