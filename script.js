// A function to Generate Random Number
const randomNumberGenerator = (number) => {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
};

// Joke variables
const jokes = {
    setups: ['Why did the tomato turn red?', 'Why was the math book sad?', 'Why did the chicken cross the playground?'],
    punchlines: ['Because it saw the salad dressing!', 'Because it had too many problems.', 'To get to the other slide.'],
    nonSensicals: ['A horse walked into a bar and ordered a martini', 'An orange is a banana that wears a suit', 'A pencil is a yellow stick with a eraser on top']
};

// To store joke parts
let jokeData = [];
for (let prop in jokes) {
    let keyValue = jokes[prop];
    let randomIndex = randomNumberGenerator(keyValue.length);
    jokeData.push(keyValue[randomIndex]);
};

// Main Function. this will log the joke
const joke = (jokeArray) => {
    let jokeToShow = [];
    jokeToShow.push(`${jokeArray[0]} ${jokeArray[1]}`);
    jokeToShow.push(`${jokeArray[2]}`);
    const theJokeString = jokeToShow.join('\n');
    console.log(theJokeString);
};

joke(jokeData);
