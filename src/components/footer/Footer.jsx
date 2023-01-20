/** @format */

import "./footer.css";

const Footer = ({ length, setPage, page }) => {
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
    console.log(selectedPage);
  };

  return (
    <>
      {length > 0 && (
        <div className='Footer'>
          <nav aria-label='Page navigation example'>
            <ul className='pagination'>
              <li
                className='page-item'
                onClick={() => selectPageHandler(page - 1)}>
                <button className='page-link'>
                  <span aria-hidden='true'>«</span>
                </button>
              </li>
              {[...Array(length / 10)].map((_, i) => {
                return (
                  <li
                    key={i}
                    className='page-item'
                    onClick={() => selectPageHandler(i + 1)}>
                    <button className='page-link'>{i + 1}</button>
                  </li>
                );
              })}
              <li
                className='page-item'
                onClick={() => selectPageHandler(page + 1)}>
                <button className='page-link'>
                  <span aria-hidden='true'>»</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export { Footer };
