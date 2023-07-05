const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ciednermabale:09205166719W!cked@cluster0.5lga3fu.mongodb.net/test-admin")

.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    hrsPay: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    free: {
      type: String,
      required: true
    },
    numberOfFloors: {
      type: Number,
      required: true
    },
    floorValues: [String],
    selectedOption: {
      type: String,
      required: true
    },
    selectOption2: {
      type: String,
      required: true
    }
  });
  
const collection = mongoose.model("collection",newSchema)

module.exports=collection