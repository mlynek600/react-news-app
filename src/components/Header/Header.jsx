import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/jordan"
            name="michael jordan news"
            active={activeItem === "jordan news"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/help"
            name="help"
            active={activeItem === "help"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item>
              <LanguageDropdown
                onLanguageChange={this.props.onLanguageChange}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
