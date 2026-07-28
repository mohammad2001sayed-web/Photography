import foto1 from "../../assets/imgi_14_photo-1507003211169-0a1dd7228f2d.jpg";
import foto2 from "../../assets/imgi_15_photo-1500648767791-00dcc994a43e.jpg";
import foto3 from "../../assets/imgi_16_photo-1472099645785-5658abf4ff4e.jpg";


import React, { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      alert(`تم الاشتراك بنجاح بالبريد: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className={styles.newsletterSection}>
      <div className="container d-flex justify-content-center">
        <div className={styles.newsletterCard}>
          {/* أيقونة الظرف في الأعلى */}
          <div className={styles.iconBox}>
            <i className="fa-regular fa-envelope"></i>
          </div>

          {/* العنوان والوصف */}
          <h2 className={styles.title}>
            اشترك في <span className={styles.highlightText}>نشرتنا الإخبارية</span>
          </h2>
          <p className={styles.description}>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          {/* نموذج إدخال الإيميل والزر */}
          <form onSubmit={handleSubmit} className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitBtn}>
              اشترك الآن
            </button>
          </form>

          {/* التفاصيل السفلية (المشتركين/الضمان) */}
          <div className={styles.footerInfo}>
            <div className={styles.subscribersCount}>
              <div className={styles.avatarsGroup}>
                <img src={foto1} alt="subscriber" />
                <img src={foto2} alt="subscriber" />
                <img src={foto3} alt="subscriber" />
              </div>
              <span className={styles.infoText}>انضم لـ <strong>+15,000</strong> مصور</span>
            </div>

            <span className={styles.dotSeparator}>•</span>
            <span className={styles.infoText}>بدون إزعاج</span>
            <span className={styles.dotSeparator}>•</span>
            <span className={styles.infoText}>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}