import React from "react";
import { Link } from "react-router-dom";
import styles from "./PrivacyPolicy.module.css";
import Footer from "../Footer/Footer";

export default function PrivacyPolicy() {
  return (
   <>

       <div className={styles.privacyPage}>
      <div className="container py-5 my-4">
        <div className={styles.contentWrapper}>
          
          {/* الهيدر العلوي */}
          <div className= {`text-center mb-5`}>
            <div className={styles.lockIcon}>
              <i className="fa-solid fa-lock"></i>
            </div>
            <h1 className={`fw-bold text-light ${styles.mainTitle}`}>
              سياسة الخصوصية
            </h1>
            <span className={styles.updateDate}>
              آخر تحديث: 15 يناير 2026
            </span>
          </div>

          {/* البوكس المميز البرتقالي */}
          <div className={styles.alertBox}>
            <i className={`fa-shield-halved fa-solid ${styles.shieldIcon}`}></i>
            <div>
              <h6 className={styles.alertTitle}>خصوصيتك تهمنا</h6>
              <p className={styles.alertText}>
                نحن ملتزمون بحماية معلوماتك الشخصية وشغفنا يقينًا بما نجمعه.
              </p>
            </div>
          </div>

          {/* الأقسام والشروط */}
          <div className={styles.sectionsList}>
            
            {/* قسم 1 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>1</span> مقدمة
              </h3>
              <p className={styles.sectionParagraph}>
                مرحبًا بك في منصتنا. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
              </p>
            </div>

            {/* قسم 2 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>2</span> المعلومات التي نجمعها
              </h3>
              <ul className={styles.customList}>
                <li>
                  <strong>بيانات الهوية:</strong> تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                </li>
                <li>
                  <strong>بيانات الاتصال:</strong> تشمل عنوان البريد الإلكتروني.
                </li>
                <li>
                  <strong>البيانات التقنية:</strong> تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                </li>
                <li>
                  <strong>بيانات الاستخدام:</strong> تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                </li>
              </ul>
            </div>

            {/* قسم 3 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>3</span> كيف نستخدم معلوماتك
              </h3>
              <ul className={styles.customList}>
                <li>تقديم خدماتنا والحفاظ عليها</li>
                <li>إخطارك بالتغييرات في خدمتنا</li>
                <li>تقديم دعم العملاء</li>
                <li>تجميع تحليلات أو معلومات قيمة لتحسين خدمتنا</li>
                <li>مراقبة استخدام خدمتنا</li>
                <li>اكتشاف ومنع ومكافحة المشاكل التقنية</li>
              </ul>
            </div>

            {/* قسم 4 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>4</span> ملفات تعريف الارتباط
              </h3>
              <p className={styles.sectionParagraph}>
                نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو الإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
              </p>
            </div>

            {/* قسم 5 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>5</span> أمان البيانات
              </h3>
              <p className={styles.sectionParagraph}>
                لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به. نحدد الوصول إلى بياناتك الشخصية للموظفين الذين لديهم حاجة عمل معينة لمعرفتها.
              </p>
            </div>

            {/* قسم 6 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>6</span> حقوقك
              </h3>
              <ul className={styles.customList}>
                <li>الحق في الوصول إلى بياناتك الشخصية</li>
                <li>الحق في تصحيح بياناتك الشخصية</li>
                <li>الحق في مسح بياناتك الشخصية</li>
                <li>الاعتراض على معالجة بياناتك الشخصية</li>
                <li>الحق في تقييد معالجة بياناتك الشخصية</li>
                <li>الحق في نقل البيانات</li>
              </ul>
            </div>

            {/* قسم 7 */}
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionHeading}>
                <span className={styles.badgeNum}>7</span> تواصل معنا
              </h3>
              <p className={styles.sectionParagraph}>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </p>
              <a href="mailto:hello@adasah.com" className={styles.contactEmail}>
                hello@adasah.com <i className="fa-regular fa-envelope ms-1"></i>
              </a>
            </div>

          </div>

          {/* الفوتر الداخلي للصفحة */}
          <div className={styles.pageFooter}>
            <p className="m-0 text-secondary small">
              باستخدامك موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضًا{" "}
              <Link to="/terms" className={styles.termsLink}>
                شروط الخدمة
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