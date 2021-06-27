import {MongoClient} from 'mongodb'
//mongodb+srv://meetupuser:<password>@cluster0.rcszj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

export const connectDb= async () =>{
    const client = await MongoClient.connect('mongodb+srv://meetupuser:Test@123@cluster0.rcszj.mongodb.net/BrandVouchers?retryWrites=true&w=majority');
    return client;
    
}
