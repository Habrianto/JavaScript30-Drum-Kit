const jarumDetik = document.querySelector('.second-hand')
const jarumMenit = document.querySelector('.min-hand')
const jarumJam = document.querySelector('.hour-hand')


function jam() {
   const terkini = new Date()

   // detik
   const detik = terkini.getSeconds()
   const derajatDetik = ((detik / 60) * 360) + 90
   // masukan kedalam DOM
   jarumDetik.style.background = 'red'
   jarumDetik.style.transform = `rotate(${derajatDetik}deg)`

   // menit
   const menit = terkini.getMinutes()
   const derajatMenit = ((menit / 60) * 360) + ((detik / 60) * 6) + 90
   jarumMenit.style.transform = `rotate(${derajatMenit}deg)`

   // jam
   const jam = terkini.getHours()
   const derajatJam = ((jam / 12) * 360) + ((menit / 60) * 30) + 90
   jarumJam.style.transform = `rotate(${derajatJam}deg)`

}
// interval waktu
setInterval(jam, 1000)
// memanggil function
jam()

