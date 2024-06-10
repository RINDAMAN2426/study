/** 
문제 설명

    숫자 카드 9장이 주어졌을 때, 이 카드가 Baby-Gin을 만족하는지 확인하는 프로그램을 작성하세요. Baby-Gin은 다음과 같은 조건을 만족해야 합니다:

        Run: 연속된 숫자 3개의 집합 (예: 123, 456)
        Triplet: 동일한 숫자 3개의 집합 (예: 111, 333)

    주어진 9장의 카드가 세 개의 Run 또는 Triplet으로 구성되어 있다면 Baby-Gin입니다.

입력 형식

    하나의 줄에 공백으로 구분된 9개의 숫자가 주어집니다. 각 숫자는 0 이상 9 이하의 정수입니다.

출력 형식

    Baby-Gin을 만족하면 true, 그렇지 않으면 false를 출력합니다.
*/

function isBabyGin(cards) {
  function isRunOrTriplet(subset) {
      return (
          (subset[0] === subset[1] && subset[1] === subset[2]) || // Triplet
          (subset[0] + 1 === subset[1] && subset[1] + 1 === subset[2]) // Run
      );
  }

  function check(cards, selectedCount) {
      if (selectedCount === 9) {
          return true;
      }
      for (let i = 0; i <= 6; i++) {
          for (let j = i + 1; j <= 7; j++) {
              for (let k = j + 1; k <= 8; k++) {
                  const subset = [cards[i], cards[j], cards[k]];
                  if (isRunOrTriplet(subset)) {
                      const remaining = cards.filter((_, index) => index !== i && index !== j && index !== k);
                      if (check(remaining, selectedCount + 3)) {
                          return true;
                      }
                  }
              }
          }
      }
      return false;
  }

  cards.sort((a, b) => a - b);
  return check(cards, 0);
}

const fs = require('node:fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, target] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

console.log(isBabyGin(arr, target));