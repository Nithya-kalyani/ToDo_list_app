import React from "react";
import { Button, Row, Col } from "antd";
import { navigate } from "@reach/router";

export default function DetailView(props) {
  // props
  const { detail } = props;

  //   Go Back
  const goBack = () => {
    navigate("/home");
  };
  return (
    <div>
      {/** @desc Task details view */}
      <Row style={{ padding: "24px" }} className="centerStyle">
        <Col span={3}>
          <Button onClick={() => goBack()}>Back</Button>
        </Col>
        <Col span={21}>
          <span className="sPrimaryBold centerStyle">{detail?.subject}</span>
        </Col>
      </Row>
    </div>
  );
}
