const Task = require("../models/task");

exports.create = (req, res) => {
    const task = new Task(req.body);
    task.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Error, something went wrong while adding a new task", // custom method to display a friendly error message
            });
        }
        res.json({ data });
    });
};

exports.list = (req, res) => {
    Task.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Error, something went wrong while displaying tasks",
            });
        }
        res.json(data);
    });
};
