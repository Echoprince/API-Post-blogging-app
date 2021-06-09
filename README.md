# A Simple CRUD app for Posts of a Blogging app

Rest Api Using Node.js, Express and MongoDB.

**Author:** Uchenna Prince Chieke

**Environments**

Node version - v14.15.0

**This application uses the following technologies:**

- [nodeJs]
- [expressJs]
- [mongoDB]

note: `run all commands in the IDE Terminal eg. Visio Studio Code`

**Install all dependencies**

```
npm Install --save
```
**Install all Devdependencies**

```
npm Install --save-dev
```

**Start the applications**

```
npm start
```

## To test the application on Postman

```
Postman
```

## Create A New Post

**Endpoint** `http://localhost:3000/feed/post` - Method (POST)


**Response format**

```json

{
    "message": "Post Created Succesfully",
    "post": {
        "_id": "60c01a14b825cc2664fef672",
        "title": "Coding Test",
        "description": "Interview Test work",
        "content": "You should code and always make verifications",
        "creator": "Uchenna Chieke",
        "createdAt": "2021-06-09T01:32:04.157Z",
        "updatedAt": "2021-06-09T01:32:04.157Z",
        "__v": 0
    }
}

```

## Get All Posts From DB

**Endpoint** `http://localhost:3000/feed/posts` - Method (GET)


**Response format**

```json

{
    "message": "Posts Fetched Successfully!",
    "posts": [
        {
            "_id": "60bfdf79abdace2a7c929133",
            "title": "The word",
            "description": "The dock",
            "content": "This is a word that can be made",
            "creator": "Uchenna Chieke",
            "createdAt": "2021-06-08T21:22:01.999Z",
            "updatedAt": "2021-06-08T21:22:01.999Z",
            "__v": 0
        },
        {
            "_id": "60bfdf9eabdace2a7c929134",
            "title": "Show Base",
            "description": "The dock",
            "content": "This is a word that can be made",
            "creator": "Prince",
            "createdAt": "2021-06-08T21:22:38.978Z",
            "updatedAt": "2021-06-08T21:22:38.978Z",
            "__v": 0
        },
        {
            "_id": "60c01a14b825cc2664fef672",
            "title": "Coding Test",
            "description": "Interview Test work",
            "content": "You should code and always make verifications",
            "creator": "Uchenna Chieke",
            "createdAt": "2021-06-09T01:32:04.157Z",
            "updatedAt": "2021-06-09T01:32:04.157Z",
            "__v": 0
        }
    ]
}

```

## GET A Single Post from DB

**Endpoint** `http://localhost:3000/feed/post/60c01a14b825cc2664fef672` - Method (GET)


**Response format**

```json

{
    "message": "Post fetched successfully!",
    "post": {
        "_id": "60c01a14b825cc2664fef672",
        "title": "Coding Test",
        "description": "Interview Test work",
        "content": "You should code and always make verifications",
        "creator": "Uchenna Chieke",
        "createdAt": "2021-06-09T01:32:04.157Z",
        "updatedAt": "2021-06-09T01:32:04.157Z",
        "__v": 0
    }
}

```

## Update A Single Post from DB

**Endpoint** `http://localhost:3000/feed/post/60c01a14b825cc2664fef672` - Method (PUT)


**Response format**

```json

{
    "message": "Post Updated Sucessfully!",
    "post": {
        "_id": "60c01a14b825cc2664fef672",
        "title": "Coding Test II",
        "description": "Interview Test work",
        "content": "You should code and always make verifications",
        "creator": "Uchenna Chieke",
        "createdAt": "2021-06-09T01:32:04.157Z",
        "updatedAt": "2021-06-09T01:35:53.604Z",
        "__v": 0
    }
}

```

## Delete A Single Post from DB

**Endpoint** `http://localhost:3000/feed/delete/60bfdf9eabdace2a7c929134` - Method (DELETE)


**Response format**

```json

{
    "message": "Post Deleted sucessfully!"
}

```

### application/json
