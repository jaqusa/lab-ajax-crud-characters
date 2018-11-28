class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  

  getFullList () {
  
  return axios.get(this.BASE_URL + '/characters')
    .then(results => {
      return results.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  getOneRegister (id) {

    return axios.get(this.BASE_URL + '/characters/' + id )
      .then(results =>{
        return results.data
      })
      .catch(err=>console.log(err))


  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
