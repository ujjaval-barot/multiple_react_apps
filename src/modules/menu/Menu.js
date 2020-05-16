import React, { Component } from "react";
import HeaderWithDrawer from "../../components/HeaderWithDrawer";
import MenuItems from "../../components/MenuItems";

import { Row, Col, Divider } from "antd";
import "./Menu.scss";
export default class Menu extends Component {
  componentDidMount() {
    this.props.getMenus();
  }

  render() {
    //get menu items from state
    const { menu, loading } = this.props.menu;
    return (
      <div>
        <HeaderWithDrawer title="Food Cart" />
        <Row
          className="row-container"
          type="flex"
          justify="center"
          align="middle"
        >
          <Col xs={23} sm={22} md={21} lg={20} xl={19}>
            <Row>
              <p className="header-title">
                Choose your preferred type of food..!
              </p>
            </Row>

            <Row>
              {!loading &&
                menu.map((menu) => {
                  return (
                    <Col key={menu.id} span={8} className="gutter-row">
                      <div className="gutter-box">
                        {/* rendering child component to display menu items*/}
                        <MenuItems
                          itemId={menu.id}
                          items={menu.items}
                          name={menu.name}
                          image={menu.image}
                        />
                      </div>
                    </Col>
                  );
                })}
            </Row>
            <Divider />
          </Col>
        </Row>
      </div>
    );
  }
}
