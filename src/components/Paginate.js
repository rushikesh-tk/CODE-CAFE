import styles from "../Paginate.module.css";

const Paginate = ({ page, setPage, limit, setLimit, lastPage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.limit}>
        <span>Entries per page : </span>
        <select
          onChange={(e) => setLimit(Number(e.target.value))}
          value={limit}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div className={styles.page}>
        <button onClick={() => setPage(0)} disabled={page === 0}>
          &lt;&lt;
        </button>

        <button onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
          &lt;
        </button>

        <span>
          {page + 1} of {lastPage + 1}
        </span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === lastPage}
        >
          &gt;
        </button>

        <button onClick={() => setPage(lastPage)} disabled={page === lastPage}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Paginate;
