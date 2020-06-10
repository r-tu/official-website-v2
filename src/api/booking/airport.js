export default ($axios) => ({
  getAirport() {
    return $axios.get('https://w5q6k.sse.codesandbox.io/api/v1/cumulative')
  }
})
