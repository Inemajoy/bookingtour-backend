import UserService from "../services/userService";

class UserController{
    static async registerUser(req,res){
        const newUser = await UserService.registerUser(req)

        return res.status(201).json ({
            message:"success", 
            data:"newUser",
        })
    }
    static testController (req,res){
        const test = UserService.testServiceFunction(req);
        return res.status(200).json(
            {
                mesage:"ok! successfully",
                data: test
            }
        )
    }
}
export default UserController