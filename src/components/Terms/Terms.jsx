import React from "react";
import { Link } from "react-router-dom";
import styles from "./Terms.module.css";
import Footer from "../Footer/Footer";

export default function Terms() {
  return (
    <>
        <div className={`${styles.termsPage} mt-5`}>
      <div className="container">
        <div className={styles.contentWrapper}>
          
          {/* Breadcrumb العلوي */}
          <div className="d-flex justify-content-center gap-2 mb-4 mt-5 text-muted small">
            <Link to="/home" className={styles.breadcrumbLink}>الرئيسية</Link>
            <span>/</span>
            <span className={styles.activeBreadcrumb}>شروط الخدمة</span>
          </div>

          {/* الهيدر والأيقونة */}
          <div className="text-center mb-5">
            <div className={styles.documentIcon}>
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <h1 className={`fw-bold text-light ${styles.mainTitle}`}>
              شروط الخدمة
            </h1>
            <span className={styles.updateDate}>
              آخر تحديث: 15 يناير 2026
            </span>
          </div>

          {/* بوكس إشعار مهم */}
          <div className={styles.alertBox}>
            <i className={`fa-solid fa-triangle-exclamation ${styles.alertIcon}`}></i>
            <div>
              <h6 className={styles.alertTitle}>إشعار مهم</h6>
              <p className={styles.alertText}>
                يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام منصتنا، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>
          </div>

          {/* الأقسام التفصيلية */}
          <div className={styles.sectionsList}>
            
            {/* قسم 1 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>1</span> الموافقة على الشروط
              </h3>
              <p className={styles.sectionParagraph}>
                بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وبجميع القوانين واللوائح المعمول بها. إذا لم تكن توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
              </p>
            </div>

            {/* قسم 2 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>2</span> رخصة الاستخدام
              </h3>
              <p className={styles.sectionParagraph}>
                تُمنح الإذن لترخيص المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
              </p>
              <p className={styles.subHeading}>بموجب هذا الترخيص لا يجوز لك:</p>
              <ul className={styles.crossList}>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> تعديل أو نسخ المواد</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> استخدام المواد لأي غرض تجاري أو للعرض العام</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> محاولة فك أو عكس هندسة أي برنامج على الموقع</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> إزالة أي حقوق نشر أو مذكرات ملكية من المواد</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</li>
              </ul>
            </div>

            {/* قسم 3 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>3</span> إخلاء المسؤولية
              </h3>
              <p className={styles.sectionParagraph}>
                المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا تقدم أي ضمانات، صريحة أو ضمنية، وتخلي مسؤوليتها من جميع الضمانات الأخرى.
              </p>
            </div>

            {/* قسم 4 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>4</span> القيود
              </h3>
              <p className={styles.sectionParagraph}>
                في أي حال من الأحوال، لن يكون عدسة أو موردوه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.
              </p>
            </div>

            {/* قسم 5 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>5</span> محتوى المستخدم
              </h3>
              <p className={styles.sectionParagraph}>
                إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري، وعالمي، ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.
              </p>
              <p className={styles.subHeading}>يجب ألا يكون محتواك:</p>
              <ul className={styles.crossList}>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> أن يكون تشهيرياً أو فاحشاً أو مسيئاً</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> انتهاك حقوق الملكية الفكرية للآخرين</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> احتواء فيروسات أو أكواد ضارة</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> انتهاك أي قوانين أو لوائح معمول بها</li>
                <li><i className="fa-solid fa-xmark text-danger me-2"></i> الإعلان عن منتجات أو خدمات غير مصرح بها</li>
              </ul>
            </div>

            {/* قسم 6 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>6</span> التعديلات
              </h3>
              <p className={styles.sectionParagraph}>
                قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدامك هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
              </p>
            </div>

            {/* قسم 7 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>7</span> معلومات الاتصال
              </h3>
              <p className={styles.sectionParagraph}>
                إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
              </p>
              <a href="mailto:hello@adasah.com" className={styles.contactEmail}>
                hello@adasah.com <i className="fa-regular fa-envelope ms-1"></i>
              </a>
            </div>

          </div>

          {/* الفوتر السفلي */}
          <div className={styles.pageFooter}>
            <p className="m-0 text-muted small">
              باستخدامك موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
              <Link to="/privacy" className={styles.privacyLink}>
                سياسة الخصوصية
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>

    <Footer />
    
    </>
  );
}