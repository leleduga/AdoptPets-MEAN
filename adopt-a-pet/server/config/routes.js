
let pets= require("../controllers/pets.js");
let path = require('path');
module.exports = (app)=>{
    app.get("/pets",pets.all);
    app.post("/new-pet",pets.new_pet);
    app.post("/pet-detail/:id/delete",pets.delete);
    app.get("/pet-detail/:id",pets.pet);
    app.post("/pet-detail/:id/update",pets.update);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}
