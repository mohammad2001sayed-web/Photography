import React from "react";
import styles from "./OurValues.module.css";

export default function OurValues() {
  const values = [
    {
      id: 1,
      icon: "fa-solid fa-compass", // الجودة أولاً
      title: "الجودة أولاً",
      description: "نحرص على تقديم أفضل محتوى دقيق وموثوق.",
    },
    {
      id: 2,
      icon: "fa-solid fa-bolt", // تركيز عملي
      title: "تركيز عملي",
      description: "نقدم نصائح وخطوات مباشرة لتطبيق المهارات.",
    },
    {
      id: 3,
      icon: "fa-solid fa-handshake", // المجتمع
      title: "المجتمع",
      description: "نؤمن بدعم بعضنا والنمو كفريق واحد.",
    },
    {
      id: 4,
      icon: "fa-solid fa-arrows-rotate", // دائماً محدث
      title: "دائماً محدث",
      description: "نواكب أحدث التقنيات والاتجاهات أولاً بأول.",
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className="container text-center">
        
        {/* العنوان والوصف */}
        <h2 className={styles.sectionTitle}>
          <span className={styles.orangeBar}>|</span> قيمنا <span className={styles.orangeBar}>|</span>
        </h2>
        <p className={styles.sectionDesc}>
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>

        {/* الكروت الأربعة */}
        <div className="row g-4 justify-content-center mt-3">
          {values.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-3">
              <div className={styles.valueCard}>
                <div className={styles.iconWrapper}>
                  <i className={item.icon}></i>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}