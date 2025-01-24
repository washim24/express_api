const user =require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await user.find({});
    return res.json(allDbUsers);
}


async function handleGetUserById(req,res) {
        const id =String(req.params.id);
        console.log(id);
        
        const users =await user.findById(id);
        if(!users) return res.status(404).json({error:"user not found"});
        return res.json(users);
}


    async function handleUpdateUserById(req, res) {
        const id =String(req.params.id);
        await user.findByIdAndUpdate(id, { lastName: "Changed"});
        return res.json({ status: "Success" });
    }

    async function handleDeleteUser(req,res){
        const id =String(req.params.id);
        await user.findByIdAndDelete(id);
        return res.json({ status: "Success" });
    } 

    async function handleCreateNewUser(req,res){
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
                   return res.status(201).json({"status":"scucess",id:result._id});
                } catch (error) {
                    console.log("Error");
                }
    }


module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUser,
    handleCreateNewUser
}