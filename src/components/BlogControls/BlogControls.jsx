import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  // 🌟 يقرأ التصنيف القادم في الرابط ويُفعّل الزرار المطابق له تلقائياً
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);

      // التمرير السلس لنفس شريط الفلتر
      const controlsElement = document.getElementById("blog-controls-bar");
      if (controlsElement) {
        controlsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [categoryFromUrl, setSelectedCategory]);

  return (
    <div id="blog-controls-bar" className={styles.stickyWrapper}>
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
  );
}