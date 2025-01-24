const express =require("express");
const router =express.Router();


router.use((req,res,next)=>{
    console.log("Hello from middleware one");
    // return res.json({message:"Hello from middleware one"});
    next();
}); 
router.use((req,res,next)=>{
console.log("Hello from middleware two");
next();
});

router.get("/api/users",async(req,res)=>{
    
const allDbUSer = await user.find({});
    // return res.json(users);
    const html =`
    <ul>    
        ${allDbUSer.map((user)=>`<li>${user.firstName} -- ${user.email} </li>`).join("'")}
    </ul>
    
    `;
    res.send(html);
});



router.get("/api/user/:id",(req,res)=>{

    const id =Number(req.params.id);
    const user =users.find((user)=>user.id===id)
    return res.json(user);
});


router.post("/api/user/createuser",async (req,res)=>{
    const body=req.body;
    if(!body || !body.firstName || !body.lastName || !body.email || !body.jobTitle){
            return res.json({status:"All fields are required"});
    }


    //------------previous---------code-----
            //     users.push({...body, id:users.length+1});
            //   fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
            //         return res.json({status:"sucess",id:users.length+1});
            //   });    
    // return res.json({"status":"pending"});
       //------------previous---------code-----

            try {
                const result = await user.create({
                    firstName:body.firstName,
                    lastName:body.lastName,
                    email:body.email,
                    jobTitle:body.jobTitle,
                    gender:body.gender
               });
               console.log("result: ",result);
               return res.status(201).json({"status":"scucess"});
            } catch (error) {
                console.log("Error");
            }
      
});




router.patch("/api/user/:id",(req,res)=>{

return res.json({"status":"pending"});
});
router.delete("/api/user/:id",(req,res)=>{

return res.json({"status":"pending"});
});

module.exports =router;