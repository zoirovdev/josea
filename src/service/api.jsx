import axios from 'axios'



const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'developer jobs in chicago',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': 'd37d1e7c57msha829c12893473e5p16dfdcjsn1fcc844dada6',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};


export const Service = {
  async fetching() {
    try {
      const response = await axios.request(options)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}


