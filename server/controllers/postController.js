import db from './../models';

const postController = {};

postController.post = (req, res) => {
    const {
        title,
        text,
        link,
        userId // it's not safe to pass de user id. later this must be replaced by jwt
    } = req.body;

    // validation: either text or link must be passed, not both
    

    const post = db.Post({
        title,
        text,
        link,
        _creator: userId
    });

    post.save().then( (newPost) => {
        return res.status(200).json({
            success: true,
            data: newPost
        })
    }).catch( (err) => {
        return res.status(500).json({
            message: err
        })
    });
};

export default postController;