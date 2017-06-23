import mongoose from 'mongoose';

const { Schema } = mongoose;

const voteSchema = new Schema ({

});

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;