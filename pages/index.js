import HomePage from '../components/Home/Homepage'
import styles from '../styles/Home.module.css'
import { connectDb } from '../lib/dbConnect'

export default function Home({brands}) {
  return (
    <div className={styles.container}>
      <HomePage vouchers={brands} />
    </div>
  )
}

export const getStaticProps =async ()=> {
  const client = await connectDb();


  const db = await client.db();
  const brandVoucherCollection = await db.collection('voucherlist');  
  const brandArray = await brandVoucherCollection.find().toArray();
  client.close();

  console.log(brandArray,'brandVouchers')


  return {
    props: {
   brands:brandArray.map(voucher=>({
         image:voucher.image,
         description:voucher.description,
         id:voucher._id.toString()
      }))
    },
    revalidate:1
  }


}
