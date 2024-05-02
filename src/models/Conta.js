import mongoose from "mongoose";


const contaSchema = new mongoose.Schema(

   { id:{type:String},
   nome:{type:String, required:true},
   natureza:{type:String, required:true},
   enquadramento: {type:String, required:true},
   mod_despesa: {type:String, required:true},
   saldo: {type: Number}
}


);

const contas = mongoose.model('contas2023', contaSchema);

export default contas;