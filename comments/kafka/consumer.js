const { addPost, addUser } = require("../controller/commentController");
const kafka = require("./kafkaConfig");

async function consume() {
  try {
    const consumer = kafka.consumer({groupId:"comments-group"});
    await consumer.connect();
    await consumer.subscribe({
      topics: ["add-user","add-post"],
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({topic, partition, message}) => {
        const value = JSON.parse(message.value.toString());
        if (topic === "add-user") {
          addUser(value);
        }else if(topic === "add-post"){
          addPost(value)
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = consume;
