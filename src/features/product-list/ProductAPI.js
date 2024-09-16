// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  //TODO: we will not hard-code server URL here
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}
export function fetchProductsByFilters(filter,sort) {
 // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}

  // TODO : on server we will support multi values in filter
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
    console.log(pagination)
    for(let key in pagination){
      queryString += `${key}=${pagination[key]}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }



  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString) 
 const data = await response.json()
 const totalItems = await response.headers.get('X-Total-Count')
 resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}
