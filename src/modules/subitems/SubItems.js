import React, { Component } from "react";
import { Divider, Button, Row, Col, Card } from "antd";
import { PlusCircleTwoTone, HeartTwoTone } from "@ant-design/icons";
import HeaderWithDrawer from "../../components/HeaderWithDrawer";
import Cart from "../cart";
import "./SubItems.scss";

export default class MenuSubItems extends Component {
  renderLikes = (item) => {
    // if item is liked then render liked icon else like icon
    if (item.liked === 1) {
      return (
        // onclick unlike item
        <Row onClick={() => this.props.unlikeItem(item)}>
          <Col span={20}>
            <p className="paragraph-container">{item.likes} Likes</p>
          </Col>
          <Col span={4}>
            <HeartTwoTone className="like-icon" twoToneColor="red" />
          </Col>
        </Row>
      );
    } else if (item.liked === 0) {
      return (
        // onclick like item
        <Row onClick={() => this.props.likeItem(item)}>
          <Col span={20}>
            <p className="paragraph-container">{item.likes} Likes</p>
          </Col>
          <Col span={4}>
            <HeartTwoTone className="like-icon" twoToneColor="#8888" />
          </Col>
        </Row>
      );
    }
  };

  renderExtra = (item) => {
    let { itemId } = this.props.match.params;
    itemId = JSON.parse(itemId);
    if (item.count === 0) {
      return (
        <div>
          {/* render likes to display on item */}
          <Row>{this.renderLikes(item)}</Row>
          <Row>
            <Button
              style={{
                backgroundColor: "#71a95a",
                borderRadius: 100,
                color: "white",
              }}
              icon={
                <PlusCircleTwoTone
                  style={{ fontSize: 17 }}
                  twoToneColor="#888888"
                />
              }
              //onclick add item to cart (check addItemToCart method)
              onClick={() => this.props.addItemToCart({ ...item, itemId })}
            >
              Add to Cart!
            </Button>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          {/* render likes to display on item */}
          <Row>{this.renderLikes(item)}</Row>
          <Row>
            <Button
              style={{
                backgroundColor: "#d55252",
                color: "white",
                borderRadius: 100,
              }}
              icon={
                <PlusCircleTwoTone
                  style={{ fontSize: 17 }}
                  twoToneColor="#888888"
                />
              }
              //onclick remove item to cart (check removeItemFromCart method)
              onClick={() => this.props.removeItemFromCart({ ...item, itemId })}
            >
              Remove from Cart!
            </Button>
          </Row>
        </div>
      );
    }
  };

  render() {
    const { menu } = this.props.menu;
    let { itemId } = this.props.match.params;
    itemId = JSON.parse(itemId);
    let subItemsData = [];
    let header = "";

    //fetching and store data by menu id
    let menuData =
      menu &&
      menu.map((menuItems) => {
        if (menuItems.id === itemId) {
          subItemsData.push(...menuItems.items);
          //fetching menu item name to display as header
          header = menuItems.name;
        }
      });

    return (
      <div>
        <HeaderWithDrawer title="Food Cart" />
        <Row className="row-container" type="flex" align="space-around">
          <Col span={13}>
            <Card headStyle={{ background: "#888888" }} title={header}>
              {subItemsData &&
                subItemsData.map((item, index) => {
                  return (
                    <Row key={index}>
                      <Col span={18}>
                        <p className="item-name avoid-select">{item.name}</p>
                        <p className="avoid-select">{item.description}</p>
                      </Col>
                      {/* rendering component into pieces for better readability */}
                      <Col span={4}>{this.renderExtra(item)}</Col>
                      <Divider />
                    </Row>
                  );
                })}
            </Card>
          </Col>
          {/* render cart to display realtime data of items */}
          <Cart isSubItemChild={true} subItemsData={subItemsData} />
        </Row>
      </div>
    );
  }
}
