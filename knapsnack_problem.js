/*
문제 설명

  각 아이템의 무게와 가치가 주어졌을 때, 배낭에 담을 수 있는 최대 무게 W 내에서 최대 가치를 찾는 프로그램을 작성하세요.

입력 형식

    첫 번째 줄에 아이템의 수 n과 배낭의 최대 무게 W가 주어집니다.
    다음 n개의 줄에 각각 두 정수 wi와 vi가 주어집니다. 이는 i번째 아이템의 무게 wi와 가치 vi를 의미합니다.

출력 형식

    배낭에 담을 수 있는 최대 가치를 출력합니다.

입력 1

4 7
1 1
3 4
4 5
5 7

출력 1

9
*/

const fs = require('node:fs');

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, W] = input[0].split(' ').map(Number);
const items = input.slice(1).map(line => line.split(' ').map(Number));

// DP 테이블 초기화
const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

// 0/1 Knapsack DP (Bottom-Up DP)
for (let i = 1; i <= n; i++) {
    const [wi, vi] = items[i - 1];
    for (let w = 0; w <= W; w++) {
        if (wi <= w) {
            dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - wi] + vi);
        } else {
            dp[i][w] = dp[i - 1][w];
        }
    }
}

// 결과 출력
const result = dp[n][W];
fs.writeFileSync('/dev/stdout', `${result.toString()}\n`);
