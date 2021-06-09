//EXTERNAL IMPORT
const {validationResult} = require('express-validator')

//INTERNAL IMPORT
const Post = require('../model/post')

//GET ALL POST FROM DB
exports.getPosts =  (req, res, next) => {
Post.find()
.then(posts => {
    if(!posts){
        const error = new Error('Failed Fetching Post!')
        error.statusCode = 402
        throw error
    }
    res.status(200)
    .json({message: 'Posts Fetched Successfully!'
    , posts: posts})
}).catch(err => {
if(!err.statusCode){
    err.statusCode = 402

}
next(err)
})

}

//CREATE NEW POST
exports.createPost =  (req, res, next) => {
const errors = validationResult(req)
if(!errors.isEmpty()){
    const error = new Error('Validation Failed')
    error.statusCode = 402
    error.data = errors.array()
    throw error
}

const title = req.body.title
const description = req.body.description
const content = req.body.content
const creator = req.body.creator
const post = new Post({
    title: title,
    description: description,
    content: content,
    creator: creator,
    })
    post.save()
    .then(post => {
        res.status(201)
        .json({message: 'Post Created Succesfully', 
        post: post})
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })


}

//GET A SINGLE POST FROM DB
exports.getPost =  (req, res, next) => {
const postId = req.params.postId
Post.findById(postId)
.then(post => {
    if(!post){
        const error = new Error
        (`No Post found with the Id ${postId}`)
        error.statusCode = 402
        throw error
    }
    res.status(200)
    .json({message: 'Post fetched successfully!',
    post: post})
}).catch(err => {
    if(!err.statusCode){
        err.statusCode = 500
    }
    next(err)
})
}

//UPDATE A SINGLE POST 
exports.updatePost =  (req, res, next) => {
const postId = req.params.postId
const errors = validationResult(req)
if(!errors.isEmpty()){
    const error = new Error('Validation Failed')
    error.statusCode = 402
    throw error
}
const title = req.body.title
const description = req.body.description
const content = req.body.content
const creator = req.body.creator
Post.findById(postId)
.then(post => {
        if(!post){
        const error = new Error('Post not found')
        error.statusCode = 402
        throw error   
    }

post.title = title,
post.description = description,
post.content = content,
post.creator = creator
return post.save()
}).then(result => {
    res.status(200)
    .json({message: 'Post Updated Sucessfully!', 
    post: result})
}).catch(err => {
    if(!err.statusCode){
        err.statusCode = 500
    }
    next(err)
})

}

//DELETE A SINGLE POST FROM DB
exports.deletePost =  (req, res, next) => {
const postId = req.params.postId
Post.findById(postId)
.then(post => {
    if(!post){
        const error = new Error('Post not found')
        error.statusCode = 402
        throw error  
    }
return Post.findByIdAndRemove(postId)
}).then(result => {
    res.status(200)
    .json({message: 'Post Deleted sucessfully!'})
}).catch(err => {
    if(!err.statusCode){
        err.statusCode = 500
    }
    next(err)
})

}