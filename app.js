const products = [
  {
    name: 'item 1', 
    price:10000, 
    category: 'category 1'
  },
  
  {
    name:'', 
    price:10000, 
    category: 'category 2'
  },
  
  {
    name:'item 3', 
    price:10000, 
    category: 'category 3'
  },
  
  {
    name:'item 4', 
    price:10000, 
    category: 'category 4'
  },
  
  {
    name:'item 5', 
    price:0, 
    category: 'category 5'
  },
  
  {
    name:'item 6', 
    price:10000, 
    category: null
  },
  
    {
    name:'item 7', 
    price:10000, 
    category: 'category 7'
  }
]; 




function totalSumOfProducts (products) {
  return (products.map (function (product){
    return Object.keys(product).length == Object.values(product).filter(value => value).length ? Object.values(product).filter(value => value>0)[0] : 0
  }).reduce (function (sum, price){
    return sum += price;
  }))/100 ;
}


module.exports = totalSumOfProducts; 

