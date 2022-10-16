function createAsideEmpty(){ 
    const asideList = document.querySelector('.card-2_ul')
    const asideItens = document.createElement('div') 
    const infoAside = document.createElement('p')

    infoAside.innerText = 'Você ainda não aplicou para nenhuma vaga!'
    asideItens.appendChild(infoAside)
    asideList.appendChild(asideItens)
    return asideList
}

function renderMainList(){
    const mainSection = document.querySelector('#sectionOne')
    return mainSection.appendChild(createMainList())
}


function renderAside(list){
    const asideSection = document.querySelector('.card-2')
    if(list.length == 0){
        return asideSection.appendChild(createAsideEmpty())
    }else{
        return asideSection.appendChild(createAside(list))
    }
}

function getJsonItem(){
    let getItem = JSON.parse(localStorage.getItem("appliedJobs")) || []
    getItem.forEach(element => asideJobs.push(element))
    return asideJobs
}

renderAside(getJsonItem())
renderMainList()