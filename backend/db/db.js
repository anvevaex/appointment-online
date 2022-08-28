const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customer');
const db = mongoose.connection;

db.on('error', error => {
    console.warn('数据库连接失败', error);
});

db.once('connected', () => {
    console.log('数据库连接成功');
});

db.on('disconnected', () => {
    console.log('数据库断开连接');
});

module.exports = mongoose;
