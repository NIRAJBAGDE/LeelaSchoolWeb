import Head from 'next/head';
import jobs from '@/data/jobs';

export default function JobsModules() {
  const styles = {
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, #1e3a8a, #25b1ebc4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '2.5rem',
      paddingBottom: '0.5rem',
      borderBottom: '2px solid #bfdbfe',
    },
  table: {
    width: '100%',
    border: '1px solidrgb(14, 16, 21)', // Darker border for visibility
    borderCollapse: 'separate',
    borderSpacing: '0',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
  },
  th: {
    backgroundColor: '#e0f2fe',
    color: '#1e3a8a',
    fontWeight: 600,
    textAlign: 'left',
    padding: '12px 20px',
    fontSize: '0.9rem',
    border: '1px solid #cbd5e1',
  },
  td: {
    padding: '12px 20px',
    fontSize: '0.875rem',
    border: '1px solid #e5e7eb',
    transition: 'background-color 0.3s ease',
  },

    row: {
      backgroundColor: '#ffffff',
    },
    evenRow: {
      backgroundColor: '#f9fafb',
    },
    hoverRow: {
      backgroundColor: '#eff6ff',
    },
  };

return (
  <>
    <Head>
      <title>Careers at Our School</title>
    </Head>

    <main style={{ fontFamily: 'sans-serif', padding: '2.5rem 1rem', maxWidth: '1080px', margin: 'auto' }}>
  
      <h1 style={{ ...styles.heading, WebkitTextFillColor: undefined }}>
  <span
    style={{
      color: '#38bdf8', // light sky blue
      marginRight: '0.4rem',
      display: 'inline-block',
      animation: 'twinkle 1.8s infinite ease-in-out',
    }}
  >
    🚀
  </span>
  <span
    style={{
      background: styles.heading.background,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    }}
  >
    Join Our Team
  </span>
</h1>
      <div style={{
        backgroundColor: '#f2a227', // warm yellow background
        color: '#1f2937', // neutral gray text
        padding: '1.75rem 2rem',
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
        fontWeight: 600,
        fontSize: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'scroll-left 20s linear infinite',
          position: 'absolute',
          left: '100%',
        }}>
          👣 Walk-in interviews going on. 
           {/* | Dates : 14,16, 17 June 2025. | Time: 10am to 1pm &nbsp; */}
        </div>
      </div>
      <div style={{ width: '100%', overflowX: 'auto' }}>
  <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Position</th>
                <th style={styles.th}>Experience</th>
                <th style={styles.th}>Qualification</th>
                <th style={{ ...styles.th, width: '200px' }}>Date Posted</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  style={{
                    ...styles.row,
                    ...(index % 2 === 1 ? styles.evenRow : {}),
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = styles.hoverRow.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 1 ? styles.evenRow.backgroundColor : styles.row.backgroundColor)
                  }
                >
                  <td style={styles.td}>{job.Position}</td>
                  <td style={styles.td}>{job.Experience}</td>
                  <td style={styles.td}>{job.Qualification}</td>
                  <td style={{ ...styles.td, width: '200px' }}>
                    {job.DatePosted
                      ? new Intl.DateTimeFormat('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        }).format(new Date(job.DatePosted))
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      {/* 🔧 Style block must go inside JSX */}
            <style jsx>{`
        @media (max-width: 768px) {
          th, td {
            padding: 10px;
            font-size: 0.85rem;
          }
          th {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          table {
            font-size: 0.75rem;
          }
          th, td {
            padding: 8px;
          }
        }
      `}</style>
      <style jsx>{`
      @keyframes twinkle {
        0% { transform: scale(1) rotate(0deg); opacity: 1; }
        30% { transform: scale(1.3) rotate(15deg); opacity: 0.7; }
        70% { transform: scale(0.9) rotate(-10deg); opacity: 0.85; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
    `}</style>

      
      <style jsx>{`
          @keyframes shine {
            0% { transform: scale(1) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.2) rotate(15deg); opacity: 0.85; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-200%);
            }
          }
        `}</style>
    </main>
  </>
);
}
