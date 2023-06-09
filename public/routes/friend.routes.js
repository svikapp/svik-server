"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const friend_controller_1 = require("../controllers/friend.controller");
const friendRouter = (0, express_1.Router)();
friendRouter.post("/create", friend_controller_1.FriendController.sendFriendRequest);
friendRouter.put("/accept", friend_controller_1.FriendController.acceptFriendRequest);
friendRouter.put("/decline", friend_controller_1.FriendController.declineFriendRequest);
friendRouter.get("/list", friend_controller_1.FriendController.getFriends);
exports.default = friendRouter;
