export default function JobCard({ job }) {
  const rowStyle = {
    backgroundColor: 'white',
    transition: 'background-color 0.2s ease',
  };

  const cellStyle = {
    padding: '0.5rem 1rem', // Equivalent to px-4 py-2
    fontSize: '0.875rem',   // Tailwind's text-sm
    borderRight: '1px solid #e5e7eb', // Light gray divider (optional)
  };

  return (
    <tr
      style={rowStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
    >
      <td style={cellStyle}>{job.Position}</td>
      <td style={cellStyle}>{job.Experience}</td>
      <td style={cellStyle}>{job.Qualification}</td>
      <td style={{ ...cellStyle, borderRight: 'none' }}>
        {job.DatePosted || '-'}
      </td>
    </tr>
  );
}