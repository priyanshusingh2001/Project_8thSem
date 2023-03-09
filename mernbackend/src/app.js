const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");



const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/register", (req, res) => {
    res.render("register");
});

// create a new user in db
app.post("/register", async (req, res) => {
    try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password == cpassword){
            const registerStudent = new Register({
                fname: req.body.fname,
                email : req.body.email,
                roll : req.body.roll,
                phone : req.body.phone,
                password : req.body.password,
                cpassword : req.body.cpassword,
                type: req.body.type,
                gender : req.body.gender
            })

            const registered = await registerStudent.save();
            res.status(201).render("index");
        }else{
            res.send("password are not matching")
        }

    } catch (error) {
        res.status(400).send(error);
    }
});


app.get("/login", (req, res) => {
    res.render("login");
});

// login validation

app.post("/login", async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email: email});
        if(useremail.password === password){
            res.status(201).render("index");
        }
        else{
            res.send("Invalid login details");
        }
    } catch (error) {
        res.status(400).send("iinvalid Email")
    }
})


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})