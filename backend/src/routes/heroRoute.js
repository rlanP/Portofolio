const express = require("express");
const router = express.Router();

router.get("/api/hero", (req,res) => {
    res.json({
        nama: "Erlan Yusuf Rafif",
        peran: "Fullstack Web Developer",
        deskripsi: "Saya siswa XII RPL 1 yang sedang belajar membuat website menggunakan express"
    })
})

module.exports = router;

