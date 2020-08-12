document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {   name: 'adobe',
            img: 'images/Adobe.png'
        },
        {   name: 'amazon',
            img: 'images/amazon.png'
        },
        {   name: 'apple',
            img: 'images/apple.png'
        },
        {   name: 'chrome',
            img: 'images/chrome.png'
        },
        {   name: 'hamburger',
            img: 'images/hamburger.png'
        },
        {   name: 'gmail',
            img: 'images/gmail.png'
        },
        {   name: 'steam',
            img: 'images/steam.png'
        },
        {   name: 'gplay',
            img: 'images/gplay.png'
        }
        
        
    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector ('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []


function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/watermelon.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)

    }
}

    function checkForMatch(){

        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/watermelon.png')
            cards[optionTwoId].setAttribute('src', 'images/watermelon.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = "Congratulations you won!"
        }



    

}

function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}




createBoard()

})