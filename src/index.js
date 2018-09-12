class Sorter {
  constructor() {
    this.memory = []

    this.compFunc = function(a,b){
      return a-b
    }
  }

  add(element) {
    this.memory.push(element)
    return this
  }

  at(index) {
    return this.memory[index]
  }

  get length() {
    return this.memory.length
  }

  toArray() {
    return this.memory
  }

  sort(indices) {   
    var temp = []
    for(let i=0;i<indices.length;i++){
      temp.push(this.memory[indices[i]])
    }    
    
    temp.sort(this.compFunc)
      
    if(indices[0] > indices[1]){
      temp.reverse()
    }   
     
    for(let j = 0; j<temp.length;j++){
      this.memory[indices[j]] = temp[j]
    }      
  }

  setComparator(compareFunction) {
    this.compFunc = compareFunction
  }
}

module.exports = Sorter;