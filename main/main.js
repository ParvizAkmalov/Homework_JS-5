let b = prompt("как вас зовут?")
let o = prompt("номер счета?")
let p = prompt("Сколько обналичить?")

let money = 10000
let names = "Alex"
let account = 7777
let j = money - p

if (b == names) {
    if (o == account) {
       if (p < money) {
         alert(`Осталось ${j}`)
       } else {
          alert("Недостаточно средств")
       } 
    } else {
        alert("Ползовитель не найден, досвидули");
    }
} else {
    alert("Ползовитель не найден, досвидули");
}



// 2
let d = prompt("Ismingiz?")
let q = prompt("Yoshingiz?")
let z = prompt("Pulingiz?")

let c = "Alex"
let l = c.charAt(0)

let n = 20 
let t = 40

let u = $100

if (d == l) {
    if (q > n || q < t) {
        if (u < z) {
            alert("Qabul qilindingiz")
        } else {
            alert("Uzur qabul qilinmadi")
        }
    } else {
        alert("Uzur qabul qilinmadi")
    }
} else {
    alert("Uzur qabul qilinmadi")
}