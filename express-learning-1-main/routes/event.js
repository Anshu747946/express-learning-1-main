const express = require("express");
const {
    getEventsController,
    addEventController,
} = require("../controller/event");
const router = express.Router();

router.get("/get", getEventsController);
router.post("/add", addEventController);

// router.post("/post", addEventController);
module.exports = router;