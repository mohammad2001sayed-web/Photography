import React from "react";
import { Link } from "react-router-dom";
import styles from "./Questions.module.css";

function Questions () {
  return (
    <section className={styles.ctaWrapper}>

        <div className={styles.ctaCard}>
          
          {/* العنوان الرئيسي */}
          <h2 className={styles.title}>لديك أسئلة؟ دعنا نتحدث!</h2>

          {/* النص الوصفي */}
          <p className={styles.description}>
            نحب أن نسمع منك، سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية. لا تتردد في التواصل.
          </p>

          {/* الأزرار التفاعلية */}
          <div className={styles.buttonGroup}>
            <a href="mailto:zKd0W@example.com" className={styles.btnPrimary}>
              <i className="fa-regular fa-envelope ms-2"></i>
              تواصل معنا
            </a>

            <Link to="/forkify" className={styles.btnOutline}>
              تصفح المقالات
            </Link>
          </div>

        </div>
   
    </section>
  );
}

export default Questions;