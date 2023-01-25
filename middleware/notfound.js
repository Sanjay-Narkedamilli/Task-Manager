const notFound=(req,res)=>{
    res.status(404).send("route doesnt exit");
}
module.exports=notFound