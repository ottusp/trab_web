const Comment = require('../models/Comment');

module.exports = {
    async store (req, res) {
        try {
            var comment = await Comment.create({ 
                user: req.body?.user,
                rating: req.body?.product,
                product: req.body?.rating,
                content: req.body?.content
            });
        } catch (err) {
            console.log(err);
            return res.status(500).end();
        }

        if (!comment) {
            return res.status(500).end();
        }

        return res.status(200).json(comment);
    },

    async show (req, res) {
        if (req.query?.id) {
            try {
                var comments = await Comment
                .find({
                    product: req.query?.id,
                }, 'user rating content')
                .populate('user', 'name');
            } catch (err) {
                if (err.kind == "ObjectId") {
                    return res.status(404).end();
                }
                console.log(err);
                return res.status(500).end();
            }
        }

        if (!req.query?.id) {
            return res.status(404).end();
        }

        return res.status(200).json(comments);
    }

}