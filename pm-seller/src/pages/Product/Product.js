import React, { useState } from "react";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Paginnation1";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner1";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <>    
    
      <div className="max-w-container mx-auto px-4" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        {/* ================= Products Start here =================== */}
        <div className="w-full h-full flex pb-20 gap-10 mt-10 ml-10 mr-10">
          <div className="w-full mdl:w-[80%] lgl:w-[100%] h-full flex flex-col gap-10">
            <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
            <Pagination itemsPerPage={itemsPerPage} />
          </div>
        </div>
        {/* ================= Products End here ===================== */}
      </div>
    </>

  );
};

export default Shop;
