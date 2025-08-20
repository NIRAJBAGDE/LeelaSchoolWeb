import BreadCrumbsMandatory from "@/components/BreadCrumbsMandatory";
import ScrollTop from "@/components/ScrollTop";
import linksGrouped from "@/data/docLinks";
import { EyeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
import Image from 'next/image';
export default function MandatoryModules() {
 
  
 const [previewUrl, setPreviewUrl] = useState(null); // ✅ plain React

  const styles = {
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #1e3a8a, #25b1ebc4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "2.5rem",
      paddingBottom: "0.5rem",
      borderBottom: "2px solid #bfdbfe",
    },
    table: {
      width: "100%",
      border: "1px solid rgb(14, 16, 21)",
      borderCollapse: "separate",
      borderSpacing: "0",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    },
    th: {
      backgroundColor: "#e0f2fe",
      color: "#1e3a8a",
      fontWeight: 600,
      textAlign: "left",
      padding: "12px 20px",
      fontSize: "0.9rem",
      border: "1px solid #cbd5e1",
    },
    td: {
      padding: "12px 20px",
      fontSize: "0.875rem",
      border: "1px solid #e5e7eb",
      transition: "background-color 0.3s ease",
    },
    row: { backgroundColor: "#ffffff" },
    evenRow: { backgroundColor: "#f9fafb" },
    hoverRow: { backgroundColor: "#eff6ff" },
    modalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",     // 👈 Move modal down
      paddingTop: "190px",          // 👈 Add top spacing
      zIndex: 9999,
    },

    modal: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "15rem",
      width: "70vw",        // Updated: use full viewport width
      height: "60vh",       // Updated: taller preview
      overflow: "auto",
      position: "relative",
      boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
       zIndex: 9999,  
    },
    closeBtn: {
      position: "absolute",
      top: "1rem",            // Raised from 0.5rem
      right: "1rem",
      fontSize: "2rem",       // Made larger
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "#f3fbfcff",
      fontWeight: "bold",
      zIndex: 1010,           // Ensures it's above modal content
    },
    iframe: {
      width: "100%",
      height: "calc(65vh - 5rem)", // Adjust for padding
      border: "none",
    },
    previewImg: {
      maxWidth: "100%",
      maxHeight: "calc(85vh - 2rem)", // Adjust for padding
      objectFit: "contain",
    }

  };

  
  return (
    <>
 <BreadCrumbsMandatory Title="Mandatory Disclosure" subTitle="Mandatory Disclosure" />
        <div className="it-about-4-area inner-about-style pt-10 pb-05">
      <div className="container">
        <div className="row align-items-center">        
  
          <div className="col-xl-12 col-lg-12"> 
    
     
      <main style={{ fontFamily: "sans-serif", padding: "2.5rem 1rem", maxWidth: "1080px", margin: "auto" }}>
        {/* <h1 style={{ ...styles.heading, WebkitTextFillColor: undefined }}>
          Mandatory Documents Overview
        </h1> */}
                      <span className="it-section-subtitle">
                        <Image
                          src="/img/category/inner.svg"
                          alt=""
                          width={18}
                          height={18}
                        />{' '}
                        Mandatory Documents Overview
                      </span>
        


        <div style={{ width: "100%", overflowX: "auto" }}>
          {linksGrouped.map((group, groupIndex) => (
            <div key={groupIndex} style={{ marginBottom: "2rem" }}>
              <h2 style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#1e3a8a",
                borderBottom: "1px solid #cbd5e1",
                paddingBottom: "0.5rem",
                marginBottom: "1rem"
              }}>
                {group.category}
              </h2>

              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={{...styles.th, width:"350px"}}>DOCUMENTS / INFORMATION</th>
                    <th style={styles.th}>LINKS OF UPLOADED DOCUMENTS</th>
                    <th style={styles.th}>PUBLISHED ON</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        ...styles.row,
                        ...(index % 2 === 1 ? styles.evenRow : {})
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.hoverRow.backgroundColor}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor =
                        index % 2 === 1 ? styles.evenRow.backgroundColor : styles.row.backgroundColor}
                    >
                      <td style={styles.td}>{item.Info}</td>
                      <td style={styles.td}>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                          <a
                            onClick={() => setPreviewUrl(item.Links)}
                            title="Preview Document"
                            style={{
                              color: "#1d4ed8",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem"
                            }}
                          >
                            <EyeIcon style={{ width: 20, height: 20 }} />
                            <span style={{ fontSize: "0.8rem" }}>Preview</span>
                          </a>

                          {/* <a
                            href={item.Links}
                            download
                            title="Download File"
                            style={{
                              color: "#059669",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem"
                            }}
                          >
                            <ArrowDownTrayIcon style={{ width: 20, height: 20 }} />
                            <span style={{ fontSize: "0.8rem" }}>Download</span>
                          </a> */}
                        </div>
                      </td>
                      <td style={styles.td}>{item.PublishOn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

          {previewUrl && (
        <div
          style={styles.modalBackdrop}
          onClick={() => setPreviewUrl(null)}   // closes on backdrop click
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()} // prevents closing if modal itself is clicked
          >
            <button
              onClick={() => setPreviewUrl(null)}
              style={styles.closeBtn}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              aria-label="Close preview"
            >
              ×
            </button>

            {previewUrl.endsWith(".pdf") ? (
              <iframe src={previewUrl} style={styles.iframe} title="Document Preview" />
            ) : (
              <img src={previewUrl} alt="Preview" style={styles.previewImg} />
            )}
          </div>
        </div>
      )}

        <ScrollTop />

        
      </main>

      
          </div>
      </div>
    </div>
     </div>
     </>
  );
}