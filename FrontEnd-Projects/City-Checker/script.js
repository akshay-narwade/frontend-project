let button=document.querySelector('button')
//event listner
button.addEventListener('click',display)
function display(){
    //console.log("clicked")
    let input=document.getElementById("input")
    let city=input.options[input.selectedIndex].value
    //console.log(city)
    let population=0,literacyRate=0,language=" "
    switch(city){
        case 'chennai':
            //console.log("from chennai")
           population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
           break
        case 'pune':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case 'delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break  
    }
 
    let text= `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    //console.log(text)
 
    //document.getElementById("result").innerHTML=text
 
   let resultdiv=document.createElement('div')//creating div tag
   resultdiv.id='result'//creating id  for created div
   document.getElementById("wrapper").appendChild(resultdiv)
   document.getElementById('result').innerHTML=text
}
