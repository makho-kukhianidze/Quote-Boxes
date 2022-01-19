// JavaScript Arrays - Start.
let quotes2 = [ // მასივი , რომელსაც გადაცემული აქვს ობიექტები, რომელშიც ასევე არის ანდაზები.
    {
        'author': 'Stephen King', // quote's Author.
        'quote': '”Get busy living or get busy dying.”', // Author's quote.
        'img': 'a' // Author's photo.
    },
    {
        'author': 'Thomas A. Edison', // quote's Author.
        'quote': '”Many of life’s failures are people who did not realize how close they were to success when they gave up.”',// Author's quote.
        'img': 'b' // Author's photo.// Author's photo.
    },
    {
        'author': 'Steve Jobs', // quote's Author.
        'quote': '”Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.”',// Author's quote.
        'img': 'c' // Author's photo.
    },
    {
        'author': 'Ernest Hemingway', // quote's Author.
        'quote': '”In order to write about life first you must live it.”',// Author's quote.
        'img': 'd' // Author's photo.
    },
    {
        'author': 'Socrates', // quote's Author.
        'quote': '”The unexamined life is not worth living.”',// Author's quote.
        'img': 'e' // Author's photo.
    },
    {
        'author': 'Albert Einstein', // quote's Author.
        'quote': '”Life is like riding a bicycle. To keep your balance, you must keep moving.”',// Author's quote.
        'img': 'f' // Author's photo.
    }
];
// JavaScript Arrays - End.

// Variable block - Start.
let quoteText = document.querySelector('.quoteText'); // quote Text -  Paragraph.
let authorName = document.querySelector('.authorName'); // author Name -  Paragraph.
let imageDIV = document.querySelector('.img-container'); // image's div.
let button = document.querySelector('button'); // buttob change random quote.
authorName.style.fontWeight = '900'; // author Name -  Paragraph style.
authorName.style.margin = '12px'; // author Name -  Paragraph style.
// Variable block - End.

// button event - Start.
button.addEventListener('click', RandomQuote);
// button event - End.

// Function get Random quote - Start.
function RandomQuote() {
    let index = Math.floor(Math.random() * quotes2.length); // Arrays - random index.
    let randomQuote = quotes2[index].quote; // Arrays - random quote index.
    let randomAuthor = quotes2[index].author; // Arrays - random author index.
    let randomImage = quotes2[index].img; // Arrays - random img index.
    quoteText.innerHTML = randomQuote;
    authorName.innerHTML = randomAuthor + ':';
    imageDIV.style.backgroundImage = `url('assets/image/${randomImage}.jpg')`;
}
// Function get Random quote - End.