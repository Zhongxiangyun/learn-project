/**
*～╭════╮┌══════════════┐
* ╭╯开车║ ▁▂▃▅▆▇  |  ~~~
* ╰⊙═⊙╯╰══⊙══════⊙══╯
* @description: 208. 实现 Trie (前缀树) 
* @author: PresByter
* @date  : 2020/03/06 17:45:38
* @file  : 208.ts
*/
/**
 * 208. 实现 Trie (前缀树)
 * 
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/
 * 
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。
 */
/**
 * Initialize your data structure here.
 */
// var Trie = function () {
//     this.str = ''
// };

// /**
//  * Inserts a word into the trie. 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function (word: string): void {
//     this.str += word
// };

// /**
//  * Returns if the word is in the trie. 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function (word: string): boolean {
//     // const reg=
//     return this.str.match(word)
// };

// /**
//  * Returns if there is any word in the trie that starts with the given prefix. 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function (prefix: string): boolean {
//     return this.str.indexOf(prefix)
// };

class TrieNode {
    public next = {}
    public isEnd: boolean = false
    // this.next = {};
    // this.isEnd = false;
};
class Trie {
    private root: any;
    constructor() {
        this.root = new TrieNode()
    }
    public insert(word: string) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; ++i) {
            if (!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]];
        }
        node.isEnd = true;
        return true;
    }
    public search(word: string) {
        if (!word) return false;

        let node = this.root;
        for (let i = 0; i < word.length; ++i) {
            if (node.next[word[i]]) {
                node = node.next[word[i]];
            } else {
                return false;
            }
        }
        return node.isEnd;
    }
    public startsWith(prefix: string) {
        if (!prefix) return true;

        let node = this.root;
        for (let i = 0; i < prefix.length; ++i) {
            if (node.next[prefix[i]]) {
                node = node.next[prefix[i]];
            } else {
                return false;
            }
        }
        return true;
    }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
let trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");
trie.search("app");     // 返回 true
