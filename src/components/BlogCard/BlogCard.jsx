import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

export default function BlogCard({ blog, isListView }) {
  // حماية ضد البيانات الفارغة
  if (!blog) return null;

  // جلب مسار الصورة بأي مسمى محتمل في الـ JSON
  const cardImage =
    blog?.image ||
    blog?.img ||
    blog?.coverImage ||
    blog?.urlToImage ||
    "https://via.placeholder.com/400x250?text=No+Image";

  // جلب صورة الكاتب بأي مسمى محتمل
  const authorImage =
    blog?.author?.image ||
    blog?.author?.avatar ||
    blog?.authorImage ||
    "https://via.placeholder.com/100?text=User";

  return (
    <div className={`${styles.card} ${isListView ? styles.listCard : ""}`}>
      {/* الصورة وتصنيف المقال فوقها */}
      <div className={styles.imageWrapper}>
        <img
          src={cardImage}
          alt={blog?.title || "عنوان المقال"}
          className={styles.cardImg}
        />
        <span className={styles.categoryBadge}>
          {blog?.category || "عام"}
        </span>
      </div>

      {/* تفاصيل الكارت */}
      <div className={styles.cardBody}>
        {/* معلومات الوقت والتاريخ */}
        <div className={styles.metaInfo}>
          <span>
            <i className="fa-regular fa-clock me-1"></i>
            {blog?.readTime || blog?.readingTime || "5 دقائق"}
          </span>
          <span>•</span>
          <span>{blog?.date || "2026"}</span>
        </div>

        {/* عنوان المقال */}
        <h3 className={styles.title}>{blog?.title || "بدون عنوان"}</h3>

        {/* الوصف المختصر */}
        <p className={styles.description}>
          {blog?.description || blog?.excerpt || blog?.content}
        </p>

        {/* بيانات الكاتب */}
        <div className={styles.cardFooter}>
          <div className={styles.authorInfo}>
            <img
              src={authorImage}
              alt={blog?.author?.name || "الكاتب"}
              className={styles.authorAvatar}
            />
            <div>
              <h4 className={styles.authorName}>
                {typeof blog?.author === "object"
                  ? blog?.author?.name
                  : blog?.author || "مصور محترف"}
              </h4>
              <span className={styles.authorRole}>
                {blog?.author?.role || "كاتب محتوى"}
              </span>
            </div>
          </div>

          {/* رابط المقال */}
          <Link
            to={`/blog/${blog?.id}`}
            className={styles.arrowBtn}
            title="اقرأ المزيد"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}