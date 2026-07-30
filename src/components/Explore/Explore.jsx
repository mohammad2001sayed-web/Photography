import React from "react";
import { Link } from "react-router-dom";
import styles from "./Explore.module.css";

export default function Explore() {
  const categories = [
    { id: 1, name: "إضاءة", count: "1 مقالة", icon: "fa-sun" },
    { id: 2, name: "بورتريه", count: "3 مقالات", icon: "fa-user" },
    { id: 3, name: "مناظر طبيعية", count: "2 مقالة", icon: "fa-mountain" },
    { id: 4, name: "تقنيات", count: "1 مقالة", icon: "fa-sliders" },
    { id: 5, name: "معدات", count: "1 مقالة", icon: "fa-camera" },
  ];

  return (
    <section className={styles.exploreSection}>
      <div className="container text-center">
        {/* Badge العلوية */}
        <div className="d-flex justify-content-center mb-2">
          <span className={styles.topBadge}>
            <span className={styles.badgeDot}></span> التصنيفات
          </span>
        </div>

        {/* العنوان والوصف */}
        <h2 className={`fw-bold text-light ${styles.sectionTitle}`}>
          استكشف حسب الموضوع
        </h2>
        <p className="text-muted small mb-5">
          اعثر على محتوى مخصص حسب اهتماماتك
        </p>

        {/* شبكة التصنيفات */}
        <div className="row g-3 justify-content-center">
          {categories.map((cat) => (
            <div key={cat.id} className="col-12 col-sm-6 col-md-4 col-lg-2">
              {/* 🌟 تم تعديل الرابط ليمرر اسم التصنيف في الـ Query Parameter */}
              <Link
                to={`/forkify?category=${encodeURIComponent(cat.name)}`}
                className={styles.categoryCard}
              >
                <div className={styles.iconWrapper}>
                  <i className={`fa-solid ${cat.icon}`}></i>
                </div>
                <h5 className={styles.categoryName}>{cat.name}</h5>
                <span className={styles.categoryCount}>{cat.count}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}