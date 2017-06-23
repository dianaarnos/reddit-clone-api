import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema ({

});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;