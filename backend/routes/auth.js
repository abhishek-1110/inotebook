const express = require('express');
const User = require('../models/User');
const router = express.Router();

// create a user using : POST "/api/auth/". Doesn't rquire auth
router.post('/', (req, res) => {
    const user = User(req.body);
    user.save();
    console.log("Data saved successfully");
    res.send(req.body);
})


module.exports = router;