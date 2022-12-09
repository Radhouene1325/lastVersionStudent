const Post = require('../models/postModel')
const Comment = require('../models/commentaireModel.js');

const AllPost = require('../models/postModel')

module.exports = {

    create: (req, res) => {

        console.log(req, 'subbbbbbb');
        const data = {

            user: req.body.user,
            text: req.body.text,
            image: req.body.image

            //
            // req.file && req.file.filename 
        }

        console.log(data);
        const t = new Post(data)
        t.save().then(t => t.populate('user', 'name')

            .then(post => {
                res.status(200).json({
                    message: 'post created',
                    data: post
                })
            })

            .catch(err => {
                res.status(500).json({
                    message: 'post not created ' + err,
                    data: null,

                })
            })
        )
    },

    deletepost: (req, res) => {
      
    
        Post.findByIdAndRemove({ _id: req.params.id })
        .populate('user')
       
        .then(post => {
           
            res.status(200).json({ message: "post", data: post })
        })
        .catch(err => {
            res.status(500).json({ message: "post not found", data: null })
        })
    },
    


    getById: (req, res) => {
        Post.findById({ _id: req.params.id })
            .populate('user')
            .then(post => {
                res.status(200).json({ message: "post", data: post })
            })
            .catch(err => {
                res.status(500).json({ message: "post not found", data: null })
            })
    },

    getAll: (req, res) => {

        Post.find({})
            .populate('user')
            .populate({ path: 'comments', populate: { path: 'user' } })
            .then(posts => {



                res.status(200).json({ message: "postsfind", data: posts })
            })

            .catch(err => {
                res.status(500).json({ message: "no posts in system", all: null })
            })


    },

    updatePost: (req, res) => {
        Post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },

            (err, post) => {
                if (err) {
                    res.status(500).json({ message: "post not updated", data: null })

                } else {

                    res.status(200).json({ message: "post successfuly updated", data: post })
                }
            })
    },

    getOwnPosts: (req, res) => {
        const { sub } = req.user

        Post.find({ user: sub })
            .populate('user')
            .populate({ path: 'comments', populate: { path: 'user' } })
            .then(posts => {
                res.status(200).json({
                    message: 'user posts',
                    data: posts
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'no user posts',
                    data: null
                })
            })
    },

    like: (req, res) => {
        console.log(req.body.post)
        console.log(req.body.user)

        Post.findOneAndUpdate({ _id: req.params.id }, { $push: { likes: req.body } }, { new: true })
            .populate('user')
            .populate({ path: 'likes', populate: { path: 'user' } })
            .then(postlike => {
                res.status(200).json({
                    message: "post liked",
                    data: postlike
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "post not liked"
                })
            })
    },

   

    dislike: async (req, res) => {

        // const post = await Post.findById({ _id: req.params.id })
        // const newpost = new Post(post)
        // newpost.likes.filter(uid => uid !== req.user.sub)

        await Post.findByIdAndUpdate({ _id: req.params.id }, { $pull: { likes: req.body } }, { new: true })
            .populate('user')
            .populate({ path: 'likes', populate: { path: 'user' } })
            .then(post => {
                res.status(200).json({
                    message: "post disliked",
                    data: post
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "post not liked" + err
                })
            })
    }

}