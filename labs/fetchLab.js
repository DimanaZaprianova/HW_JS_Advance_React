const url = 'http://127.0.0.1:5500/Untitled-1.json';

const nodes = {
  btnGetdata:document.querySelector('button'),
  output:document.querySelector('.output')
}

fetch(url)
.then( response => {
 
  if( response.ok ){
    return response.text();
   
  }else{
    throw new Error(`Error: response status code is ${response.status}`)
  }
} )
.then( data =>  nodes.output.innerHTML= data )
.catch( err=> console.error(err.message))