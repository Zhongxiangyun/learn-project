/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 79. 单词搜索 
* @author: PresByter
* @date  : 2020/03/07 14:56:53
* @file  : 79.ts
*/
/**
 * 79. 单词搜索
 * https://leetcode-cn.com/problems/word-search/
 * 
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.
 */

const isExist = (x: number, y: number, board: string[][]) => {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
        return false
    } else {
        console.log([x, y]);
        dfs([x, y], board, word)
    }
}
const dfs = (loc: number[], board: string[][], word: string = '', xb?: number, yb?: number): void => {
    console.log(loc);
    const x: number = loc[0]
    const y: number = loc[1]
    let res = false
    for (let i: number = 1; i < word.length; i++) {
        switch (word[i]) {
            case board[x + 1][y]:
                isExist(x, y, board)
                break
            case board[x - 1][y]:
                isExist(x, y, board)
                break
            case board[x][y + 1]:
                isExist(x, y, board)
                break
            case board[x][y - 1]:
                isExist(x, y, board)
                break
            default:
                res = false
                break
        }
    }
}
/**
* @param {character[][]} board
* @param {string} word
* @return {boolean}
*/
const exist = (board: string[][], word: string = ''): boolean => {
    // console.log([...word], word[0]);
    const loc: number[] = []
    for (let i: number = 0; i < board.length; i++) {
        const item: string[] = board[i]
        const len: number = board[i].length
        for (let j: number = 0; j < len; j++) {
            // console.log(item[j]);
            if (item[j] === word[0]) {
                // console.log([i, j]);
                dfs([i, j], board, word, board.length, len)
            }
            // else {
            //     dfs([-1, -1], board, word, board.length, len)
            // }
        }
    }
    return false
};

const board =
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
// const word = "ABCCED"
const word = "J"
const word1 = "SEE"
const word2 = "ABCB"
exist(board, word)
// exist(board, word1)
// exist(board, word2)