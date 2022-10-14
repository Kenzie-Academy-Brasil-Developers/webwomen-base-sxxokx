/**
        <section class="back-itens marg-bottom">
            <section class="flex colum gap2 ">
              <h3>Pessoa desenvolvedora front-end - React</h3>
              <div class="flex gap2">
                <p>Kenzie</p>
                <p>Curitiba</p>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </section>
            <div class="flex between marg-top">
                <button class="tipo-vaga">Home office</button>
                <button id="butt-candidatar" class="candidatar">Candidatar</button>
            </div>
        </section>
 */

function render(arr){
  const ulCard =  document.getElementById('vagas-tela')

  ulCard.innerHTML = ''

  arr.forEach(element => {
  const card = creatCard(element)

  ulCard.appendChild(card)
  })
}


function creatCard(element){
  const secCard = document.createElement('li')
  const sec2Card = document.createElement('section')
  const h3Card = document.createElement('h3')
  const divCard = document.createElement('div')
  const empCard = document.createElement('p')
  const citCard = document.createElement('p')
  const descCard = document.createElement('p')
  const div2Card = document.createElement('div')
  const bttTipCard = document.createElement('button')
  const candidCard = document.createElement('button')

  secCard.classList = 'back-itens  marg-bottom'
  

  sec2Card.classList = 'flex colum gap2'

  h3Card.innerText = element.title

  divCard.classList = 'flex gap2'

  empCard.innerText = element.enterprise
  citCard.innerText = element.location

  descCard.innerText = element.descrition

  div2Card.classList = 'flex between marg-top'

  bttTipCard.classList.add('tipo-vaga')
  bttTipCard.innerText = element.modalities

  candidCard.classList.add('candidatar')
  candidCard.innerText = 'Candidatar'
  candidCard.id = element.id

  divCard.append(empCard, citCard)
  div2Card.append(bttTipCard, candidCard)
  sec2Card.append(h3Card, divCard, descCard)
  secCard.append(sec2Card, div2Card)

  
 return secCard
}


        
render(jobsData)


/*cards favoritos
        <section class="novos-selec start">
            <div class="flex between gap">
              <h3>Pessoa desenvolvedora front-end - React JS</h3>
              <button class="trash"><img src="./assets/img/trash.svg" alt=""></button>
            </div>
            <div class="flex gap2 marg-top">
              <p>Kenzie</p>
              <p>Curitiba</p>
            </div>
        </section>*/

function cardsFavort(element){
    const cfSection = document.createElement('section')
    const cfDiv = document.createElement('div')
    const cfh3 = document.createElement('h3')
    const cfButton = document.createElement('button')
    const cfDiv2 = document.createElement('div')
    const cfCurso = document.createElement('p')
    const cfCit = document.createElement('p')

    cfSection.classList = 'novos-selec cardVagas start'
    cfDiv.classList = 'flex between gap'
    cfh3.innerText = element.title

    cfButton.classList.add('trash')
    cfButton.src = "./assets/img/trash.svg"

    cfDiv2.classList = 'flex gap2 marg-top'
    cfCurso.innerText = element.enterprise
    cfCit.innerText = element.location

    cfDiv.append(cfh3, cfButton)
    cfDiv2.append(cfCurso, cfCit)
    cfSection.append(cfDiv, cfDiv2)

    return cfSection
}


