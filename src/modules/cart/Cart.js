import React, { Component } from "react";
import { Divider, Row, Col, Card } from "antd";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import HeaderWithDrawer from "../../components/HeaderWithDrawer";
import "./Cart.scss";

export default class Cart extends Component {
  render() {
    let cart = [];
    let totalAmount = 0;
    const { menu } = this.props.menu;
    const { isSubItemChild } = this.props;

    // fetch and store items which are in cart
    let addedToCartItems =
      menu &&
      menu.map((item) => {
        item.items.map((subItem) => {
          if (subItem.count >= 1) {
            cart.push(subItem);
          }
        });
      });

    return (
      <>
        {!isSubItemChild ? <HeaderWithDrawer title="Food Cart" /> : null}

        <Col span={8}>
          <Card headStyle={{ background: "#888888" }} title="Your Order">
            {cart &&
              cart.map((item, index) => {
                //generate total amount
                totalAmount += item.price * item.count;
                return (
                  <Row key={index}>
                    <Col span={1}>
                      <PlusCircleTwoTone
                        style={{ fontSize: 20 }}
                        type="primary"
                        // onclick increase quantity
                        onClick={() => this.props.increaseQuantity(item)}
                        twoToneColor="#71a95a"
                      />
                    </Col>
                    <Col span={4}>
                      <p className="avoid-select center">{item.count} Qty.</p>
                    </Col>
                    <Col span={2}>
                      <MinusCircleTwoTone
                        style={{ fontSize: 20 }}
                        // onclick decrease quantity
                        onClick={() => this.props.decreaseQuantity(item)}
                        twoToneColor="#d55252"
                      />
                    </Col>
                    <Col span={13}>
                      <p className="avoid-select">{item.name}</p>
                    </Col>
                    <Col span={4}>
                      <p className="avoid-select">
                        {item.price * item.count} ₹.
                      </p>
                    </Col>
                  </Row>
                );
              })}
            <Divider></Divider>
            <Row>
              <Col span={20}>
                <p className="avoid-select bold">Total Amount</p>
              </Col>
              <Col span={4}>
                <p className="avoid-select bold">{totalAmount} ₹.</p>
              </Col>
            </Row>
            <Divider></Divider>
          </Card>
        </Col>
      </>
    );
  }
}
