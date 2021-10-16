const mongoose = require("mongoose");

// Create schema
const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
    },
    { timestamps: true }
);

// mongoose.model to create a new model
// We can use task model later in the project
module.exports = mongoose.model("Task", taskSchema);
