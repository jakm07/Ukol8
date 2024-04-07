const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  //1 Vypište do stránky všechna čísla.
  const jedna = document.getElementById("1")
  jedna.textContent = numbers

  //2 Vypište do stránky druhé mocniny všech čísel.
  const dva = document.getElementById("2")
  numbers.forEach((number) => {
    let mocnina = number*number
    dva.textContent += mocnina + ", "
  })

  //3 Vypište do stránky pouze záporná čísla.
  const tri = document.getElementById("3")
  numbers.forEach((number) => {
    if(number < 0){
        let zaporneCislo = number
        tri.textContent += zaporneCislo + ", "
    }
  })


  //4 Vypište do stránky absolutní hodnotu všech čísel.
  const ctyri = document.getElementById("4")
  numbers.forEach((number) => {
    let absHodnota = Math.abs(number)
    ctyri.textContent += absHodnota + ", "
  })

  //5 Vypište do stránky pouze sudá čísla.
  const pet = document.getElementById("5")
  numbers.forEach((number) => {
    if(number%2 === 0){
        pet.textContent += number + ", "
    } 
  })
  
  //6 Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
  const sest = document.getElementById("6")
  numbers.forEach((number) => {
    let absHodnota = Math.abs(number)
    if(absHodnota%4 === 0){
        sest.textContent += absHodnota + ", "
    }
  })

  //7 Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
  const sedm = document.getElementById("7")
  numbers.forEach((number, index) => {
    const vzdalenost = Math.abs(index - numbers.indexOf(5))
    const vypis = document.createElement("p")
    vypis.textContent = `Číslo: ${number}, vzdálenost: ${vzdalenost}`
    sedm.appendChild(vypis)
  }); 

  //8 Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
  const osm = document.getElementById("8")
  numbers.forEach((number, index) => {
    const vzdalenost = Math.abs(index - numbers.indexOf(5))
    const vzdalenostsqr = vzdalenost*vzdalenost
    const vypis = document.createElement("p")
    vypis.textContent = `Číslo: ${number}, vzdálenost ${vzdalenostsqr}.`
    osm.appendChild(vypis)
  })

  //9 Spočítejte, kolik je v seznamu záporných čísel.
  const devet = document.getElementById("9")
  let pocetZap = 0
  for (let i = 0; i < numbers.length; i++){
      if(numbers[i] < 0){
        pocetZap++
      }
  }
  devet.textContent = pocetZap

  //10 Spočítejte součet všech čísel v poli.
  const deset = document.getElementById("10")
  let sum = 0
  for (let i = 0; i < numbers.length; i++){
  sum += numbers[i]
  }
  deset.textContent = sum

  //11 Spočítejte průměr všech čísel v poli.
  const jedenact = document.getElementById("11")
  let pocetPrvku = numbers.length
  let avg = sum/pocetPrvku
  jedenact.textContent = avg

  //12 Spočítejte součet všech kladných čísel v poli.
  const dvanact = document.getElementById("12")
  let sumPos = 0
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
      sumPos += numbers[i]
    }
  }
  dvanact.textContent = sumPos
