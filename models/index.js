const User = require('./user');
const Blog = require('./blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Blog, {
    foreignKey: 'user_name',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_name',
});

module.exports = { User, Blog };