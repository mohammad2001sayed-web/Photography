import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row g-4 mb-5">
          {/* العمود الأول: اللوجو والوصف وأيقونات التواصل */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className={styles.logoIcon}>ع</span>
              <span className={styles.logoText}>عدسة</span>
            </div>
            <p className={styles.brandDesc}>
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معك أسرار المصورين ونصائح عملية لتطوير مهاراتك.
            </p>
            {/* أيقونات السوشيال ميديا */}
            <div className="d-flex gap-2">
              <a href="#" className={styles.socialBtn}><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className={styles.socialBtn}><i className="fa-brands fa-github"></i></a>
              <a href="#" className={styles.socialBtn}><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className={styles.socialBtn}><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* العمود الثاني: استكشف */}
          <div className="col-6 col-md-3 col-lg-2 ms-auto">
            <h5 className={styles.footerHeading}>
              <span className={styles.headingDash}></span> استكشف
            </h5>
            <ul className={styles.linksList}>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التصنيفات */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className={styles.footerHeading}>
              <span className={styles.headingDash}></span> التصنيفات
            </h5>
            <ul className={styles.linksList}>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  إضاءة
                </Link>
              </li>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  بورتريه
                </Link>
              </li>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link to="/forkify" className={styles.footerLink}>
                  <i className={`fa-solid fa-chevron-left ${styles.linkArrow}`}></i>
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: إبقى على اطلاع */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className={styles.footerHeading}>
              <span className={styles.headingDash}></span> إبقى على اطلاع
            </h5>
            <p className={styles.smallText}>
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column gap-2">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className={styles.miniInput}
              />
              <button type="submit" className={styles.miniSubmitBtn}>
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* الجزء السفلي (حقوق النشر) */}
        <div className={styles.footerBottom}>
          <p className="m-0  fw-bold text-secondary small">
            © 2026 عدسة. صنع بـ <span className="text-danger">♥</span> جميع الحقوق محفوظة.
          </p>
          <div className="d-flex gap-3">
            <Link to="/Privacy" className={styles.bottomLink}>سياسة الخصوصية</Link>
            <Link to="/Terms" className={styles.bottomLink}>شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}