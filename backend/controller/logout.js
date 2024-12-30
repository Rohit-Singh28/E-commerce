const logout = async(req,res) => {
    const tokenOption = {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 8 * 60 * 60 * 1000
    }
    res.clearCookie("jwttoken",tokenOption).json({
        success:true,
        error:false,
        message:"logout successfully",
        data:[]
    })
}

module.exports = logout