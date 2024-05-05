const { Kafka } = require("kafkajs");

module.exports = new Kafka({
  clientId: "blog-service",
  brokers: ["localhost:9092"],
});


