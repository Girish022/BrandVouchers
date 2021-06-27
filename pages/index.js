import HomePage from '../components/Home/Homepage'
import styles from '../styles/Home.module.css'
import { connectDb } from '../lib/dbConnect'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <HomePage vouchers={props.brandVouchers} />
    </div>
  )
}

export async function getStaticProps() {
  const client = await connectDb();


  const db = client.db();
  const brandVoucherCollection = await db.collection('voucherlist');
  const brandVouchers = brandVoucherCollection.find().toArray();
  client.close();

  return {
    props: {
      brandVouchers:brandVouchers.map(voucher=>({
         image:voucher.image,
         description:voucher.description,
      }))
    }
  }


}
