db.log.insertOne({ message: "Database created." });

db.createUser({
  user: "possybl",
  pwd: "possybl",
  roles: ["readWrite", "dbAdmin"],
});
