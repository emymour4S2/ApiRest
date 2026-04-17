const mongoose = require('mongoose');


const MONGO_URI =
'mongodb+srv://emilly:O5NrmKx5ycTqWDVV@cluster0.oho05mk.mongodb.net/cadastro?retryWrites=true&w=majority';

async function connectDatabase() {
  await mongoose.connect(MONGO_URI);
  console.log('MongoDB conectado com sucesso.');
}

module.exports = connectDatabase;