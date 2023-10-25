"use strict";
const arr_one = [40, 61, 17, 7, 4, 7, 4];
const arr_two = [5, 6, 1, 4, 7];

// Câu 1
console.log(`\n////////////`);
console.log("Câu 1:");
const arr_Final = [...arr_one, ...arr_two];

arr_Final.map((item, index) => {
  if (item === 7) {
    arr_Final.splice(index, 1);
  }
});

console.log({ arr_Final });

// Câu 2:
console.log(`\n////////////`);
console.log("Câu 2:");

const arrJoined = arr_Final.sort((a, b) => b - a).join("-");
console.log(arrJoined);

// Câu 3:
console.log(`\n////////////`);
console.log("Câu 3:");

arr_one.length > arr_two.length
  ? console.log("arr_one có nhiều phần tử hơn: " + arr_one)
  : console.log("arr_two có nhiều phần tử hơn: " + arr_two);

// Câu 4:
console.log(`\n////////////`);
console.log("Câu 4:");
const arr_New = [...arr_one, ...arr_two];

let count = 0;
arr_New.forEach((item) => {
  if (item > 10) {
    ++count;
  }
});
console.log(`Có ${count} phần tử lớn hơn 10`);

// Câu 5:
console.log(`\n////////////`);
console.log("Câu 5:");
const btn_login = document.querySelector(".login_btn");
const userField = document.querySelector("#user");
const pinField = document.querySelector("#pin");

const userVal = userField.value;
const pinVal = pinField.value;

console.log(userVal);
console.log(pinVal);
btn_login.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Đăng nhập thành công");
});

// Câu 6:
console.log(`\n////////////`);
console.log("Câu 6:");

const golfEvent = new Map([
  [10, "tee"],
  [5, "green"],
  [15, "touch"],
  [20, "rough"],
  [26, "green"],
  [31, " kick the ball "],
  [22, " touch "],
  [32, " kick the ball "],
]);
const round1 = [];
const round2 = [];

golfEvent.forEach((value, key)=>{
    if(key <= 15){
        round1.push(value);
    }else{
        round2.push(value);
    }
})

console.log(`Sự kiện hiệp 1:`);
round1.forEach(item=>console.log(item));
console.log(`Sự kiện hiệp 2:`);
round2.forEach(item=>console.log(item));
// Câu 7:
console.log(`\n////////////`);
console.log("Câu 7:");
const eventGolfKey = [...golfEvent.keys()];
const eventGolfVal = [...golfEvent.values()];
const eventGolfEntries = [...golfEvent.entries()];
console.log(eventGolfKey);
console.log(eventGolfVal);
console.log(eventGolfEntries);

// eventGolfKey.sort().pop();

const sizeEvent = golfEvent.size;
const totalTime = [...golfEvent.keys()].pop();
// console.log(totalTime)
console.log('Thời gian kết thúc'+totalTime);
const endGolfTime = 0;

const avg = totalTime / sizeEvent;
console.log(`1 sự kiện xảy ra, trung bình mỗi ${avg.toFixed(0)} phút`);


// Câu 8:
console.log(`\n////////////`);
console.log("Câu 8:");

// a)
class Animal {
    constructor(name, color, leg, weight) {
      this.name = name;
      this.color = color;
      this.leg = leg;
      this.weight = weight;
    }
  
    info() {
      return `Con mèo ${this.name}, có màu lông ${this.color}, số chân ${this.leg}, cân nặng là ${this.weight}`;
    }
  }
  

  class Cat extends Animal {
    constructor(name, color, leg, weight, fast) {
      super(name, color, leg, weight);
      this.fast = fast;
    }
  
    get info() {
      return `Con mèo ${this.name}, có màu lông ${this.color}, số chân ${this.leg}, cân nặng là ${this.weight}, tốc độ chạy là ${this.fast}`;
    }
  
    set cat_fast(speed) {
      if (isNaN(speed)) {
        console.log("Lỗi: Vui lòng nhập tốc độ là ký số");
      } else {
        this.fast = speed;
        console.log(`Cat có tốc độ chạy là ${this.fast}`);
      }
    }
  }
  
  const cat = new Cat("Đen", "màu xám", 4, 4.5, "nhanh");
  
  console.log(cat.info);
  cat.cat_fast = "nhanh"; // In ra thông báo lỗi
  cat.cat_fast = 15; // In ra thông báo Cat có tốc độ chạy là 15
  