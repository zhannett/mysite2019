import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
// import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import TopNav from "../components/shared/TopNav";

class Photogalleries extends Component {
  render() {
    return (
      <>
        <Header />
        <TopNav />
        <div role="main" className="flexrow" style={{ width: "100%" }}>
          <Layout.AsideLeft>{/*<W3C />*/}</Layout.AsideLeft>
          <main>
            <Layout.H1>Photogalleries</Layout.H1>
            <p>
              Here are some links to the pages where I keep my pictures. I am
              not a professional photographer but I like taking pictures; every
              of them is a piece of memory.
            </p>
            <p>
              This section of the website is still under development. Updates
              and new photogalleries will come shortly.
            </p>
            <ul className="galleries">
              <li id="to_gallery_cats">
                <a href="#" title="My Cats Photogallery">
                  <article>
                    <h5>My Cats</h5>
                    <img
                      src="http://janetkulyk.s3.amazonaws.com/img/cats/IMG_0146.JPG"
                      width="80"
                      height="60"
                      alt="My Cats Image Gallery"
                      title="My Cats Image Gallery"
                    />
                  </article>
                </a>
              </li>
              <li id="to_gallery_around_nyc">
                <a href="#" title="Around NYC Photogallery">
                  <article>
                    <h5>Around NYC</h5>
                    <img
                      src="http://janetkulyk.s3.amazonaws.com/img/nyc/grand_hyatt3.jpg"
                      width="80"
                      height="60"
                      alt="Around NYC Image Gallery"
                      title="Around NYC Image Gallery"
                    />
                  </article>
                </a>
              </li>
              <li id="to_gallery_views_from_esb">
                <a
                  href="#"
                  title="Views from the Emapire State Building Photogallery"
                >
                  <article>
                    <h5>Empire State Building</h5>
                    <img
                      src="http://janetkulyk.s3.amazonaws.com/img/nyc/views_esb/IMG_0127.JPG"
                      width="80"
                      height="60"
                      alt="A View from the Empire State Building Image Gallery"
                      title="A View from the Empire State Building Image Gallery"
                    />
                  </article>
                </a>
              </li>
              <li id="to_gallery_wallstreet">
                <a href="#" title="Wall Street Photogallery">
                  <article>
                    <h5>Wall Street</h5>
                    <img
                      src="http://janetkulyk.s3.amazonaws.com/img/nyc/wallstreet/IMG_0058.JPG"
                      width="80"
                      height="60"
                      alt="Wall Street Image Gallery"
                      title="Wall Street Image Gallery"
                    />
                  </article>
                </a>
              </li>
              <li id="to_gallery_trumptower">
                <a href="#" title="Trump Tower Photogallery">
                  <article>
                    <h5>Trump Tower</h5>
                    <img
                      src="http://janetkulyk.s3.amazonaws.com/img/nyc/trumptower/IMG_0171.JPG"
                      width="60"
                      height="80"
                      alt="Trump Tower Image Gallery"
                      title="Trump Tower Image Gallery"
                    />
                  </article>
                </a>
              </li>
            </ul>
            <section>
              <div
                id="gallery_cats"
                className="thegallery"
                data-behavior="photogallery prettyPhotoInit"
              >
                {/*<?php include("inc/galleries/gallery_cats.inc.php") ?>*/}
              </div>
              <div
                id="gallery_around_nyc"
                className="thegallery"
                data-behavior="photogallery prettyPhotoInit"
              >
                {/*<?php include("inc/galleries/gallery_around_nyc.inc.php") ?>*/}
              </div>
              <div
                id="gallery_views_from_esb"
                className="thegallery"
                data-behavior="photogallery prettyPhotoInit"
              >
                {/*<?php include("inc/galleries/gallery_views_from_esb.inc.php") ?>*/}
              </div>
              <div
                id="gallery_wallstreet"
                className="thegallery"
                data-behavior="photogallery prettyPhotoInit"
              >
                {/*<?php include("inc/galleries/gallery_wallstreet.inc.php") ?>*/}
              </div>
              <div
                id="gallery_trumptower"
                className="thegallery"
                data-behavior="photogallery prettyPhotoInit"
              >
                {/*<?php include("inc/galleries/gallery_trumptower.inc.php") ?>*/}
              </div>
            </section>
          </main>
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/photogalleries.php"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none", width: "450px", height: "80px" }}
          />

          <Layout.AsideRight>
            <aside>
              <div className="quot">
                <blockquote>
                  Once a year, go some place you've never been before.
                </blockquote>
              </div>
            </aside>
          </Layout.AsideRight>
        </div>
      </>
    );
  }
}

export default Photogalleries;
