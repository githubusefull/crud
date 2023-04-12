const  express = require ('express');
const cors = require ('cors');
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
mongoose.connect("mongodb://localhost:27017/register")
.catch((err) => console.log(err));
const postSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    password:String,
})
const Post = mongoose.model("Post", postSchema);

app.post("/register", (req, res) => {
    Post.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,

    })
    .then((tr) => console.log(tr))
    .catch((err) => console.log(err))

})
app.get("/Allregister", (req, res) => {
    Post.find()
    .then((tr) => res.json(tr))
    .catch((err) => console.log(err))

})
app.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({_id: req.params.id})
    .then((tr) => console.log(tr))
    .catch((err) => console.log(err))
})
app.put("/update/:id", (req, res) => {
    Post.findByIdAndUpdate({_id: req.params.id}, {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,

    })
    .then((trr) => console.log(trr))
    .catch((ertr) => console.log(ertr))
})
app.listen(8000, function(){
    console.log('Server runing');
});