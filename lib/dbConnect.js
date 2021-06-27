import {MongoClient} from 'mongodb'


export async function connectDb () {
    const client = await MongoClient.connect('mongodb+srv://BrandVouchers:Test@123@cluster0.rcszj.mongodb.net/BrandVouchers?retryWrites=true&w=majority');
    return client;
    
}