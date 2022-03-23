import React, { useEffect } from "react";
import axios from "axios";

// components

import CardTable from "components/Cards/CardTable.js";

export default function Tables() {

  const [data, setData] = React.useState([]);


  useEffect(() =>{
    const getdata = async () => {
     const {data} = await axios.get('http://localhost:4000/product/getall');
     setData(data)
    };
    getdata()
    return () =>{
      setData([''])
    }
    
  },[]);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable data = {data} />
        </div>
      </div>
    </>
  );
}
