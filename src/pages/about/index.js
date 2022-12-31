import React from "react";
import Layout from "@theme/Layout";
import Row1 from "../../components/About/Row1";
import Row2 from "../../components/About/Row2";

function Categories() {
  return (
    <Layout title="About Us">
       <div className="about-page">
      <h1 className="page-heading">About Us</h1>
     <Row1/>
     <Row2/>
  </div>  </Layout>
    
  );
}

export default Categories;
