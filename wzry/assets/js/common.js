class Cont{
  static search(name){
    const search = encodeURI(location.search)
    const params = new URLSearchParams(search)
    return params.get(name)
  }
}
