const express= require('express')
const app=express()
const port= 3000;
const applyroute= require('./routes/applyroute.js')
app.get('/',(req,res)=>{
    res.json({message:'SUSHANK CHUTIYA '})
})


app.use('/api/user',applyroute)

app.listen(port,(error)=>{
    if(!error)
    {
        console.log(`Server is running on port ${port}`)
    }
    else{
        console.log('Server error')
    }
})

