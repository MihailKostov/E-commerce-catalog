import classNames from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../helpers/searchHelpers';
import './Pagitation.scss';

type Props = {
  totalItems: number,
  itemsPerPage: number,
  currentPage: number,
};

export const Pagitation: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
  const pageNumbers = [];
  const pages = Math.ceil(totalItems / itemsPerPage);
  const [searchParams] = useSearchParams();

  for (let i = 1; i <= pages; i += 1) {
    pageNumbers.push(i);
  }

  const setCurrentPage = (newCurrentPage: number) => {
    return getSearchWith(searchParams, {
      page: `${newCurrentPage}`,
    });
  };

  const firstPage = pageNumbers[0];

  return (
    <ul className="pagination__box-select">
      <li className="button pagination__button">
        <Link
          to={{ search: setCurrentPage(currentPage - 1) }}
          className={classNames(
            'pagination__arr pagination__arr--left',
            {
              pagination__disabled: firstPage === currentPage,
            },
          )}
        />
      </li>

      {pageNumbers.map(number => (
        <Link
          key={number}
          to={{ search: setCurrentPage(number) }}
          className={classNames(
            'pagination__button',
            {
              'pagination__button--active': currentPage === number,
              'pagination__button--hidden': currentPage === number,
            },
          )}
        >
          {number}
        </Link>
      ))}

      <li className="button pagination__button">
        <Link
          to={{ search: setCurrentPage(currentPage + 1) }}
          className={classNames(
            'pagination__arr pagination__arr--right',
            {
              pagination__disabled: currentPage
                === pageNumbers[pageNumbers.length - 1],
            },
          )}
        />
      </li>
    </ul>
  );
};
