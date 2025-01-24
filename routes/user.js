const express =require("express");
const {handleGetAllUsers,getUserById,handleUpdateUserById} =require('../controllers/user');
const router =express.Router();




router.get("/",handleGetAllUsers);

// router.get("/",async(req,res)=>{
    
// const allDbUSer = await user.find({});
//     // return res.json(users);
//     const html =`
//     <ul>    
//         ${allDbUSer.map((user)=>`<li>${user.firstName} -- ${user.email} </li>`).join("'")}
//     </ul>
    
//     `;
//     res.send(html);
// });


router
.route("/:id")
.get(getUserById)
.patch(handleUpdateUserById);


router.delete("/:id",(req,res)=>{
    return res.json({"status":"pending"});
});

module.exports =router;