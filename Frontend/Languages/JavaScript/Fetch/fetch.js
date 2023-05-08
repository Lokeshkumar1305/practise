async function secondWay(){
    let dataApi=await fetch('https://fakestoreapi.com/products')
    dataApi=await dataApi.json()
    console.log(dataApi)
    dataApi.map((name)=>{
    let h2=document.createElement('h2')
    h2.innerHTML=name.title;
    let div=document.getElementById('hello')
    div.append(h2)
    let img=document.createElement('img')
    img.src=name.image
    img.style.width="200px"
    div.append(img)
});

}
secondWay()

