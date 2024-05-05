const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "auth-service",
  brokers: ["kafka:9092"],
});

module.exports = kafka