const Sequelize = require('sequelize');

const sequelize = new Sequelize('sxc1', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('连接成功')
}).catch(err => {
    console.log('连接失败')
});

// 定义模型
const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    age: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('男', '女'),
        allowNull: false
    }
}, {

    timestamps: false,
    tableName: 'user'
});

// User.findAll().then( users => {
//     // console.log(users);

//     users.forEach(user => {
//         console.log(user.get('username'));
//     })
// } )

// let zhangsan = User.build({
//     username:'张三',
//     age: 20,
//     gender: '男'
// });

// zhangsan.set('age', 25);

// zhangsan.save();


// User.findById(10).then(user => {
//     // console.log(user);
//     user.set('username', '李四');
//     user.save();
// })