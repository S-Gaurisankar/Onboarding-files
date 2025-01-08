const fetchJokes = async () => {
    try{

        console.log("Start fetching");
        
        const response1 =  fetch("https://official-joke-api.appspot.com/random_ten").then(response1 => response1.json());
        const response2 =  fetch("https://official-joke-api.appspot.com/random_ten").then(response2 => response2.json());

        const [jokes1, jokes2] = await Promise.all([response1, response2]);
        const allJokes = [...jokes1, ...jokes2]

        let jokeId = 0;   
        allJokes.forEach((joke) => {
            console.log(`Joke No: ${jokeId}`)
            console.log(joke.setup);
            console.log(joke.punchline); 
            console.log("\n");  
            jokeId++; 
        });
        console.log("Fetching complete"); 
        setTimeout(() => {
            console.log("All jokes are displayed");
        }, 2000);
    }
    catch(error){
        console.log("Error: ", error);
    }
};

fetchJokes();