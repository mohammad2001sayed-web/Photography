import React from "react";
import styles from "./about.module.css";
import OurValues from "../OurValues/OurValues";
import Authors from "../Authors/Authors";
import Questions from "../Questions/Questions";
import Footer from "..//Footer/Footer";


export default function About() {
  // بيانات كروت الإحصائيات لسهولة التعديل عليها
  const stats = [
    {
      id: 1,
      icon: "fa-solid fa-users",
      number: "+2 مليون",
      label: "قارئ شهرياً",
    },
    {
      id: 2,
      icon: "fa-regular fa-newspaper",
      number: "+500",
      label: "مقال منشور",
    },
    {
      id: 3,
      icon: "fa-solid fa-feather-pointed",
      number: "+50",
      label: "كاتب خبير",
    },
    {
      id: 4,
      icon: "fa-solid fa-layer-group",
      number: "+15",
      label: "تصنيف",
    },
  ];

  return (
    <>
    
    
        <section className={styles.aboutHeroSection} >
      <div className="container text-center">
        
        {/* الشارة البرتقالية الصغيرة */}
        <div className={styles.badgeWrapper}>
          <span className={styles.orangeDot}></span>
          <span className={styles.orangeDott}></span>
          <span className={styles.badgeText}>من نحن</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className={styles.mainTitle}>
          مهمتنا هي <span className={styles.highlightText}>الإعلام والإلهام</span>
        </h1>

        {/* الوصف */}
        <p className={styles.description}>
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونشجع مجتمع
          <br className="d-none d-md-block" />
          المصورين بمشاركة المعرفة ومساعدة المصورين على صقل مهاراتهم من
          <br className="d-none d-md-block" />
          خلال محتوى عالي الجودة.
        </p>

        {/* كروت الإحصائيات الاربعة */}
        <div className="row g-3 justify-content-center mt-4">
          {stats.map((stat) => (
            <div key={stat.id} className="col-6 col-md-3">
              <div className={styles.statCard}>
                <div className={styles.iconBox}>
                  <i className={stat.icon}></i>
                </div>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <OurValues/>
    <Authors/>
    <Questions />
    <Footer />
    </>

    
  );}
