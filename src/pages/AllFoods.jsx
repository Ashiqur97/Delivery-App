import React,{useState,useEffect} from 'react'
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/common-section/CommonSection';

import { Container,Row,Col } from 'reactstrap';

import "../styles/all-foods.css"
import "../styles/pagination.css";

import ReactPaginate from "react-paginate";

import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber,setPageNumber] = useState(0)

    const searchedProduct = products.filter((item) => {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("not found");
      }
    });    

    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage) 

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({selected}) =>{
      setPageNumber(selected)
    }



  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm=''>
              <div className='search__widget d-flex align-items-center justify-content-between w-50'>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <span>
                  <i class="ri-search-line"></i>
                  </span>
              </div>
            </Col>

     
            <Col lg='6' md='6' sm='6' className='mb-5'>
                <div className='sorting__widget text-end'>
                  <select>
                    <option>Default</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
                </div>
            </Col>
                {displayPage
                ?.filter((item) => {
                  if(searchTerm.value === "") return item;
                  if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  return item;
                })
              .map((item) =>(
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                  {" "}
                <ProductCard item={item} />
                </Col>
              ))}
            <ReactPaginate pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="prev"
            nextLabel="Next"
            containerClassName='paginationBttns' />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
