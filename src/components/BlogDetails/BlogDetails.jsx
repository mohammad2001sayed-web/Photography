import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./blogDetails.module.css";
import blogsData from "../../assets/posts.json";
import Footer from "../Footer/Footer";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const posts = Array.isArray(blogsData)
      ? blogsData
      : blogsData?.blogs || blogsData?.posts || [];

    // 🌟 البحث عن المقال سواء باستخدام الـ id أو الـ slug
    const foundBlog = posts.find(
      (item) => String(item.id) === String(id) || item.slug === id
    );

    setBlog(foundBlog || posts[0]);
    window.scrollTo(0, 0);
  }, [id]);

  // 🌟 دالة ذكية لتقسيم محتوى المقال (##) إلى عناوين وسكاشن ديناميكية
  const parseBlogContent = (rawContent) => {
    if (!rawContent) return { intro: "", sections: [] };

    // تقسيم النص بناءً على علامة ##
    const parts = rawContent.split(/\n(?=##\s)/g);
    let intro = "";
    const sections = [];

    parts.forEach((part, index) => {
      const trimmed = part.trim();
      if (trimmed.startsWith("##")) {
        const lines = trimmed.split("\n");
        const titleLine = lines[0].replace(/^##\s*/, "").trim();
        const contentText = lines.slice(1).join("\n").trim();

        sections.push({
          id: `section-${index + 1}`,
          title: titleLine,
          content: contentText,
        });
      } else {
        intro += (intro ? "\n\n" : "") + trimmed;
      }
    });

    return { intro, sections };
  };

  // 🌟 التنقل السلس عند الضغط على أي عنصر في محتويات المقال
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // مسافة علوية لتجنب تغطية الـ Navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 🌟 نسخ رابط المقال
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!blog) return null;

  // استخراج البيانات وتجهيزها
  const { intro, sections } = parseBlogContent(blog.content);
  const heroBgImage = blog?.image || blog?.img || blog?.coverImage;
  const authorImage = blog?.author?.avatar || blog?.author?.image;
  const authorName =
    typeof blog?.author === "object" ? blog?.author?.name : blog?.author || "كاتب محترف";
  const authorRole = blog?.author?.role || "مصور محترف";

  return (
    <>
      <div className={styles.detailsPage}>
        {/* 1. سكشن الهيرو */}
        <section
          className={styles.heroSection}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(11, 12, 16, 0.75), rgba(11, 12, 16, 0.95)), url(${heroBgImage})`,
          }}
        >
          <div className="container">
            <div className={styles.heroContent}>
              {/* مسار التصفح (Breadcrumb) */}
              <div className={styles.breadcrumb}>
                <Link to="/Home">
                  <i className="fa-solid fa-house me-1"></i> الرئيسية
                </Link>
                <i className="fa-solid fa-chevron-left mx-2 text-muted fs-7"></i>
                <Link to="/Forkify">المدونة</Link>
                <i className="fa-solid fa-chevron-left mx-2 text-muted fs-7"></i>
                <span className={styles.activeCategory}>
                  {blog?.category || "عام"}
                </span>
              </div>

              {/* شارات المعاملات */}
              <div className={styles.metaBadgeGroup}>
                <span className={styles.categoryTag}>
                  {blog?.category || "تصوير"}
                </span>
                <span className={styles.metaItem}>
                  <i className="fa-regular fa-calendar me-1"></i>
                  {blog?.date}
                </span>
                <span className={styles.metaItem}>
                  <i className="fa-regular fa-clock me-1"></i>
                  {blog?.readTime}
                </span>
              </div>

              {/* العنوان الرئيسي */}
              <h1 className={styles.mainTitle}>{blog?.title}</h1>

              {/* كارت الكاتب في الهيرو */}
              <div className={styles.authorCardHeader}>
                <img
                  src={authorImage}
                  alt={authorName}
                  className={styles.authorAvatar}
                />
                <div>
                  <h4 className={styles.authorName}>{authorName}</h4>
                  <span className={styles.authorRole}>{authorRole}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. سكشن المحتوى الرئيسي */}
        <div className="container py-5">
          <div className="row g-4 position-relative">
            {/* المقال الرئيسي */}
            <div className="col-12 col-lg-8">
              <div className={styles.mainArticleContent}>
                {/* اقتباس / ملخص المقال */}
                {blog?.excerpt && (
                  <div className={styles.quoteBox}>"{blog.excerpt}"</div>
                )}

                {/* المقدمة */}
                {intro && (
                  <div className={styles.paragraph}>
                    {intro.split("\n\n").map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* أقسام المقال الديناميكية */}
                {sections.map((sec, idx) => (
                  <div
                    key={sec.id}
                    id={sec.id}
                    className={styles.contentBlock}
                  >
                    <h3>
                      <i className="fa-solid fa-camera-retro me-2 text-warning"></i>
                      {sec.title}
                    </h3>
                    {sec.content.split("\n\n").map((paragraph, pIdx) => (
                      <p key={pIdx} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                {/* الوسوم الديناميكية */}
                {blog?.tags && blog.tags.length > 0 && (
                  <div className={styles.tagsContainer}>
                    <span className={styles.tagLabel}>
                      <i className="fa-solid fa-tags me-1"></i> الوسوم:
                    </span>
                    {blog.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tagBadge}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* مشاركة المقال */}
                <div className={styles.shareContainer}>
                  <span className={styles.shareLabel}>
                    <i className="fa-solid fa-share-nodes me-1"></i> شارك المقال:
                  </span>
                  <div className={styles.shareBtns}>
                    <button
                      onClick={handleCopyLink}
                      title="نسخ الرابط"
                      className={copied ? "text-success" : ""}
                    >
                      <i
                        className={`fa-solid ${
                          copied ? "fa-check" : "fa-link"
                        }`}
                      ></i>
                    </button>
                    <a className="btn btn-primary"
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      title="لينكد إن"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-secondary"
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        blog.title
                      )}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noreferrer"
                      title="إكس"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a className="btn btn-danger"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      title="فيسبوك"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                </div>

                {/* كارت الكاتب في الأسفل */}
                <div className={styles.bottomAuthorBox}>
                  <img
                    src={authorImage}
                    alt={authorName}
                    className={styles.bottomAuthorImg}
                  />
                  <div>
                    <span className={styles.authorTag}>كاتب المقال</span>
                    <h4 className={styles.bottomAuthorName}>{authorName}</h4>
                    <p className={styles.bottomAuthorBio}>
                      {authorRole} شغوف بمشارك المعرفة والخبرات وتطوير مهارات
                      التصوير الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* الجانب الأيسر: الـ Sticky Sidebar */}
            <div className="col-12 col-lg-4">
              <div className={styles.stickySidebar}>
                {/* 1. قائمة محتويات المقال التفاعلية والديناميكية */}
                {sections.length > 0 && (
                  <div className={styles.sidebarCard}>
                    <div className={styles.sidebarTitle}>
                      <i className="fa-solid fa-bars-staggered me-2 text-warning"></i>
                      محتويات المقال
                    </div>
                    <ul className={styles.tocList}>
                      {sections.map((sec, idx) => (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            onClick={(e) => scrollToSection(e, sec.id)}
                          >
                            {idx + 1}. {sec.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 2. الإحصائيات */}
                <div className="row g-2 my-1">
                  <div className="col-6">
                    <div className={styles.statBox}>
                      <i className="fa-regular fa-clock text-warning fs-5 mb-1"></i>
                      <div className="fw-bold text-white fs-6">
                        {blog?.readTime || "5 دقائق"}
                      </div>
                      <small className="text-white-50 fs-7">وقت القراءة</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={styles.statBox}>
                      <i className="fa-regular fa-eye text-warning fs-5 mb-1"></i>
                      <div className="fw-bold text-white fs-6">
                        {blog?.id * 12 + 150} مشاهدة
                      </div>
                      <small className="text-white-50 fs-7">القراءات</small>
                    </div>
                  </div>
                </div>

                {/* 3. كارت التصفح للمزيد */}
                <div className={styles.newsletterCard}>
                  <div className={styles.newsletterIcon}>
                    <i className="fa-regular fa-newspaper"></i>
                  </div>
                  <h5 className="text-white fw-bold mb-1 fs-6">
                    استكشف المزيد من المقالات
                  </h5>
                  <p className="text-white-50 fs-7 mb-3">
                    تصفح أحدث الدروس والتقنيات الاحترافية
                  </p>
                  <button
                    className={styles.subscribeBtn}
                    onClick={() => navigate("/Forkify")}
                  >
                    تصفح جميع المقالات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}