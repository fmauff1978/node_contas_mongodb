import mongoose from "mongoose";

mongoose.connect("mongodb+srv://fabiomedeiros:vasco1978@cluster0.rkkkm9f.mongodb.net/resultado_das_contas");

let db = mongoose.connection;


export default db;