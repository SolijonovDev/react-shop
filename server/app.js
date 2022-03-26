const express=require("express")

const app=express()

const PORT=process.env.PORT || 8800

app.get("/",(req,res)=>{
    return res.status(200).json({message:"Ok"})
})

const start=async ()=>{
    try{
     app.listen(PORT,()=>console.log(`Server started PORT : ${PORT}`))
    }catch(e){
        console.log("Error");
    }
}

start()