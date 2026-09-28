const numbers = ['30A-111', '29B-222', '51C-333']

//Thêm một xe mới vào cuối hàng
numbers.push ('43D-444')
console.log("Hàng đợi sau khi thêm xe mới", numbers)

//Chèn 1 xe ưu tiên vào vị trí chỉ định
numbers.splice(1,0,'14A-999')


//Xe đầu tiên vào cổng sạc
let charger = numbers.shift()
console.log("Xe đầu tiên vào sạc",charger)

//Tính tiền  ca trực dựa trên mảng điện năng tiêu thụ 
let kWh = [30, 45, 25]
let price = 4500
let total = 0

for(let i =0; i <kWh.length; i++){
    total +=kWh[i];
}
console.log("Tổng điện năng:",total,"kWh")

// Tổng tiền ca trực
let revenue = total * price
console.log("Doanh thu ca trực:", revenue, "VND")
