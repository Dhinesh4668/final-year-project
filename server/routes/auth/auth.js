import express from "express";
import { auth } from "../../Controllers/auth/auth";

const router = express.Router();

router.post("/signUp", auth);

router.post("/login", (req, res)=> {
    res.send("hello ")
})

export default router