// 객체지향프로그래밍

// class
// - 탬플릿
// - 한 번만 선언
// - class에는 데이타가 없다

// object
// - class의 인스턴스
// - 복수 생성
// - 실제 데이타가 존재

// 1. 클래스 선언
class Car {
  constructor(name, color) {
    // 생성자
    this.name = name // 필드
    this.color = color // 필드
  }

  start() {
    console.log(`${this.name} is start!!!`)
  }

  stop() {
    console.log(`${this.name} is stop~~~`)
  }
}

const myCar = new Car('sonata', 'white')

console.log(myCar)
