import React, { Component } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./MenuItems.scss";

export default class MenuItems extends Component {
  render() {
    const { itemId, image, name } = this.props;
    //dynamic image import from folder by file name
    let img = image && require(`../assets/images/${image}.png`);
    return (
      <div>
        {/* redirecting to sub menu by menuId */}
        <Link
          to={{
            pathname: `/subitems/${itemId}`,
          }}
        >
          <Card
            style={{ background: "#7bc043" }}
            bodyStyle={{ padding: "2" }}
            hoverable
            className="new-card-container"
            cover={<img className="image-container" alt="example" src={img} />}
          >
            {name}
          </Card>
        </Link>
      </div>
    );
  }
}
