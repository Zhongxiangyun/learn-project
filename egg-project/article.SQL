-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'egg_article'
)
CREATE DATABASE egg_article
GO

CREATE TABLE article(
    id INT(10) NOT NULL auto_increment,
    img text DEFAULT NULL COMMENT '图片',
    title VARCHAR(80) DEFAULT NULL COMMENT '标题',
    summary VARCHAR(300) DEFAULT NULL COMMENT '简介',
    content text DEFAULT NULL COMMENT '内容',
    createTime TIMESTAMP DEFAULT NULL COMMENT '发布时间',
    updateTime TIMESTAMP DEFAULT NULL COMMENT '更新时间',
    PRIMARY key(id)
) engine=InnoDB auto_increment=1 COMMENT '文章表';