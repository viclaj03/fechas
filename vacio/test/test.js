const funciones = require('../src/functions');

const today = new Date()

describe('age', () => {
  test('devuelve 1 si el alumno nació el 1 de enero del año pasado', () => {
    const birthdate = new Date(today.getFullYear() - 1, 0, 1)
    const result = funciones.age(birthdate)
    expect(result).toBe(1)
  })

  test('devuelve 1 si el alumno nació el 31 de diciembre de hace 2 años', () => {
    const birthdate = new Date(today.getFullYear() - 2, 11, 31)
    const result = funciones.age(birthdate)
    expect(result).toBe(1)
  })
})

describe('dayName', () => {
  test('devuelve "Domingo" 1 si el alumno nació el 2 de enero de 2000', () => {
    const birthdate = new Date(2000, 0, 2)
    const result = funciones.dayName(birthdate)
    expect(result).toBe("Domingo")
  })
})

describe('birthdateOnYear', () => {
  test('devuelve el 15 de enero de 2000 si el alumno nació el 15 de enero de 1990 y el año pasado es 2000', () => {
    const birthdate = new Date(1990, 0, 15)
    const result = funciones.birthdateOnYear(birthdate, 2000)
    expect(result.getFullYear()).toBe(2000)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(15)
  })
})

describe('nextBirthdate', () => {
  test('devuelve el 1 de enero del próximo año si el alumno nació el 1 de enero de 2000', () => {
    const birthdate = new Date(2000, 0, 1)
    const result = funciones.nextBirthdate(birthdate)
    expect(result.getFullYear()).toBe(today.getFullYear() + 1)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(1)
  })

  test('devuelve el 31 de diciembre de este año si el alumno nació el 31 de diciembre de 2000', () => {
    const birthdate = new Date(2000, 11, 31)
    const result = funciones.nextBirthdate(birthdate)
    expect(result.getFullYear()).toBe(today.getFullYear())
    expect(result.getMonth()).toBe(11)
    expect(result.getDate()).toBe(31)
  })
})

describe('yearsWithBirthdateOnDay', () => {
  test('devuelve [2006, 2012, 2017, 2023] si el alumno nació el 1 de enero de 2000 y buscamos los Domingos hasta 2030', () => {
    const birthdate = new Date(2000, 0, 1)
    const result = funciones.yearsWithBirthdateOnDay(birthdate, 2030, 0)
    expect(result).toEqual([2006, 2012, 2017, 2023])
  })

  test('devuelve [2013, 2019, 2024, 2030] si el alumno nació el 31 de diciembre de 2010 y buscamos los Lunes hasta 2030', () => {
    const birthdate = new Date(2010, 11, 31)
    const result = funciones.yearsWithBirthdateOnDay(birthdate, 2030, 2)
    expect(result).toEqual([2013, 2019, 2024, 2030])
  })
})
