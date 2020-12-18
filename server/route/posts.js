import express from "express"
import{getPosts , createPosts, updatePost ,deletePost,likePost} from "../controllers/posts.js"

const router = express.Router()
// when someone visit and read
router.get("/", getPosts )
//when insert data
router.post("/", createPosts )

router.patch("/:id", updatePost)

router.delete("/:id", deletePost)

router.patch("/:id/likePost", likePost)

export default router 