const express = require("express");
const router = express.Router();

router.post("/api/messages", (req, res) => {
  const { name, email, message } = req.body;
  res.json({
    success: true,
    message: "Pesan berhasil dikirim (Mock)",
    data: { name, email, message }
  });
});

module.exports = router;