import React from "react";
import { Row, Col } from "antd";

export default function Header(props) {
  return (
    <>
      {/** @desc Header */}
      <Row className="centerStyle" id="headerSection">
        <Col span={24} className="headerStyle LPrimaryBold">
          TODO List
        </Col>
      </Row>
    </>
  );
}
