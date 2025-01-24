const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUser,
  handleCreateNewUser
} = require("../controllers/user");
const router = express.Router();

// Route to get all users
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

// Route to handle specific user actions (get by ID and update by ID)
router
.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUser);

// Export the router
module.exports = router;
