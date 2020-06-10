export default ($axios) => ({
  getAirport() {
    return $axios.get('/cumulative')
  }
})
