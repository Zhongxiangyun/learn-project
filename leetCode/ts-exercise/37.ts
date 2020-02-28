/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 37. 解数独 
* @author: PresByter
* @date  : 2020/02/28 16:50:59
* @file  : 37.ts
*/
/**
 * 37. 解数独
 * https://leetcode-cn.com/problems/sudoku-solver/
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board: string[][]): void => {
    if (board === null || board.length === 0) return
    solve(board)
};
const solve = (board: string[][]): boolean => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                for (let c = 1; c <= 9; c++) {
                    if (isValid1(board, i, j, String(c))) {
                        board[i][j] = String(c)
                        if (solve(board)) {
                            return true
                        } else {
                            board[i][j] = '.'
                        }
                    }

                }
            } else {
                return false
            }
        }
    }
    return true
};

const isValid1 = (board: string[][], row: number, col: number, c: string): boolean => {
    for (let i = 0; i < 9; i++) {
        // 检查行
        if (board[i][col] != '.' && board[i][col] === c) {
            return false
        }
        // 检查列
        if (board[row][i] != '.' && board[row][i] === c) {
            return false
        }
        // 检查 3*3 区块
        if (board[3 * (row / 3) + i / 3][3 * (row / 3) + i % 3] != '.' && board[3 * (row / 3) + i / 3][3 * (row / 3) + i % 3] === c) {
            return false
        }
    }
    return true
};