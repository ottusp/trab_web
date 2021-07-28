const Comment = require('../models/Comment');

module.exports = {
    //post method for newly created comments
    async store (req, res) {
        try {
            var comment = await Comment.create({ 
                user: req.body?.user,
                rating: req.body?.rating,
                product: req.body?.product,
                content: req.body?.content
            });
        } catch (err) {//error
            console.log(err);
            return res.status(500).end();
        }
        //if the post method on server was not succeed
        if (!comment) {
            return res.status(500).end();
        }

        return res.status(200).json(comment);
    },


    
    //get method for comments by id passed by query
    async show (req, res) {
        if (req.query?.id) {
            try {
                var comments = await Comment
                .find({
                    product: req.query?.id,
                }, 'user rating content')
                .populate('user', 'name');
            } catch (err) {//error
                if (err.kind == "ObjectId") {
                    return res.status(404).end();
                }
                console.log(err);
                return res.status(500).end();
            }
        }
        //if any id was passed by query
        if (!req.query?.id) {
            return res.status(404).end();
        }

        return res.status(200).json(comments);
    }

}