import mongoose, { Connection } from "mongoose";

const connection = {};

async function connectDb() {
  if (Connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
