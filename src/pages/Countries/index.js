import React, { useState, useContext } from "react";
import { Pagination, List } from "antd";
import { useNavigate } from "react-router-dom";
import { CountryContext } from "../../context";

function Countries() {
  const { setcountry, countries } = useContext(CountryContext);
  const [Content, setContent] = useState(countries.slice(0, 12));

  const navigate = useNavigate();

  const fetchContent = (page, pageSize) => {
    let start = pageSize * (page - 1);
    setContent(countries.slice(start, start + pageSize));
  };

  return (
    <div className="container">
      <div className="title">Countries</div>
      <List
        size="small"
        bordered
        dataSource={Content}
        renderItem={(item, index) => (
          <List.Item>
            <div className="row" key={index}>
              <img
                height={"20px"}
                width={"30px"}
                alt={item?.flags?.alt}
                src={item?.flags?.png}
              />
              <button
                onClick={() => {
                  setcountry(item);
                  navigate("/country");
                }}
                className="button"
              >
                {item?.name?.common}
              </button>
            </div>
          </List.Item>
        )}
      />
      <div className="pagination">
        <Pagination
          onChange={(page, pageSize) => fetchContent(page, pageSize)}
          defaultCurrent={1}
          pageSize={12}
          total={countries.length}
          responsive={true}
        />
      </div>
    </div>
  );
}
export default Countries;
