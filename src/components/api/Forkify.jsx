import React, { useState, useEffect } from "react";
import styles from "./forkify.module.css";
import BlogControls from "../BlogControls/BlogControls";
import BlogCard from "../BlogCard/BlogCard";
import Pagination from "../Pagination/Pagination"; // 👈 استدعاء مكون الترقيم
import blogsData from "../../assets/posts.json"; // 👈 تأكد من المسار عندك

export default function Forkify() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");

  // State لإدارة أسلوب العرض (Grid أو List)
  const [viewMode, setViewMode] = useState("grid");

  // State لإدارة رقم الصفحة الحالية
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // عرض 6 كروت في الصفحة الواحدة

  // 1. جلب البيانات عند فتح الصفحة
  useEffect(() => {
    const posts = Array.isArray(blogsData)
      ? blogsData
      : blogsData?.blogs || blogsData?.posts || blogsData?.articles || [];
    setBlogs(posts);
    setFilteredBlogs(posts);
  }, []);

  // 2. الفلترة عند تغيير التصنيف أو كلمة البحث
  useEffect(() => {
    let result = blogs;

    if (selectedCategory !== "جميع المقالات") {
      result = result.filter(
        (b) => b.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((b) =>
        b.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBlogs(result);
    setCurrentPage(1); // العودة للصفحة الأولى تلقائياً عند تغيير البحث أو التصنيف
  }, [selectedCategory, searchQuery, blogs]);

  // 3. حساب الكروت الخاصة بالصفحة الحالية فقط (Slice للـ 6 مقالات)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  return (
    <div style={{ backgroundColor: "#0b0c10", minHeight: "100vh", paddingBottom: "60px" }}>
      {/* سكشن الهيرو */}
      <section className={styles.heroSection}>
        <div className="container text-center position-relative">
          <div className={styles.badgeWrapper}>
            <span className={styles.orangeDot}></span>
            <i className="fa-solid fa-newspaper me-1"></i>
            <span className={styles.badgeText}>مدونتنا</span>
          </div>

          <h1 className={styles.mainTitle}>
            استكشف <span className={styles.highlightText}>مقالاتنا</span>
          </h1>

          <p className={styles.subTitle}>
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      {/* شريط البحث والفلترة Sticky */}
      <BlogControls
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="container my-4">
        {/* شريط الـ Header العلوي للكروت (عدد المقالات + أزرار التبديل) */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          
          {/* اليمين: عرض عدد المقالات المفلترة الإجمالي */}
          <div className="text-white-50 fs-6">
            عرض <span className="fw-bold text-white fs-5 mx-1">{filteredBlogs.length}</span> مقالات
          </div>

          {/* الشمال: أزرار تحويل أسلوب العرض */}
          <div className="d-flex align-items-center gap-2">
            
            {/* زر List View */}
            <button
              className={`btn btn-sm ${
                viewMode === "list" ? "btn-warning text-dark" : "btn-dark text-white-50"
              }`}
              style={{ borderRadius: "8px", padding: "6px 12px" }}
              onClick={() => setViewMode("list")}
              title="عرض كقائمة"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            {/* زر Grid View */}
            <button
              className={`btn btn-sm ${
                viewMode === "grid" ? "btn-warning text-dark" : "btn-dark text-white-50"
              }`}
              style={{ borderRadius: "8px", padding: "6px 12px" }}
              onClick={() => setViewMode("grid")}
              title="عرض كشبكة"
            >
              <i className="fa-solid fa-border-all"></i>
            </button>

          </div>
        </div>

        {/* شبكة الكروت المقطوعة بناءً على الصفحة الحالية (currentBlogs) */}
        <div className="row g-4">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blogItem, index) => (
              <div
                key={blogItem.id || index}
                className={viewMode === "grid" ? "col-12 col-md-6 col-lg-4" : "col-12"}
              >
                <BlogCard blog={blogItem} isListView={viewMode === "list"} />
              </div>
            ))
          ) : (
            <div className="text-center text-white-50 py-5">
              <h3>لا توجد مقالات تطابق بحثك</h3>
            </div>
          )}
        </div>

        {/* أزرار التنقل بين الصفحات Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 300, behavior: "smooth" }); // صعود سلس أعلى الكروت
          }}
        />
      </div>
    </div>
  );
}