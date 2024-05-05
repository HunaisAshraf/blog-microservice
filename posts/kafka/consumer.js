const { addUser } = require("../controller/postController");
const kafka = require("../kafka/kafkaConfig");

async function consume() {
  try {
    const consumer = kafka.consumer({groupId:"post-group"});
    await consumer.connect();
    await consumer.subscribe({
      topics: ["add-user", "add-comment"],
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (topic, partition, message) => {
        console.log(message.value);
        if (topic === "add-user") {
          // addUser()
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = consume;
