/**
     * ORM
     *  对象关系映射
     *  把js中的对象与数据库进行关联（映射），后期通过操作对来来操作数据库
     * 
     * sequelize依赖了mysql2，但是没有默认安装，需要手动安装mysql2
     */
(async () => {
  const Sequelize = require ('sequelize');
  /**
     * 连接数据库
     */
  const sequelize = new Sequelize ('sxc1', 'root', '123456', {
    // 其他的数据库连接配置
    // host: '127.0.0.1',
    // port: 3306,

    dialect: 'mysql', //使用的数据库
    //   timezone: 'Asia/Shanghai', //当我们向数据库中写入时间的时候，默认会根据系统当前所在时区进行设置
  });

  // 测试：如果Promise有可能抛出的错误，那么一定要捕获错误
  try {
    sequelize.authenticate ();
    console.log ('连接成功');
  } catch (e) {
    console.log ('连接失败');
  }

  /**
     * 数据库连接完成以后，需要确定操作的表
     * 使用orm，不需要通过sql来操作表，而是通过对象来操作
     * 给每一个要操作的表定义一个对象 - 模型 Model
     */
  const UserModel = sequelize.define (
    'User',
    {
      // 描述表中对应的字段信息
      // 对象的key默认对应着表的column，字段
      // https://sequelize.org/v5/variable/index.html#static-variable-DataTypes
      id: {
        // 每一个字段的信息
        type: Sequelize.STRING (255),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        //   defaultValue: '',
      },
      username: {
        type: Sequelize.STRING (255),
        allowNull: false,
        defaultValue: '',
      },
      age: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      gender: {
        type: Sequelize.ENUM (['男', '女', '未知']),
        allowNull: false,
        defaultValue: '未知',
      },
    },
    {
      // 用来设置字段以外的其他信息
      timestamps: false,
      paranoid: false,
      freezeTableName: true,
      tableName: 'user',
      indexes: [
        {
          name: 'uname',
          fields: ['username'],
        },
        {
          name: 'age',
          fields: ['age'],
        },
      ],
    }
  );
  /**
     * 模型类 -> 表
     * 模型创建出来的对象 -> 表中某条记录
     */
  // let Kimoo = new UserModel (); //创建了一个User的记录

  // let Kimoo = UserModel.build ({
  //   // 字段对应的值
  //   username: 'Kimoo',
  //   age: 30,
  //   gender: '男',
  // }); //和上面的new是一样的

  // await Kimoo.save()

  // console.log(Kimoo);
  // let kk = await UserModel.findByPk (13);
  // console.log (kk);

  /**
     * fineOne
     */
  //   let rs = await UserModel.findOne ({
  //     where: {
  //       username: 'Kimoo',
  //     },
  //   });
  //   console.log (rs.dataValues);
  /**
     * findAll
     */
  /*
  let rs = await UserModel.findAll ({
    where: {
      // username: 'Kimoo',
      // username: {
      //     [Sequelize.Op.eq]:'Kimoo'
      // },
      // age:{
      //     // [Sequelize.Op.lt]:25   //小于
      //     // [Sequelize.Op.gt]:25   //大于
      //     [Sequelize.Op.gte]:25   //大于等于
      // }
      // 多条件
      [Sequelize.Op.or]: [
        {gender: '女'},
        {
          age: {
            [Sequelize.Op.gte]: 25,
          },
        },
      ],
    },
  });
*/
  //   let rs = await UserModel.findAll ({
  //     offset: 2,
  //     limit: 2,
  //   });
  //   let rs = await UserModel.findAll ({
  //     order: [['age', 'desc']],
  //   });

  //   let res = await UserModel.count ();
  //   let res = await UserModel.findAndCountAll ({
  //       limit:2
  //   });
  //   let res = await UserModel.sum ('age');
  //   let res = await UserModel.sum ('age', {
  //     where: {
  //       gender: '女',
  //     },
  //   });
  //   console.log (res);
  //   console.log (rs.map (v => v.dataValues));
  //   console.log (rs.map (v => v.get ('username')));

  // 关联查询
  const MessageModel = sequelize.define (
    'message',
    {
      id: {
        type: Sequelize.INTEGER (10),
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      uid: {
        // 其他的表的字段，把当前字段定义为外键
        type: Sequelize.INTEGER (10),
        defaultValue: 0,
        references: {
          model: UserModel,
          key: 'id',
        },
      },
      content: {
        type: Sequelize.STRING (255),
        allowNull: true,
        defaultValue: '',
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'message',
    }
  );
  //   let res = await MessageModel.count ();
  //   console.log (res);

  //   let data = {};
  //   let msg = await MessageModel.findByPk (1);

  //   console.log(msg.dataValues)

  MessageModel.belongsTo (UserModel, {
    foreignKey: 'uid',
  });

  let data2 = await MessageModel.findByPk (1, {
    include: [UserModel],
  });

  console.log (data2);

  console.log (`
    
        留言id：${data2.get ('id')}
        留言人名称：${data2.User.username}
        留言内容：${data2.get ('content')}
    
    `);
}) ();
