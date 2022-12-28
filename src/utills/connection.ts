import {connect} from 'mongoose';
import * as dotenv  from "dotenv"

export const  connect_db =async()=>{
try {
    await connect(`${process.env.uri}`);
    console.log("connected to Db");
    
} catch (error) {
    console.log(error,"error while triying to connect");
    
}
}