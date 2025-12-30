// tasleem123
// Tasleem123
// mongodb+srv://tasleem123:<db_password>@cluster0.ce9ffyd.mongodb.net/?appName=Cluster0
const{mongoose}=require('mongoose');
mongoose.connect('mongodb+srv://tasleem123:Tasleem123@cluster0.ce9ffyd.mongodb.net/?appName=Cluster0')
.then(()=>{
    console.log("connected to mongodb 💋😀");
}).catch((err)=>{
    console.log("error connecting to mongodb", err);
});

