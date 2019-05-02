import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import media from "../../mediaTemplate";

const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  padding: 0 64px;
  font-size: large;
  z-index: 100;
  ${media.desktop`
    height: 60px;
    font-size: medium;
  `}
  ${media.tablet`
    height: 60px;
  `}
  ${media.phone`
    height: 56px;
    justify-content: space-between;
    padding: 0 1.5rem;
  `};
`;

const Dropdown = styled.ul`
  background: transparent;
  margin: 0;
  list-style: none;
  padding-left: 1rem;
  &:first-of-type {
    padding-left: 0;
  }
  li {
    width: auto;
    border-radius: 4px;
    padding: 4px 16px;
    ${media.tablet`
      line-height: 60px;
      padding: 4px 8px;
    `};
    ${media.phone`
      line-height: 56px;
      padding: 4px;
    `};
  ul {
    padding-left: 0;
  }
  a,
  a:visited {
    color: #fff;
  }
  a {
    transition: all 0,3s;
    font-weight: 700;
    ${media.phone`
      font-weight: 400;
    `};
  }
  a:hover {
    color: #000;
  }
  a:active {
    color: var(--color-tomato);
    background-color: transparent;
  }
  a:hover:before {
    background: transparent;
  }
`;

class TopNav extends Component {
  render() {
    return (
      <Nav>
        <Dropdown>
          <li>
            <Link to="/">Home</Link>
          </li>
        </Dropdown>

        <Dropdown>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </Dropdown>

        <Dropdown>
          <li>
            {/*
            <a href="#a">About</a>
            <ul>*/}
            {/*
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>*/}
            <Link to="/skills">Skills</Link>
            {/*</li>
              <li>
                <Link to="/education">Education</Link>
              </li>
            </ul>*/}
          </li>
        </Dropdown>
        {/*<!--
		<Dropdown>
			<li>
				<a href="kinetic-typography-video">CSS3</a>
			</li>
		</Dropdown>
        -->*/}
        <Dropdown>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </Dropdown>
        {/*
          <Dropdown>
            <li >
              <a href="#">Fun</a>
              <ul>
                <li>
                  <Link to="/photogalleries">Photogalleries</Link>
                  <!--
						<ul>
							<li><a href="gallery_cats.php">My Cats</a></li>
							<li><a href="gallery_around_nyc.php">Around NYC</a></li>
							<li><a href="gallery_trumptower.php">Trump Tower</a></li>
							<li><a href="gallery_views_from_esb.php">Views from Empire State Building</a></li>
							<li><a href="gallery_wallstreet.php">Wall Street</a></li>
						</ul>
                        -->
                </li>
                <li>
                  <Link to="/game">Game (GWT)</Link>
                </li>
              </ul>
            </li>
          </Dropdown>
*/}
        <Dropdown>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Dropdown>
      </Nav>
    );
  }
}

export default TopNav;

/*
${media.desktop`
    max-height: 170px;
    height: 140px;
    padding: 0 5.5%;
  
  `} ${media.laptop`
    max-height: 100px;
    padding: 0 5%;

  `} ${media.tablet`
    max-height: 80px;
    padding: 0 3%;

  `};
*/
