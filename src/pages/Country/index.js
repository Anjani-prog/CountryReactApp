import React, { useContext } from "react";
import { Card, Row, Col } from "antd";
import { CountryContext } from "../../context";

function Country() {
  const { country } = useContext(CountryContext);

  return (
    <Card title={country?.name?.common}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card type="inner" title="Flag">
            <img height={"20px"} width={"30px"} src={country?.flags?.png} />
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Region">
            {country?.region}
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Languages">
            {country?.languages?.ara}
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Native Name">
            {country?.name?.nativeName?.ara?.official}
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ marginTop: 16 }} type="inner" title="Capital">
            {country?.capital?.map((cap, index) => (
              <div key={index}>{cap}</div>
            ))}
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Population">
            {country?.population}
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="TimeZones">
            {country?.timezones?.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default Country;
