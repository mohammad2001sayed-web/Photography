import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./chilld.module.css";
// استيراد ملف الداتا من فولدر assets
import blogsData from "../../assets/posts.json"; 

function Child() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // التأكد من أن الداتا موجودة قبل التخزين
    if (blogsData) {
      // لو الداتا جواها array اسمها blogs أو posts أو هي array مباشرة:
      const posts = Array.isArray(blogsData) ? blogsData : (blogsData.blogs || blogsData.posts || []);
      // أخذ أول 3 مقالات فقط للسكشن المختارات
      setFeaturedPosts(posts.slice(0, 3));
    }
  }, []);

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        {/* الهيدر */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <div className={styles.topBadge}>
              <span className={styles.badgeDot}></span> مميز
            </div>
            <h2 className={`fw-bold text-light mt-2 ${styles.sectionTitle}`}>
              مقالات مختارة
            </h2>
            <p className="text-muted small m-0">محتوى ينتقى لبدء رحلة تعلمك</p>
          </div>

          <Link to="/blogs" className={`btn ${styles.viewAllBtn}`}>
            عرض الكل <i className="fa-solid fa-chevron-left ms-1"></i>
          </Link>
        </div>

        {/* عرض المقالات مع الحماية باستخدام Optional Chaining ?. */}
        <div className="d-flex flex-column gap-4">
          {featuredPosts && featuredPosts.length > 0 ? (
            featuredPosts.map((post, index) => (
              <div key={post.id || index} className={styles.horizontalCard}>
                <div className="row g-0 align-items-center h-100">
                  
                  {/* التفاصيل والمعلومات */}
                  <div className="col-lg-7 p-4 d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <span className={styles.categoryBadge}>
                          {post.category || "إضاءة"}
                        </span>
                        <span className="text-muted small">
                          <i className="fa-regular fa-clock me-1"></i>
                          {post.readTime || post.read_time || "5 دقائق قراءة"}
                        </span>
                      </div>

                      <h3 className={styles.cardTitle}>{post.title}</h3>
                      <p className={styles.cardDesc}>
                        {post.description || post.excerpt || post.content}
                      </p>
                    </div>

                    {/* الكاتب والرابط */}
                    <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-secondary border-opacity-25">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={post.author?.image || post.author?.avatar || "https://i.pravatar.cc/100"}
                          alt={post.author?.name || "Author"}
                          className={styles.authorImg}
                        />
                        <div>
                          <h6 className="m-0 text-light fs-6">
                            {post.author?.name || "سالم أحمد"}
                          </h6>
                        </div>
                      </div>

                      <Link to={`/blogs/${post.id}`} className={styles.readLink}>
                        اقرأ المقال <i className="fa-solid fa-arrow-left ms-1"></i>
                      </Link>
                    </div>
                  </div>

                  {/* الصورة */}
                  <div className="col-lg-5 h-100 position-relative">
                    <span className={styles.imageBadge}>★ مميز</span>
                    <img
                      src={post.image || post.coverImage}
                      alt={post.title}
                      className={styles.cardImg}
                    />
                  </div>

                </div>
              </div>
            ))
          ) : (
            <p className="text-light text-center py-4">جاري تحميل المقالات...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Child;