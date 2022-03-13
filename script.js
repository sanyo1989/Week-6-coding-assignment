import Deck from './deck.js'

const cardValueMap = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

let playerDeck, computerDeck

function flipCards() {
    
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()


    if (isRoundWinner(playerCard, computerCard)) {
        console.log('WIN!')
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
    }else if (isRoundWinner(computerCard, playerCard)) {
        console.log('lose!')
       computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }else {
        console.log('Draw')
        computerDeck.push(computerCard)
        playerDeck.push(playerCard)
    }
}

startGame()
function startGame() {
const deck = new Deck()
deck.shuffle()

const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

console.log(playerDeck)
console.log(computerDeck)
}

function isRoundWinner(cardOne, cardTwo){
    return cardValueMap [cardOne.value] > cardValueMap[cardTwo.value]
}
flipCards()