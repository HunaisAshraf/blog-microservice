const { addUser } = require("../controller/postController");
const kafka = require("../kafka/kafkaConfig");

async function consume() {
  try {
    const consumer = kafka.consumer({ groupId: "post-group" });
    await consumer.connect();
    await consumer.subscribe({
      topics: ["add-user", "add-comment"],
      fromBeginning: true,
    });
    console.log("post adding user");
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log("post received message", topic);
        const value = JSON.parse(message.value.toString());
        if (topic === "add-user") {
          addUser(value);
        }else if(topic === "add-comment"){
          addComment(value)
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = consume;
