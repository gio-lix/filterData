import axios from "axios";


export const getApi = {

    async FetchApi(url: string) {
        const {data} = await axios.get(url,  {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '3927eff818msh371833ed6939114p1d1436jsnef221ac992b9'
            }
        })
        return data
    }
}