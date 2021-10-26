'use strict'



    document.getElementsByTagName('form')[0].addEventListener('submit', (event)=>{
        event.preventDefault()
        
        const fecha = new Date(document.getElementsByTagName('input')[0].value)
        document.getElementById('msgs').innerHTML = '<p>Edad: ' + age(fecha) + '<br>' +
        'Dia de la semana de nacimiento : ' + dayName(fecha) + '<br>' +  
        'Proximo dia de la semana del cumple: ' + dayName(nextBirthdate(fecha)) + '<br>' +
        'Dia de la semana cuando  cumpla 100 : ' + dayName(birthdateOnYear(fecha,(fecha.getFullYear() +100))) + '<br>' +  
        'el día de su cumpleaños del año 2000' + dayName(birthdateOnYear(fecha,2000)) + '<br>' + 
        'Cumples  que caen domingo hasta el 2100: ' + yearsWithBirthdateOnDay(fecha,2100,0) + '<br> </p>';
    })
