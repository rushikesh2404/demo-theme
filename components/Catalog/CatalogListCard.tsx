import Link from 'next/link';
import { FaEye, FaPlus } from 'react-icons/fa6';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const CatalogListCard = ({ catalogListItem, handleDeleteCatalog, selectedMultiLangData }: any) => {
  return (
    <>
      <div className="row mt-5 mb-0 mx-auto pb-0 w-100">
        <div className="offset-lg-2 col-lg-8 p-0 text-center  ">
          <h4 className="text-captilize pb-2 color-black">
            <b>{selectedMultiLangData?.catalog_list}</b>
          </h4>

          {catalogListItem?.length > 0 &&
            catalogListItem?.map((catalog: any, i: any) => (
              <div className="col-md-12 col-lg-12 mt-4 mb-0  " key={i}>
                <div className="card catalogListing-card rounded-3 mb-5">
                  <div className="card-header catalogListing-cardHeader d-flex justify-content-between border-0">
                    <h5 className="text-uppercase catalog-heading m-0 fs-16">
                      <b>{catalog?.name}</b>
                    </h5>
                    <p className="card-text d-inline-flex">
                      {selectedMultiLangData?.product_count} :
                      <span className="catalog-count ps-5">
                        {catalog?.product_counts > 10 ? catalog?.product_counts : `0${catalog?.product_counts}`}
                      </span>
                    </p>
                  </div>
                  <div className="row card-body ">
                    <div className="col-lg-5 col-md-4 py-2">
                      <Link href={`/${catalog.url}?page=1&currency=INR`}>
                        <button className="btn btn-outline-primary text-uppercase">
                          {selectedMultiLangData?.view_catalog_product}
                          <span className="ps-2">
                            <FaEye />
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 my-lg-0 my-md-0 my-3 py-2 ">
                      <Link href={`/product-category/?page=1&currency=INR`}>
                        <button className="btn btn-outline-primary bg-warning bg-opacity-50 text-uppercase">
                          {selectedMultiLangData?.add_product}
                          <span className="ps-2">
                            <FaPlus />
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center py-2">
                      <button className="btn btn-outline-primary mr-lg-5 text-uppercase" onClick={() => handleDeleteCatalog(catalog?.name)}>
                        {selectedMultiLangData?.delete_catalog}
                        <span className="ps-2 fs-16 mb-1">
                          <RiDeleteBin2Fill />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CatalogListCard;
