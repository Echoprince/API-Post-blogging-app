
//EXTERNAL IMPORT
const express = require('express')
const {body} = require('express-validator')

//INTERNAL IMPORT
const feedController = require('../controller/feed')

//NITTIALIZE ROUTER
const router = express.Router()

//GET - FETCH ALL POST
router.get('/posts', 
feedController.getPosts)

//POST - TO CREATE NEW POST TO DB
router.post('/post',  [
body('title')
.trim()
.isLength({min: 5})
.notEmpty(), 
body('content')
.trim(),
body('description')
.trim()
.notEmpty(), 
body('creator')
.trim()
.notEmpty()
] ,
feedController.createPost)

//GET - FATCH A SINGLE POST FROM DB
router.get('/post/:postId', 
feedController.getPost )

//PUT - UPDATE A SINGLE POST 
router.put('/post/:postId', 
[
body('title')
.trim()
.isLength({min: 5})
.notEmpty(), 
body('content')
.trim(),
body('description')
.trim()
.notEmpty(), 
body('creator')
.trim()
.notEmpty()
] , 
feedController.updatePost)

//DELETE - DELETE A SINGLE POST FROM DB
router.delete('/post/:postId', 
feedController.deletePost)

module.exports = router