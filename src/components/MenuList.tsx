import styles from "./MenuList.module.css";
import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";


const MenuList = async () => {
  const wixClient = await wixClientServer();

  const categoriesRes = await wixClient.collections.queryCollections().find();
  const categories = categoriesRes.items;

  const categoriesWithProducts = await Promise.all(
    categories.slice(1).map(async (category) => {
      const productsRes = await wixClient.products
        .queryProducts()
        .eq("collectionIds", category._id)
        .find();

      return {
        category,
        products: productsRes.items,
      };
    })
  );

  return (
    <div className={styles.menuContainer}>
      {categoriesWithProducts.map(({ category, products }) => (
        products.length > 0 && (
          <div key={category._id} id={category.slug ?? `category-${category._id}`} className={styles.categorySection}>
            <h1 className={styles.categoryTitle}>{category.name}</h1>
            <div className={styles.cardContainer}>
              {products.map((product: products.Product) => (
                <div className={styles.card} key={product._id}>
                  <Image
                    src={product.media?.mainMedia?.image?.url || "/cat.png"}
                    alt=""
                    width={300}
                    height={200}
                    className={styles.img}
                  />
                  <div className={styles.cardContent}>
                    <div className={styles.cardText}>
                      <h3>{product.name}</h3>
                      <span>{product.price?.price}</span>
                    </div>
                    <button>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default MenuList