const app=require('./app');
const {PORT}=process.env;

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening at port ${PORT}`);
})