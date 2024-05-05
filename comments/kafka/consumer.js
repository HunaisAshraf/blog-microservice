const kafka = require("./kafkaConfig");

async function consume() {
  try {
    const consumer = kafka.consumer({groupId:"comments-group"});
    await consumer.connect();
    await consumer.subscribe({
      topics: ["add-user"],
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
