const logout = async(req,res) => {
    const tokenOption = {
        httpOnly: true,
        secure: false,
        sameSite: 'None'
    }
    res.clearCookie("jwttoken",tokenOption).json({
        success:true,
        error:false,
        message:"logout successfully",
        data:[]
    })
}

module.exports = logout