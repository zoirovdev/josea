import axios from 'axios'




const getAllOptions = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'developer jobs in chicago',
    page: '1',
    num_pages: '20',
    country: 'us',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': 'f01fa240c6msha5a29e268cd4da5p14a808jsnb10a7b712eb2',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};



const getOptions = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/job-details',
  params: {
    job_id: '20N57zBfi3eT9BdpAAAAAA==',
    country: 'us'
  },
  headers: {
    'x-rapidapi-key': 'f01fa240c6msha5a29e268cd4da5p14a808jsnb10a7b712eb2',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};



const searchOptions = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'developer jobs in tashkent',
    page: '1',
    num_pages: '20',
    country: 'uz',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': 'f01fa240c6msha5a29e268cd4da5p14a808jsnb10a7b712eb2',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

export const Service = {
  async fetchAll() {
    try {
      const response = await axios.request(getAllOptions)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async fetchById(id) {
    try {
      getOptions.params.job_id = id
      const response = await axios.request(getOptions)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async search(query){
    try {
      searchOptions.params.query = query
      const response = await axios.request(searchOptions)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}


