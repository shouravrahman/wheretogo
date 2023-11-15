enum Endpoints {

   GetImage = 'https://www.googleapis.com/customsearch/v1?searchType=image&key={{CUSTOM_SEARCH_API_KEY}}&cx={{GOOGLE_SEARCH_ENGINE_ID}}&q={{SEARCH_TERM}}',
   GetGPTResponse = '/api/chat'
}

export default Endpoints