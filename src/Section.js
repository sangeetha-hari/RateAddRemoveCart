// import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import data from "./Product.json";
//  let da=[{
//     sr:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//  }]
export default function Section(props) {

  
  return (

    <div>
      

      <section className="py-5">
        <div classNameName="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((ele, index) => {
              return (
                <div key={index} className="col mb-5">
                  <div className="card h-100">
                    {/* <!-- Sale badge--> */}
                    {ele.saleBadge == 1 ? (
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        Sale
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {/* <!-- Product image--> */}
                    <img className="card-img-top" src={ele.src} alt="..." />
                    {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                      <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{ele["product-name"]}</h5>
                        
                        {/* !-- Product reviews--> */}
                        {ele["product-reviews"]!==0?
                          (<div className="d-flex justify-content-center small text-warning mb-2">
                          
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                          </div>):<h1></h1>
            }
                        
                        {/* <!-- Product price--> */}
                        {ele["product-price"]}
                      </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          className={props.itemArray[index]===0?("btn btn-outline-dark mt-auto") :("btn btn-outline-dark mt-aut disabled")}
                          href="#"
                          onClick={() =>{props.handlerAdd(index);}
                        }
                        >
                          {ele["product-action"]}
                        </a>
                      </div>
                    </div>
                    {ele["product-action"]==="Add Cart"?(
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a 
                          className={props.itemArray[index]>=1?("btn btn-outline-dark mt-auto "):("btn btn-outline-dark mt-auto disabled")}
                          // className="btn btn-outline-dark mt-auto disabled"
                          href="#" 
                          onClick={()=>{props.handlerRemove(index)}
                        }
                        >
                          Remove Item
                        </a>
                      </div>
                    </div>
                    ): <h6 className="text-center">New items</h6>}
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
