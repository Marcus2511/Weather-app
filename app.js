let search=document.querySelector('.search')
let city=document.querySelector('.city')
let country=document.querySelector('.country')
let shortdec=document.querySelector('.short_desc')
let visib=document.querySelector('.visibility span')
let wind=document.querySelector('.wind span')
let sun=document.querySelector('.sun span')
let value=document.querySelector('.value')
let time=document.querySelector('.time')
let content=document.querySelector('.content')
let body=document.querySelector('body')

async function changeweather(){
    let capitalSearch = search.value.trim();
    let apiurl='https://api.openweathermap.org/data/2.5/weather?q='+capitalSearch+'&appid=0f9b837e803116185539fdc26f52bdaf'
    
    let data = await fetch(apiurl).then(res=> res.json())
    if(data.cod==200){
        console.log(data);
        content.classList.remove('hide')
        city.innerText=data.name
        country.innerText=data.sys.country
        visib.innerText=data.visibility + 'm'
        wind.innerText=data.wind.speed +'m/s'
        sun.innerText=data.main.humidity + '%' 
        let temper=Math.round((data.main.temp -273.15))
        value.innerText=temper
        shortdec.innerText=data.weather[0].main
        time.innerText=new Date().toLocaleString('vi')
        
        body.setAttribute('class', 'hot');
        if(temper>25){
            body.setAttribute('class', 'hot');
        }
        if(temper<=25 && temper>=20){
            body.setAttribute('class', 'warm')
        }
        if(temper<20){
            body.setAttribute('class', 'cold')
        }
        

    }else{
        console.log('not found')
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function(e){
    if(e.code ==='Enter'){
        changeweather();
    }
})
