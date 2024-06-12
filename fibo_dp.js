const fs = require('node:fs');

// 메모이제이션을 이용한 피보나치 수열 계산
function fibonacci_with_memo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    // 재귀 호출과 메모이제이션: O(n)
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// 타뷸레이션을 이용한 피보나치 수열 계산
function fibonacci_with_tabulation(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  // 반복문을 사용한 타뷸레이션: O(n)
  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}


// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number.parseInt(input);

// 피보나치 수열 결과 출력
const memo_result = fibonacci_with_memo(n);
const tabulation_result = fibonacci_with_tabulation(n);
fs.writeFileSync('/dev/stdout', `memo: ${memo_result.toString()}\n, tabulation: ${tabulation_result.toString()}`);