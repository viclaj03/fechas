'use strict'

function age(fecha){
    let hoy = new Date()
  let fechaNacimiento = fecha
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
  if (
    diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--
  }
  return edad
}

function dayName(fecha){
    const arrayDias = ['Domingo','Lunes','Martes','Miercoles','jueves','viernes','Sabado'];
    return arrayDias[fecha.getDay()];
} 

function nextBirthdate(fecha){
  let hoy = new Date()
  let fecha2 = new Date(hoy.getFullYear(),fecha.getMonth(),fecha.getDate())  
  if (fecha2.getTime() < hoy.getTime() ){
    fecha2.setFullYear(hoy.getFullYear() + 1)
  }
  const arrayDias = ['Domingo','Lunes','Martes','Miercoles','jueves','viernes','Sabado'];
  return fecha2;
} 



/*function Day2000(fecha){
  
  fecha.setFullYear(2000)
  const arrayDias = ['Domingo','Lunes','Martes','Miercoles','jueves','viernes','Sabado'];
  return arrayDias[fecha.getDay()];
} */

function birthdateOnYear(birthdate,year){
  let fecha = new Date(birthdate.getTime())  
  fecha.setFullYear(year)
  return fecha;
}

function yearsWithBirthdateOnDay(birthdate,maxYear,dayOfWeek){
  let fecha = new Date(birthdate)
  let years = []
  for (let i = fecha.getFullYear(); i <= maxYear; i++) {
    fecha.setFullYear(i)
    if(fecha.getDay() == dayOfWeek){
      years.push(fecha.getFullYear())
    }
  }
  return years;
}

module.exports = {
  age,
  dayName,
  birthdateOnYear,
  yearsWithBirthdateOnDay,
  nextBirthdate
}





