// Create an association between the models and import them
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Create the model associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});