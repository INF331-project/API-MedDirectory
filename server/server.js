import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log(err.message);
});
console.log(process.env.MONGO_URL);

app.listen(port, () => console.log(`Server running on port ${port} s`));