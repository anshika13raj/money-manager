/**
 * Progress bar for each category
 */

function ProgressBar({ title, value, max }) {

  const percentage =
    max === 0 ? 0 : (value / max) * 100;

  return (

    <div className="progress-card">

      <div className="progress-header">

        <span>{title}</span>

        <span>₹{value}</span>

      </div>

      <div className="progress-track">

        <div

          className="progress-fill"

          style={{
            width: `${percentage}%`
          }}

        ></div>

      </div>

    </div>

  );

}

export default ProgressBar;
