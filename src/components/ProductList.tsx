import styles from "./ProductList.module.css";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

const ProductList = async ({ categoryId }: { categoryId: string }) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId) 
    .find();

  const items = res.items;
  console.log(res)


  if (!items || items.length === 0) {
    return <p>No products found in this category.</p>;
  }


  return (
    <div className={styles.cardContainer}>
      {items.map((product: products.Product) => (
        <div key={product._id} className={styles.productCard}>
          <Image
            src={product.media?.mainMedia?.image?.url || "/cat.png"}
            alt=""
            width={300}
            height={200}
            className={styles.img}
          />
          <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <div className={styles.bottom}>
              <button>Add to cart</button>
              <p><strong>AED {product.price?.price}</strong></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
