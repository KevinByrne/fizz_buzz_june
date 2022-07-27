class Fizzbuzz {
  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }

  isDivisibleByFive(number) {
    return (number % 5 === 0);  
  }

  isDivisibleByThreeAndFive(number) {
    return (number % 3 === 0) && (number % 5 === 0);
  }
}