import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templetes');

const students = [
    {
        id: 1,
        name: "Ali",
        city: "shibeen",
    },
    {
        id: 2,
        name: "Mohamed",
        city: "tanta",
    },
    {
        id: 3,
        name: "Yasser",
        city: "menouf",
    },
]
const studentsFunction = (request , response) => {
    response.render('students' , { layout: false  , students });

    
};
app.get('/students', studentsFunction)

app.get('/students/:id' , (req , res) =>{
    const id = req.params.id ;
    const student = students.find((item) =>{
        return item.id ==id ;
    })
    res.render("student" , { layout: false , student: student } );
     
});

app.listen(5000);