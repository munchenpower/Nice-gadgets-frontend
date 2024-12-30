import React, { useMemo, FC, useState } from 'react';
import { SelectSection } from '../SelectSection/SelectSection';
import { useFetchData } from '../../hooks/useFetchData';
import { Product } from '../../types/Product';
import { Catalog } from '../Catalog';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';
import './ProductList.scss';
import classNames from 'classnames';

const defaultQuery = {
  limit: '8',
  offset: '0',
  sortBy: 'year'
};

type Props = {
  productType: string;
  title: string;
};

export const ProductList: FC<Props> = ({ productType, title }) => {
  const [query, setQuery] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const queryParams = useMemo(() => {
    const params = {
      limit: query.get('limit') || defaultQuery.limit,
      offset: query.get('offset') || defaultQuery.offset,
      sortBy: query.get('sortBy') || defaultQuery.sortBy
    };

    const pageNumber = Number(params.offset) / Number(params.limit) + 1;

    setCurrentPage(pageNumber);

    return params;
  }, [query]);

  const queryString = useMemo(() => {
    let newQueryString = '?';

    (Object.keys(queryParams) as (keyof typeof queryParams)[]).forEach(
      (key, index) => {
        const ampersand = index !== 0 ? '&' : '';
        newQueryString += `${ampersand}${key}=${queryParams[key]}`;
      }
    );

    return newQueryString;
  }, [queryParams]);

  const {
    isLoading,
    count,
    data: phones
  } = useFetchData<Product>(productType, queryString);

  const numberOfPages = Math.ceil(count / +queryParams.limit);
  const numberOfPagesArray = Array.from({ length: numberOfPages }, (_, i) => i);

  const handleChangePage = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    let page = target.getAttribute('data-value');
    let offset = `${Number(queryParams.limit) * Number(page)}`;

    if (page && isNaN(+page)) {
      page =
        page === 'prev'
          ? (currentPage - 1).toString()
          : (currentPage + 1).toString();

      offset = `${Number(queryParams.limit) * Number(+page - 1)}`;
    }

    setQuery({
      offset,
      sortBy: queryParams.sortBy,
      limit: queryParams.limit
    });
  };

  const handleChangeLimit = (lim: string) => {
    setQuery({
      limit: lim,
      sortBy: queryParams.sortBy
    });
  };
  const handleChangeSortBy = (sort: string) => {
    setQuery({
      limit: queryParams.limit,
      sortBy: sort
    });
  };

  return (
    <section>
      <div className="productList__title">{title}</div>
      <div className="productList__total-models">{count} models</div>
      <SelectSection
        selectedPerPage={{
          value: queryParams.limit,
          label: queryParams.limit
        }}
        selectedSortBy={{
          value: queryParams.sortBy,
          label: queryParams.sortBy
        }}
        perPageChangeHandler={handleChangeLimit}
        sortChangeHandler={handleChangeSortBy}
      />
      {isLoading ? <Loader /> : <Catalog products={phones} />}
      <div className="productList__buttons-block">
        <button
          onClick={handleChangePage}
          className="productList__button productList__button--adjust"
          data-value={'prev'}
          disabled={currentPage === 1}
        >
          &lsaquo;
        </button>
        {numberOfPagesArray.map((page) => (
          <button
            onClick={handleChangePage}
            className={classNames(
              'productList__button productList__button--page',
              {
                'productList__button--page--active': currentPage === page + 1
              }
            )}
            data-value={`${page}`}
            disabled={currentPage === page + 1}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleChangePage}
          className="productList__button productList__button--adjust"
          data-value={'next'}
          disabled={currentPage === numberOfPages}
        >
          &rsaquo;
        </button>
      </div>
    </section>
  );
};
