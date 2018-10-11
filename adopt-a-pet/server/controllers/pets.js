let Pet = require("mongoose").model("Pet");

class pets{
    all(req,res){
        Pet.find({},(err,arr)=>{
          if(err){
            res.json({});
          }else{
    console.log(arr[0]);			
          res.json({pets:arr});
        }
      })
    }
    new_pet(req,res){
        console.log(req.body);
        let newPet = new Pet(req.body);
        newPet.save((err)=>{
            if(err){
                res.json({});
            } 
            else {
                res.json({newPet});
            }
        })
    }
    pet(req,res){
        Pet.findOne({_id:req.params.id},(err,pet)=>{
            if(err){
                res.json({});
            }
            else{
                res.json({foundPet});
            }
        })
    }
    update(req,res){
        Pet.findOne({_id:req.params.id},(err,foundPet)=>{
            foundPet.title = req.body.title;
            foundPet.description = req.body.description;
            foundPet.completed = req.body.completed;
            foundPet.save((err)=>{
                if(err){
                  res.json({});
                }
                else{
                    res.json({"modified":pet});
                }
            });  
        });
    }
    delete(req,res){
        Pet.remove({_id: req.params.id},(err)=>{
            res.json('pet DELETED');
        })
    }
}

module.exports = new pets();
