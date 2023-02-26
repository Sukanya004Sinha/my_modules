//"http://api.weatherapi.com/v1/current.json?key=96e20468c05c433f8bb184107232502&q=London&aqi=no"

const temperatureField = document.querySelector(".temp");
const locationfield = document.querySelector(".time_location p");
let dateField = document.querySelector(".time location span");
const weatherfield = document.querySelector(".condition p");
let searchField = document.querySelector(".search_area");
let form =document.querySelector('form');
form.addEventListener('submit', searchForLocation)

let target = 'Lucknow'
const  fetchResults = async(targetLocation)=>{
let url= `http://api.weatherapi.com/v1/current.json?key=96e20468c05c433f8bb184107232502&q=${targetLocation}&aqi=no`

const res= await fetch(url) 
const data = await res.json();
console.log(data)
let locationName = data.location.name
//console.log(locationName);
let time = data.location.localtime
let temp = data.current.temp_c
let condition = data.current.condition.text
//let condition = data
 
}
function searchForLocation(e){
    e.preventDefault()
    target= searchField.Value
    fetchResults(target)
}
fetchResults(target);
