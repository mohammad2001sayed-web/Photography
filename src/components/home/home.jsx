import { useState } from "react";
import { Link } from "react-router"; // 1. استيراد Link
import styles from "./home.module.css"; // 2. استيراد ملف الـ CSS (تأكد من اسم ومسار الملف لديك)
import Child from "../child/child";
import Explore from "../Explore/Explore";
import Articles from "../Articles/Articles";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container text-center text-light">
          {/* Badge العلوية */}
          <div className="d-flex justify-content-center mb-3">
            <span className={styles.topBadge}>
              <span className={styles.badgeDot}></span>
              مرحباً بك في مجتمعنا
            </span>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className={styles.heroTitle}>
            اكتشف <span className={styles.highlightText}>فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          {/* الوصف */}
          <p className={styles.heroSubtitle}>
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
            <br />
            التصوير
          </p>

          {/* أزرار الدعوة للإجراء (CTA Buttons) */}
          <div className="d-flex justify-content-center align-items-center gap-3 my-4">
            <Link to="/Forkify" className={`btn ${styles.primaryBtn}`}>
              استكشف المقالات <i className="fa-solid fa-arrow-left ms-2"></i>
            </Link>
            <button className={`btn ${styles.secondaryBtn}`}>
              <i className="fa-solid fa-circle-play me-2"></i> اعرف المزيد
            </button>
          </div>

          {/* كروت الإحصائيات (Stats Cards) */}
          <div
            className={`row justify-content-center g-3 ${styles.statsContainer}`}
          >
            <div className="col-6 col-md-3">
              <div className={styles.statCard}>
                <i className="fa-solid fa-newspaper mb-2"></i>
                <h3>+50</h3>
                <p>مقالة</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.statCard}>
                <i className="fa-solid fa-users mb-2"></i>
                <h3>+10 ألف</h3>
                <p>قارئ</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.statCard}>
                <i className="fa-solid fa-folder-open mb-2"></i>
                <h3>4</h3>
                <p>تصنيفات</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className={styles.statCard}>
                <i className="fa-solid fa-feather mb-2"></i>
                <h3>6</h3>
                <p>كُتّاب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Child />
      <Explore />
      <Articles />
      <Newsletter />
      <Footer />
    </>
  );
}