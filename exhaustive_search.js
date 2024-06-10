/**
  문제 설명
    주어진 정수 배열 arr과 목표 합 target이 주어질 때, 배열의 부분 집합 중에서 합이 target이 되는 부분 집합이 존재하는지 확인하는 프로그램을 작성하세요.
  
  입력 형식

    첫 번째 줄에 배열의 길이 n (1 ≤ n ≤ 20)과 목표 합 target (1 ≤ target ≤ 100)이 주어집니다.
    두 번째 줄에 배열 arr의 원소가 공백으로 구분되어 주어집니다. 각 원소는 1 이상 100 이하의 정수입니다.

  출력 형식

    부분 집합의 합이 target이 되는 부분 집합이 존재하면 true, 그렇지 않으면 false를 출력합니다.
 */

function hasSubsetSum(arr, target) {

  // 부분 집합을 구하기 때문에 DFS를 사용하여 모든 경우의 수를 탐색해야한다.
  function dfs(index, currentSum) {
      if (index === arr.length) {
          return currentSum === target;
      }
      
      // 현재 인덱스의 원소를 포함하지 않는 경우
      if (dfs(index + 1, currentSum)) {
          return true;
      }

      // 현재 인덱스의 원소를 포함하는 경우
      if (dfs(index + 1, currentSum + arr[index])) {
          return true;
      }

      return false;
  }

  return dfs(0, 0);
}

// 입력 처리
const fs = require('node:fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, target] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

console.log(hasSubsetSum(arr, target));