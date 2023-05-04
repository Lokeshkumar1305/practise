let myarray=[{
    "userId": 1,
    "id": 1,
    "name": "ASHA",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "name": "ARAVIND",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "name": "SUCHI",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "name": "PRIYANKA",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "name": "RUCHITHA",
    "completed": true
  }];
  let narray=JSON.parse(JSON.stringify(myarray))
  console.log(narray)
narray.map((name)=>{
    let h2=document.createElement('h2')
    h2.innerHTML=name.name;
    let div=document.getElementById('hello')
    div.append(h2)
})