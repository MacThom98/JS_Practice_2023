"use strict";
const arr = [3, 5, 7, 2, 6, 7, 8];

const sumEven = arr.reduce((total, item) => {
  if (item > 0 && item % 2 == 0) {
    total += item;
  }
  return total;
}, 0);
// Truyền giá trị khởi tạo ban đầu cho total là 0, nếu không nó sẽ nhận giá trị index[0]
console.log("Câu 1:");
console.log({ sumEven });

const arr2 = [];
arr.map((i) => {
  if (i > 0 && i % 2 != 0) {
    arr2.push(i * i);
  } else {
    arr2.push(i);
  }
});

console.log("Câu 2:");
console.log({ arr2 });

console.log("Câu 3:");
console.log(
  "Sort Asc Array: ",
  arr.sort((a, b) => a - b)
);

const url = "https://fakestoreapi.com/products?limit=10";

const fetchData = async (url, option) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Lỗi: ", e);
  }
};

const getData = async (url) => {
  try {
    const data = await fetchData(url);
    console.log("Câu 4:");
    console.log("Data: ", data);
  } catch (e) {
    console.error("Lỗi: ", e);
  }
};

// getData(url);

const filter = (data, field, value, operator) => {
  return data.filter((item) => {
    let fieldValue = item[field];

    switch (operator) {
      case "==":
        return fieldValue == value;
      case ">":
        return fieldValue > value;
      case ">=":
        return fieldValue >= value;
      case "<":
        return fieldValue < value;
      case "<=":
        return fieldValue <= value;
      case "!=":
        return fieldValue != value;
      default:
        return false;
    }
  });
};

const getQuantity = async (url, field, criteria, operator) => {
  try {
    const data = await fetchData(url);
    const res = await filter(data, field, criteria, operator);
    console.log("Câu 5:");
    console.log("Quantity: ", res.length);
  } catch (e) {
    console.error("Lỗi: ", e);
  }
};

// getQuantity(url,'category','jewelery','==');

const addDiscountField = (data) => {
  return data.map((item) => {
    if (item.rating > 3) {
      return {
        ...item,
        discount: 20,
      };
    } else {
      return item;
    }
  });
};

const getDiscountedData = async (url) => {
  try {
    const data = await fetchData(url);
    data.map((i) => {
      if (i.rating.rate > 3) {
        i.discount = 0.2;
      }
    });
    console.log("Câu 6");
    console.log({ data });
  } catch (e) {
    console.error("Lỗi câu 6: ", e);
  }
};

//   getDiscountedData(url);

console.log("Câu 7:");
const productsContainer = document.querySelector("#products");
console.log(productsContainer);
const _renderProduct = async () => {
  const products = await fetchData(url);
  const html = [];
  products.forEach((i) => {
    let product = `
    <div class="card">
    <div class="card-title">${i.title}</div>
    <div class="card-img">
        <img src="${i.image}" alt=""/>
    </div>
    <div class="card-body">
        <div class="card-body_price">${i.price}</div>
        <div class="card-body_description">${i.description}</div>
    </div>
  </div>
    `
    html.push(product);
;
// console.log(html.join(''));
  });
  productsContainer.innerHTML = html.join('');
};

_renderProduct();

// const Person=function(name,age){
//     this.name=name
//     this.age=age
// }
// Person.prototype.info=function(){
//     console.log(`Một người có tên ${this.name} hiện nay ${this.age} tuổi`)
// }

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    info(){
        console.log(`Một người có tên ${this.name} hiện nay ${this.age} tuổi`)
    }
}

class Employee extends Person {
    constructor(name, age, salary){
        super(name,age);
        this.salary = salary
    }
    getTax() {
        let taxPercent;
        if (this.salary > 1000) {
          taxPercent = 0.1;
        } else {
          taxPercent = 0.05;
        }
    
        const taxAmount = this.salary * taxPercent;
    
        console.log(`Nhân viên ${this.name} đóng thuế số tiền là ${taxAmount}$`);
      }
}

const emp = new Employee('Thom', 30, 500);
emp.info();
emp.getTax();

