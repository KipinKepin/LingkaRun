import express from "express";

const router = express.Router();

router.get("/tes", (req, res) => {
  res.send("hello from router");
});

export default router;
