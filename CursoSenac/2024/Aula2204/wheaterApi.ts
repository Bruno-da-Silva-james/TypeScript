
import axios from "axios";

async function consultarPrevisao(cidade: string): Promise<void> {
    try{
        const apiKey = '5ed5158a4092e5182851216a49288904'

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`)

        const {main,weather} = response.data

        console.log('previsao do tempo em', cidade);
        console.log(' Temperatura ', main.temp, '°C' );
        console.log(' Condicao ', weather[0].description);
    }
    catch (error){
        console.error('Ocorreu um erro em consultar a previsao do tempo ', error.response.data.message);
    }
}

const cidade: string = 'Porto Alegre'

consultarPrevisao(cidade);