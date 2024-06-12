/**
문제 설명

  어떤 금액을 최소한의 동전 개수로 교환하려고 합니다. 사용할 수 있는 동전의 종류와 그 개수가 주어질 때, 최소한의 동전 개수를 구하는 프로그램을 작성하세요.

입력 형식

    첫 번째 줄에 동전의 종류의 수 n (1 ≤ n ≤ 100)이 주어집니다.
    두 번째 줄에 각 동전의 금액이 공백으로 구분되어 주어집니다.
    세 번째 줄에 교환할 금액 amount (1 ≤ amount ≤ 10000)가 주어집니다.

출력 형식

    최소한의 동전 개수를 출력합니다. 만약, 해당 금액을 만들 수 없으면 -1을 출력합니다.

입출력 예제

입력 1
3
1 2 5
11

출력 1
3

입력 2
3
2 5 10
3

출력 2
-1
 */


// 동전 교환 문제를 해결하는 함수
function minCoins(coins, amount) {
    coins.sort((a, b) => b - a); // 동전을 큰 순서대로 정렬
    let count = 0;
    for (const coin of coins) {
        if (amount === 0) break;
        if (coin <= amount) {
            count += Math.floor(amount / coin);
            amount %= coin;
        }
    }
    return amount === 0 ? count : -1;
}

const fs = require('node:fs');
// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number.parseInt(input[0]);
const coins = input[1].split(' ').map(Number);
const amount = Number.parseInt(input[2]);

// 동전 교환 결과 출력
const result = minCoins(coins, amount);
fs.writeFileSync('/dev/stdout', `${result.toString()}\n`);