import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";

const CategoryList = async ({limit}:{limit:number}) => {

    const wixClient = await wixClientServer()

    const cats = await wixClient.collections.queryCollections().skip(1).limit(limit || 20).find()
 
    return (
      <div className={styles.cardContainer}>
        {cats.items.map(item=>(

            <Link 
            href={`/menu`}
            className={styles.card}
            key={item._id}
            >
                <div>
                    <Image src={item.media?.mainMedia?.image?.url || "/cat.png" } alt="" width={300} height={1} className={styles.img}/>
                </div>
                <h3>{item.name}</h3>
            </Link>
        ))}

        
        
      </div>
    )
  }
  
export default CategoryList