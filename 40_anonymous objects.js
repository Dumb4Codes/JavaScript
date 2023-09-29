//anonymous objects = objects without a name
//                    Not dierectly refrenced 
//                    Less syntax. No need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("A", "Hearts"),
             new Card("A", "Spades"),
             new Card("A", "Diamonds"),
             new Card("A", "Clubs"),
             new Card("2", "Hearts"),
             new Card("2", "Spades"),
             new Card("2", "Diamonds"),
             new Card("2", "Clubs")];

             print(cards);
function print(card){
    console.log(card[0].value, card[3].suit);
}