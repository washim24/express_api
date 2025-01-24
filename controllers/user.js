const user =require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await user.find({});
    return res.json(allDbUsers);
}


async function handleGetUserById(req,res) {
        // const id =Number(req.params.id);
        const user =await user.findById(req.param.id);
        if(!user) return res.status(404).json({error:"user not found"});
        return res.json(user);
}


    async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed"});
    return res.json({ status: "Success" });
    }


module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    

}