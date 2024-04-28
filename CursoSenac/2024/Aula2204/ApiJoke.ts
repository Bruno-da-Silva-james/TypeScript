import axios from 'axios';

async function getJoke(): Promise<string> {
    try{
        const response = await axios.get('https://v2.jokeapi.dev/joke/Dark?amount=5')

        if (!response.data || response.data.error) {
            throw new Error("Nao foi possivel obter piada");
        }
        
        if (response.data.type === 'single') {
            return response.data.joke
        } else if (response.data.type === 'twopart'){
            return `${response.data.setup} ${response.data.delivery}`;
        } else {
            throw new Error("Tipo de piada desconhecido");
        }
    }

    catch (error){
        console.log("erro ao obter piada", error);
        throw new Error("erro ao obter piada");
    }
}

getJoke()
    .then(joke => 
        {
            console.log(joke);
        }
    )
    .catch(error =>
        {
            console.log(error);
        }
    )