import React, { useState, useEffect } from "react";
import styles from "./Authors.module.css";
import blogsData from "../../assets/posts.json"; // ملف الـ JSON بتاعنا

export default function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (blogsData) {
      const posts = Array.isArray(blogsData)
        ? blogsData
        : blogsData.blogs || blogsData.posts || [];

      // استخراج الكُتّاب من المقالات وحذف التكرار
      const uniqueAuthorsMap = new Map();

      posts.forEach((post) => {
        if (post.author && post.author.name) {
          if (!uniqueAuthorsMap.has(post.author.name)) {
            uniqueAuthorsMap.set(post.author.name, {
              name: post.author.name,
              avatar: post.author.image || post.author.avatar,
              role: post.author.role || post.author.title || "مصور محترف",
              social: post.author.social || {},
            });
          }
        }
      });

      setAuthors(Array.from(uniqueAuthorsMap.values()));
    }
  }, []);

  return (
    <section className={styles.authorsSection}>
      <div className="container text-center">
        
        {/* البادج والتصنيف */}
        <div className={styles.badgeWrapper}>
          <span className={styles.orangeDot}></span>
          <span className={styles.badgeText}>فريقنا</span>
        </div>

        {/* العنوان والوصف */}
        <h2 className={styles.mainTitle}>تعرف على كتابنا</h2>
        <p className={styles.description}>
          فريقنا من المصورين والكتاب ذوي الخبرة الشغوفين بمشاركة معرفتهم مع المجتمع.
        </p>

        {/* شبكة كروت الكُتّاب */}
        <div className="row g-4 mt-3">
          {authors.map((author, index) => {
            // استخراج الروابط أو استخدام روابط افتراضية تعمل دائماً
            const linkedinUrl =
              author.social?.linkedin ||
              author.social?.linkedIn ||
              "https://www.linkedin.com";

            const websiteUrl =
              author.social?.website ||
              author.social?.site ||
              author.social?.portfolio ||
              "https://google.com";

            const twitterUrl =
              author.social?.twitter ||
              author.social?.x ||
              "https://x.com";

            return (
              <div key={index} className="col-12 col-sm-6 col-lg-4">
                <div className={styles.authorCard}>
                  
                  {/* صورة الكاتب مع شارة التوثيق البرتقالية */}
                  <div className={styles.avatarWrapper}>
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className={styles.avatarImg}
                    />
                    <span className={styles.verifiedBadge}>
                      <i className="fa-solid fa-check"></i>
                    </span>
                  </div>

                  {/* اسم الكاتب وتخصصه */}
                  <h3 className={styles.authorName}>{author.name}</h3>
                  <span className={styles.authorRole}>{author.role}</span>

                  {/* أزرار السوشيال ميديا للكاتب */}
                  <div className={styles.socialIcons}>
                    {/* Twitter / X */}
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      title="Twitter / X"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>

                    {/* Website */}
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      title="الموقع الشخصي"
                    >
                      <i className="fa-solid fa-globe"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialBtn}
                      title="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}