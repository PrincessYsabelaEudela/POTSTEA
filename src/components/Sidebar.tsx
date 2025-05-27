import styles from "./Sidebar.module.css";
import { wixClientServer } from "@/lib/wixClientServer";

const Sidebar = async () => {
  const wixClient = await wixClientServer();

  // Fetch all categories, skip the first one if needed
  const categoriesRes = await wixClient.collections.queryCollections().find();
  const categories = categoriesRes.items.slice(1); // skip first if needed

  return (
    <div className={styles.sidebar}>
      {categories.map((category) => (
        <a key={category._id} href={`#${category.slug}`}>
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;