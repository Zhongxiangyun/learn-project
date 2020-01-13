# 安装
```bash
npm i mysql2 koa koa-static-cache koa-router koa-bodyparser
```
# 数据库
	node & mysql - mysql2
	安装
		npm i mysql2
	使用
		const mysql = require('mysql2/promise')
    连接数据库
		const connection = await mysql.createConnection(opts)
	选项
		host：数据库服务器
		user：数据库连接用户名称
		password：数据连接密码
		database：要操作的数据库
	查询所有数据
		SELECT * FROM table_name
		实际使用中，并不推荐 * 
		SELECT column_name,column_name FROM table_name
	别名
		可以给 字段 和 表 加别名
		SELECT column_name as c1,column_name as c2 FROM table_name as t WHERE t.column_name = val
	connection.query( SQL语句 )

		返回值依据其操作来决定
			- SELECT：[数据集合，字段集合]
	条件查询
		SELECT column_name,column_name
		FROM table_name
		[WHERE Clause]
	WHERE 子句
		WHERE condition1 [AND [OR]] condition2.....
		操作符
			=、<>,!=、>、<、>=、<=
	查询参数占位符
		.query('SELECT ??,?? FROM ?? WHERE ?? = ?', ['id','username','users','id',1])
			??：字段名、表名
			?：值
	数量限制查询
		SELECT column_name,column_name
		FROM table_name
		[LIMIT N]
		
		N：数字，要限制的查询数据的最大条数	
	查询偏移
		SELECT column_name,column_name
		FROM table_name
		[LIMIT N] [OFFSET M]
		
		M：数字，要偏移的数量值，从 0 开始
		OFFSET必须与LIMIT一起使用，且LIMIT在前
	偏移与限制
		SELECT column_name,column_name
		FROM table_name
		[LIMIT [M, ]N]

		注意，这种写法偏移在前，限制在后，如果只有一个数字，默认为限制
	添加数据
		INSERT INTO table_name ( field1, ...fieldN )
                       VALUES ( value1, ...valueN );
	Node.js - mysql2
		connection.query('INSERT INTO `users` SET ?', {key:value,...})
	返回值依据其操作来决定
		- INSERT INTO：[{affectedRows ,insertId}，undefined]
	更新数据
		INSERT INTO table_name ( field1, ...fieldN )
                       VALUES ( value1, ...valueN );
	Node.js - mysql2
		connection.query('INSERT INTO `users` SET ?', {key:value,...})
	返回值依据其操作来决定
		- INSERT INTO：[{affectedRows ,insertId}，undefined]
	删除数据
		DELETE FROM table_name [WHERE];
	Node.js - mysql2
		connection.query('DELETE FROM `users` WHERE id=?', [1])
	返回值依据其操作来决定
		- INSERT INTO：[{affectedRows}，undefined]
	DISTINCT
		查询表中不重复的记录，如果指定多个字段，则作为联合条件
		SELECT DISTINCT column_name,column_name... FROM table_name
	LIKE
		模糊查询，通常与 % 配合使用，不使用 % 同 =
		% 类似 * 的作用，通配
			%miaov：以 miaov 结尾的内容
			miaov%：以 miaov 开头的内容
			%miaov%：包含 miaov 的内容
		SELECT column_name... FROM table_name WHERE column_name LIKE %miaov%
	NOT LIKE：与 LIKE 相反
	IN
		多值匹配
		SELECT column_name... FROM table_name  WHERE column_name IN (value1, value2...)
	NOT IN
		与 IN 相反
	BETWEEN
		范围查询
		SELECT column_name... FROM table_name  WHERE column_name BETWEEN value1 AND value2
	NOT BETWEEN
		与 BETWEEN 相反
	ORDER BY
		按照某个字段某种规则进行排序
		SELECT column_name... FROM table_name  ORDER BY column_name1 DESC, column_name2 ASC
		DESC：降序
		ASC：升序，默认
## 函数
	SQL 也提供了一些内置函数，以便对数据进行一些常规操作
			- 聚合函数
				计算从列中取得的值，返回一个单一的值，如：COUNT、SUM、MAX、MIN
			- 标量函数
				基于输入值，返回一个单一的值，如：UCASE、LCASE、NOW
		- COUNT()
		返回匹配指定条件的行数
		SELECT COUNT(column_name) FROM table_name
		- SUM()
		返回数值列的总数
		SELECT SUM(column_name) FROM table_name
		- AVG()
		返回数值列的平均值
		SELECT AVG(column_name) FROM table_name
		- MAX()
		返回指定列的最大值
		SELECT MAX(column_name) FROM table_name
		- MIN()
		返回指定列的最小值
		SELECT MIN(column_name) FROM table_name
		- UCASE()
		把字段的值转换为大写
		SELECT UCASE(column_name) FROM table_name
		- LCASE()
		把字段的值转换为小写
		SELECT LCASE(column_name) FROM table_name
		- MID()
		从文本字段中提取指定字符
		SELECT MID(column_name,start[,length]) FROM table_name
			start：从1开始计算
		- LENGTH()
		返回文本字段中值的长度（注意是字符的长度，一个中文占3个字节）
		SELECT LENGTH(column_name) FROM table_name
		- NOW()
		返回当前系统的日期和时间
		SELECT NOW() FROM table_name
		- GROUP BY
		用于结合聚合函数，根据一个或多个列对结果集进行分组
		SELECT column_name... FROM table_name  GROUP BY column_name1
## 参考：
		存储引擎：https://dev.mysql.com/doc/refman/5.7/en/storage-engine-setting.html
		字符集、编码：https://dev.mysql.com/doc/refman/5.7/en/charset.html
		数据类型：https://dev.mysql.com/doc/refman/5.7/en/data-types.html
		主键：https://dev.mysql.com/doc/refman/5.7/en/primary-key-optimization.html
		自动增长：https://dev.mysql.com/doc/refman/5.7/en/example-auto-increment.html
		索引：https://dev.mysql.com/doc/refman/5.7/en/column-indexes.html
## 存储引擎
		数据在计算机上存储的方式
		MySQL常见存储引擎：InnoDB、MyISAM等
			- InnoDB的优势在于提供了良好的事务处理、崩溃修复能力和并发控制。缺点是读写效率较差，占用的数据空间相对较大
			- MyISAM的优势在于占用空间小，处理速度快。缺点是不支持事务的完整性和并发性
	
## 字符集、编码
			指数据库存储的数据的编码
				- utf8mb4：支持更多的unicode字符（四字节）
## 数据校对
			数据库除了要存储数据，还要对数据进行排序，比较等操作，不同的校对规则会有不同的结果
				- utf8mb4_unicode_ci：基于标准的Unicode来排序和比较，能够在各种语言之间精确排序
		
			_bin、_cs：区分大小写
			_ci：不区分大小写
## 数据类型
		数据存储的类型
			数字类型：INTEGER, INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT, DECIMAL, NUMERIC, FLOAT, DOUBLE
			日期时间类型：DATE, DATETIME, TIMESTAMP, TIM, YEAR
			字符串类型：CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TEXT, ENUM, SET	
		主键
		表中的一个或多个字段，它的值用于唯一地标识表中的某一条记录，用来保持数据的完整性
			- 一个表只能有一个主键
			- 主键可以是一个字段，也可以由多个字段组成
			- 主键值不能重复
			- 加快对数据的操作	
		自增
		auto_increment
			添加数据的时候由数据库自动设置的值
			一般在设计表的时候会设置一个自动增加字段作为主键
		索引
		对表中一列或多列（注意是列）的值进行排序的一种结构，使用索引可以快速访问表中特定的信息
		加快对表中记录的查找或排序	

