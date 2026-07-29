import React from "react";
import styles from "./blogControls.module.css";

// قائمة التصنيفات المتوفرة
const categories = [
  "جميع المقالات",
  "إضاءة",
  "بورتريه",
  "مناظر طبيعية",
  "تقنيات",
  "معدات",
];

export default function BlogControls({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <>
        <div className={styles.stickyWrapper}>
      <div className="container">
        <div className={styles.controlsBar}>
          
          {/* حقل البحث */}
          <div className={styles.searchBox}>
            <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {/* أزرار الفلترة حسب التصنيف */}
          <div className={styles.categoryFilter}>
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`${styles.catBtn} ${
                  selectedCategory === cat ? styles.activeCat : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
   
</>
  );
}