/**        <!-- <li class="card-1_li flex_column">
          <h2 class="card-1_li_title title-4">
            Pessoa desenvolvedora front-end - React JS
          </h2>
          <div class="card-1_li_div flex_row gap-1">
            <span class="card-1_li_div_span-1 text-3">Kenzie Academy</span>
            <span class="card-1_li_div_span-1 text-3">Curitiba</span>
          </div>
          <p class="card-1_li_div_p text-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div class="section-1_desktop">
            <span class="card-1_li_div_span-2 text-3">Home Office</span>
            <button class="card-1_li_div_button button border_none button_add_card">Candidatar</button>
          </div>
        </li> --> */

const asideJobs = []

function createMainList(){
    let jsonData = JSON.parse(localStorage.getItem("appliedJobs")) || []
    const mainListFull = document.querySelector('.card-1_ul')
    const asideListFull = document.querySelector('.card-2_ul')   

    jobsData.forEach(job => { 
    const liItens = document.createElement('li') 
    const h2Itens = document.createElement('h2') 
    const divItens = document.createElement('div') 
    const spanItens = document.createElement('span') 
    const spanItens2 = document.createElement('span')  
    const pItens = document.createElement('p') 
    const divItens2 = document.createElement('div')
    const spanItensSup2 = document.createElement('span') 
    const bttItens = document.createElement('button')
    
 
   
    liItens.classList = 'card-1_li flex_column'
    h2Itens.classList = 'card-1_li_title title-4' 
    divItens.classList = 'card-1_li_div flex_row gap-1'
    spanItens.classList = 'card-1_li_div_span-1 text-3' 
    spanItens2.classList = 'card-1_li_div_span-1 text-3'
    pItens.classList = 'card-1_li_div_p text-2'
    divItens2.classList = 'section-1_desktop'
    spanItensSup2.classList = 'card-1_li_div_span-2 text-3'
    bttItens.classList = 'card-1_li_div_button button border_none button_add_card'

    h2Itens.innerText = job.title
    spanItens.innerText = job.enterprise
    spanItens2.innerText = job.location
    pItens.innerText = job.description
    spanItensSup2.innerText = job.modalities[0]
    if(jsonData.filter(element => element.title == job.title).length > 0){
        bttItens.innerText = 'Retirar candidatura'
    }else{
        bttItens.innerText = 'Candidatar'
    }
    

    bttItens.addEventListener('click', function(){ 
        
        if(bttItens.innerText == 'Candidatar'){ 
            asideListFull.innerHTML = '' 
            bttItens.innerText = 'Retirar candidatura'
            let newObject = {
                id:job.id, 
                title:job.title, 
                enterprise:job.enterprise, 
                location:job.location
            }
            asideJobs.push(newObject)
            localStorage.setItem("appliedJobs", JSON.stringify(asideJobs))
            renderAside(asideJobs) 
        }else{
            asideListFull.innerHTML = ''
            bttItens.innerText = 'Candidatar' 
            let findIndexAside = asideJobs.indexOf(job)
            asideJobs.splice(findIndexAside, 1)
            localStorage.setItem("appliedJobs", JSON.stringify(asideJobs))
            renderAside(asideJobs)
        }
    })

    divItens2.append(spanItensSup2, bttItens)
    divItens.append(spanItens, spanItens2)
    liItens.append(h2Itens, divItens, pItens, divItens2)
    mainListFull.appendChild(liItens)
    });
    return mainListFull
}

/**       <!-- <li class="card-2_li flex_column">
          <div class="card-2_div flex_row align_center justify_between">
            <h2 class="card-2_li_title title-5">Pessoa desenvolvedora front-end - React JS</h2>
            <button class="card-2_li_button"><img src="../../assets/img/trash.svg" alt=""></button>
          </div>
          <div class="card-2_div-2 flex_row gap-1">
            <span class="card-2_span text-3">Kenzie Academy</span>
            <span class="card-2_span text-3">Curitiba</span>
          </div>        
        </li> --> */
function createAside(asideList){
    const asideListFull = document.querySelector('.card-2_ul')
    const mainListFull = document.querySelector('.card-1_ul')
    asideList.forEach(job => {
        const asideItens = document.createElement('li')
        const asideItensShow = document.createElement('div')
        const asideItensShowTitle = document.createElement('h2')
        const asideItensShowBtn = document.createElement('button')
        const asideItensShowBtnImg = document.createElement('img')
        const asideItensDivTwo = document.createElement('div')
        const asideItensDivTwoSpanOne = document.createElement('span')
        const asideItensDivTwoSpanTwo = document.createElement('span')

        asideItens.classList = 'card-2_li flex_column'
        asideItensShow.classList = 'card-2_div flex_row align_center justify_between'
        asideItensShowTitle.classList = 'card-2_li_title title-5'
        asideItensShowBtn.classList = 'card-2_li_button'
        asideItensDivTwo.classList = 'card-2_div-2 flex_row gap-1'
        asideItensDivTwoSpanOne.classList = 'card-2_span text-3'
        asideItensDivTwoSpanTwo.classList = 'card-2_span text-3'

        asideItensShowTitle.innerText = job.title
        asideItensDivTwoSpanOne.innerText = job.enterprise
        asideItensDivTwoSpanTwo.innerText = job.location
        asideItensShowBtnImg.src = '../../assets/img/trash.svg'

        asideItensShowBtn.addEventListener('click', function(){
            asideListFull.innerHTML = ''
            mainListFull.innerHTML = ''
            let findIndexAside = asideJobs.indexOf(job)
            asideJobs.splice(findIndexAside, 1)
            localStorage.setItem("appliedJobs", JSON.stringify(asideJobs))
            renderMainList()
            renderAside(asideJobs)    
        })

        asideItensDivTwo.append(asideItensDivTwoSpanOne, asideItensDivTwoSpanTwo)
        asideItensShowBtn.appendChild(asideItensShowBtnImg)
        asideItensShow.append(asideItensShowTitle, asideItensShowBtn)
        asideItens.append(asideItensShow, asideItensDivTwo)
        asideListFull.appendChild(asideItens)
    })
    return asideListFull
}