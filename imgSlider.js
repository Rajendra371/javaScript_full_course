const imgArray = [
   'a.jpg',
   'bg.jpg',
   'quiz.jpg',
   'bg1.jpg',
   'quiz2.jpg'
]
//next
// let firstImg = 0
// const lastImg = imgArray.length -1
// let currentImg = 0
// let nextBtn = document.getElementById('left')
// nextBtn = addEventListener('click', ()=> {
//                     let imgtag = document.querySelector('img')
//                     currentImg++
//                     if (currentImg >= lastImg) {
//                                         currentImg = 4
//                     }
//                     imgtag.src = imgArray[currentImg]
// });

//previous
// let pre = document.getElementById('right')
// pre.addEventListener('click', ()=> {
//                     let imgtag = document.querySelector('img')
//                     currentImg--
//                     if (currentImg <= firstImg) {
//                                         currentImg =0
//                     }
//                     imgtag.src = imgArray[currentImg]

// })
const arrayLength = imgArray.length
let i = 0

let set = setInterval(() => {
   i++
   i = i % arrayLength
   //i=0%5=0
   document.querySelector('img').src = `images/${imgArray[i]}`

},5000)
const next = () => {
   i++
   i = i % arrayLength
   document.querySelector('img').src = `images/${imgArray[i]}`
}
const prev = () => {
   i--
   if (i < 0) {
      i = arrayLength - 1
   }

   document.querySelector('img').src = `images/${imgArray[i]}`
}
const stops = () => {
   clearInterval(set)
}
const starts = () => {
   let set = setInterval(() => {
      i++
      i = i % arrayLength
      document.querySelector('img').src = `images/${imgArray[i]}`

   }, 5000)
}