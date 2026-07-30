import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Articles.module.css";
import blogsData from "../../assets/posts.json";

export default function Articles() {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    if (blogsData) {
      const posts = Array.isArray(blogsData)
        ? blogsData
        : blogsData.blogs || blogsData.posts || [];
      // عرض 3 مقالات
      setLatestPosts(posts.slice(3, 6));
    }
  }, []);

  return (
    <section className={styles.latestSection}>
      <div className="container">
        {/* الهيدر العلوي للسكشن */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <div className={styles.topBadge}>
              <span className={styles.badgeDot}></span> أحدث
            </div>
            <h2 className={`fw-bold text-light display-4 mt-2 `}>
              أحدث المقالات
            </h2>
            <p className="fw-bold text-secondary m-0">
              محتوى متجدد طازج من المطبعة
            </p>
          </div>

          <Link to="/blog" className={styles.viewAllLink}>
            عرض جميع المقالات <i className="fa-solid fa-arrow-left ms-1"></i>
          </Link>
        </div>

        {/* شبكة الكروت الرأسية */}
        <div className="row g-4">
          {latestPosts && latestPosts.length > 0 ? (
            latestPosts.map((post, index) => {
              // 🌟 تحديد رابط تفاصيل المقال (باستخدام الـ slug أو الـ id)
              const postLink = `/blog/${post.slug || post.id}`;

              return (
                <div key={post.id || index} className="col-12 col-md-6 col-lg-4">
                  <div className={styles.verticalCard}>
                    {/* صورة الكارت وبيدج التصنيف (قابلة للنقر) */}
                    <Link to={postLink} className={styles.imageWrapper}>
                      <span className={styles.categoryBadge}>
                        {post.category || "تقنيات"}
                      </span>
                      <img
                        src={post.image || post.coverImage}
                        alt={post.title}
                        className={styles.cardImg}
                      />
                    </Link>

                    {/* تفاصيل الكارت */}
                    <div className={styles.cardContent}>
                      {/* التاريخ ووقت القراءة */}
                      <div className="d-flex align-items-center justify-content-between text-muted small mb-2">
                        <span>
                          <i className="fa-regular fa-calendar me-1"></i>
                          {post.date || "12 يناير 2026"}
                        </span>
                        <span>
                          <i className="fa-regular fa-clock me-1"></i>
                          {post.readTime || post.read_time || "5 دقائق"}
                        </span>
                      </div>

                      {/* عنوان المقال (قابل للنقر) */}
                      <Link to={postLink} className="text-decoration-none">
                        <h4 className={styles.cardTitle}>{post.title}</h4>
                      </Link>

                      {/* وصف المقال */}
                      <p className={styles.cardDesc}>
                        {post.description || post.excerpt}
                      </p>

                      {/* الكاتب وسهم الذهاب للمقال */}
                      <div className={styles.cardFooter}>
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={
                              post.author?.image ||
                              post.author?.avatar ||
                              "https://i.pravatar.cc/100"
                            }
                            alt={post.author?.name}
                            className={styles.authorImg}
                          />
                          <span className="text-light fs-6">
                            {post.author?.name || "ماجد ذكار"}
                          </span>
                        </div>

                        {/* 🌟 زر الانتقال لصفحة المقال */}
                        <Link to={postLink} className={styles.arrowBtn}>
                          <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-light text-center py-4">
              جاري تحميل المقالات...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}