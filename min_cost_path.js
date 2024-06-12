/*
문제 설명

  MxN 격자(grid)가 주어졌을 때, 왼쪽 위에서 오른쪽 아래로 가는 최소 비용 경로를 찾으세요. 각 칸에는 이동하는 데 드는 비용이 있습니다. 한 번에 오른쪽이나 아래쪽으로만 이동할 수 있습니다.

  입력 형식

    첫 번째 줄에 격자의 크기 M과 N이 주어집니다.
    다음 M줄에 각각 N개의 정수로 격자의 비용이 주어집니다.

출력 형식

    최소 비용을 출력합니다.

입력 1
3 3
1 3 1
1 5 1
4 2 1

출력 1
7
*/

const fs = require('node:fs');

function minCost(grid, m, n, memo) {
    if (m < 0 || n < 0) {
        return Number.Infinity; // 격자 범위를 벗어나면 무한대 비용
    } 
    if (m === 0 && n === 0) {
        return grid[0][0]; // 시작점의 비용
    }
    if (memo[m][n] !== -1) {
        return memo[m][n]; // 이미 계산된 값 사용
    }

    // 상단 또는 좌측에서 오는 경로 중 최소 비용을 선택
    memo[m][n] = grid[m][n] + Math.min(minCost(grid, m - 1, n, memo), minCost(grid, m, n - 1, memo));
    return memo[m][n];
}

// 입력 처리
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// 메모이제이션을 위한 배열 초기화
const memo = Array.from({ length: M }, () => Array(N).fill(-1));

// 최소 비용 경로 계산 및 출력
const result = minCost(grid, M - 1, N - 1, memo);
fs.writeFileSync('/dev/stdout', `${result.toString()}\n`);