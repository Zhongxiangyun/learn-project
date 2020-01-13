(async function () {
  const mysql = require ('mysql2/promise');
  const connection = await mysql.createConnection ({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'test',
  });
  // 简单查询
  connection.query ('SELECT * FROM `users`', function (err, results, fields) {
    console.log ( results[0].age); // results contains rows returned by server
    // console.log (fields); // fields contains extra meta data about results, if available
  });
  /**
     * arr返回一个数组，第一个数组是记录的值，第二个数组是记录中包含的字段的信息
     */
    let arr = await connection.query("SELECT username,age,gender FROM users");
    console.log(arr);

    /**
     * 解构赋值
     */
    let [users] = await connection.query("SELECT username,age,gender FROM users");
    console.log(users);

    users.forEach(user => {
        console.log(user.username);
    });
}) ();
