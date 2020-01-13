'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable (
      'user',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          commnet: '用户id',
        },
        username: {
          type: Sequelize.STRING (50),
          unique: true,
          allowNull: false,
          defaultValue: '',
          commnet: '用户名',
        },
        password: {
          type: Sequelize.CHAR (32),
          allowNull: false,
          defaultValue: '',
          commnet: '密码',
        },
        disabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
          commnet: '是否 是禁用状态',
        },
        mobile: {
          type: Sequelize.CHAR (12),
          unique: true,
          allowNull: false,
          defaultValue: '',
          commnet: '手机号',
        },
        email: {
          type: Sequelize.STRING (50),
          unique: true,
          allowNull: false,
          defaultValue: '',
          commnet: '邮箱',
        },
        createdIpAt: {
          type: Sequelize.CHAR (15),
          allowNull: false,
          field: 'created_ip_at',
          defaultValue: '',
          commnet: '用户注册的ip',
        },
        updatedIpAt: {
          type: Sequelize.CHAR (15),
          allowNull: false,
          field: 'updated_ip_at',
          defaultValue: '',
          commnet: '用户最新一次登录的IP',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at',
          commnet: '用户注册的时间',
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'updated_at',
          commnet: '用户最新一次登录的时间',
        },
      },
      {
        tableName: 'user',
        charset: 'utf8mb4',
        collate: 'utf8mb4_bin',
        indexes: [{}],
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable ('user');
  },
};
