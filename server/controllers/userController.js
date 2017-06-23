import db from './../models';

const userController = {};

userController.post = (req, res) => {
    const { username, password } = req.body;

    // validations here

    const user = new db.User({
        username,
        password
    });

    user.save().then( (newUser) => {
        return res.status(200).json({
            success: true,
            data: newUser
        })
    }).catch( (err) => {
        return res.status(500).json({
            message: err
        })
    });
};

export default userController;