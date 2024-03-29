import React from "react";
import ForiPrintLogo from "../../assets/logo.PNG";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

const MainHeader = () => {
  return (
    <div
      style={{
        margin: "8px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={ForiPrintLogo}
        alt="Fori_Print"
        height={60}
        style={{ marginRight: 16 }}
      />

      <Input.Group compact style={{ height: 40, display: "flex" }}>
        <Input
          style={{
            height: "inherit",
            borderRadius: "40px 0 0 40px",
            color: "#acacac",
            paddingLeft: 32,
          }}
          placeholder="Enter keyword to search..."
        />

        <Select
          defaultValue="All Categories"
          size="large"
          style={{ color: "#acacac", fontSize: 12, width: 200 }}
        >
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>

        <SearchOutlined
          style={{
            fontSize: 18,
            padding: "0 18px",
            background: "#700BA5",
            color: "#fff",
            borderRadius: "0 40px 40px 0",
            height: "100%",
            lineHeight: "45px",
            cursor: "pointer",
          }}
        />
      </Input.Group>
    </div>
  );
};

export default MainHeader;
