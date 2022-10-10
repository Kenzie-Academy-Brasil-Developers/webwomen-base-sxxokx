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

function creatCard(element){
    const secCard = document.createElement('section')
    const sec2Card = document.createElement('section')
    const h3Card = document.createElement('h3')
    const divCard = document.createElement('div')
    const empCard = document.createElement('p')
    const citCard = document.createElement('p')
    const descCard = document.createElement('p')
    const div2Card = document.createElement('div')
    const bttTipCard = document.createElement('button')
    const candidCard = document.createElement('button')

    secCard.classList = 'back-itens marg-bottom'

    sec2Card.classList = 'flex colum gap2'

    h3Card.innerText = element.title

    divCard.classList = 'flex gap2'

    empCard.innerText = element.enterprise
    citCard.innerText = element.location

    descCard.innerText = element.descrition

    div2Card.classList = 'flex between marg-top'

    bttTipCard.classList.add('tipo-vaga')
    bttTipCard.innerText = element.modalities[0]

    candidCard.classList.add('candidatar')
    candidCard.innerText = 'Candidatar'
    candidCard.id = 'butt-candidatar'

    divCard.append(empCard, citCard)
    div2Card.append(bttTipCard, candidCard)
    sec2Card.append(h3Card, divCard, descCard)
    secCard.append(sec2Card, div2Card)
    
    return secCard
}