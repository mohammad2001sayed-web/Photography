import React from "react";
import styles from "./pagination.module.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationWrapper}>
        
        {/* زر السابق (السهم يشاور لليمين عشان يرجع لورا في RTL) */}
        <button
          className={styles.navBtn}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          title="الصفحة السابقة"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* أرقام الصفحات */}
        {pages.map((page) => (
          <button
            key={page}
            className={`${styles.pageBtn} ${
              currentPage === page ? styles.activePage : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* زر التالي (السهم يشاور للشمال عشان يمشي لقدام في RTL) */}
        <button
          className={styles.navBtn}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          title="الصفحة التالية"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

      </div>

      <div className={styles.pageInfo}>
        صفحة {currentPage} من {totalPages}
      </div>
    </div>
  );
}