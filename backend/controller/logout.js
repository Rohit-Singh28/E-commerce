const logout = async(req,res) => {
    res.clearCookie("jwttoken").json({
        success:true,
        error:false,
        message:"logout successfully",
        data:[]
    })
}

module.exports = logout