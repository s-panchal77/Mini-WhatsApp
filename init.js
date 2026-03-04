const mongoose = require("mongoose");
const Chat = require("./Models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "neha",
    msg: "sure, i'll send them by evening",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "amit",
    msg: "are we meeting tomorrow?",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "rahul",
    msg: "yes, at 5pm in the cafe",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
