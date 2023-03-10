import React from 'react'

export default function App() {
  return (
    <div><div>
    <link rel="stylesheet" href="/assests/css/font-awesome.min.css" />
    {/* New toolbar*/}
    {/*w3l-banner-slider-main*/}
    <section className="w3l-banner-slider-main">
      <div className="top-header-content">
        <header className="tophny-header">
          <div className="container-fluid">
            <div className="top-right-strip row">
              {/*//right*/}
              <div className="overlay-login text-left">
                <button type="button" className="overlay-close1">
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
                <div className="wrap">
                  <h5 className="text-center mb-4">Login Now</h5>
                  <div className="login-bghny p-md-5 p-4 mx-auto mw-100">
                    {/*/login-form*/}
                    <form action="#" method="post">
                      <div className="form-group">
                        <p className="login-texthny mb-2">Email address</p>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email
                          with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <p className="login-texthny mb-2">Password</p>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder required />
                      </div>
                      <div className="form-check mb-2">
                        <div className="userhny-check">
                          <label className="check-remember container">
                            <input type="checkbox" className="form-check" /> <span className="checkmark" />
                            <p className="privacy-policy">Remember me</p>
                          </label>
                          <div className="clearfix" />
                        </div>
                      </div>
                      <button type="submit" className="submit-login btn mb-4">Sign In</button>
                    </form>
                    {/*//login-form*/}
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
          {/*/nav*/}
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid serarc-fluid">
              <a className="navbar-brand" href="index.html">
                MinhCuong<span className="lohny">Au</span>Dio</a>
              {/* if logo is image enable this   
                <a class="navbar-brand" href="#index.html">
                  <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                </a> */}
              {/*/search-right*/}
              <div className="search-right">
                <div id="search" className="pop-overlay">
                  <div className="popup">
                    <form action="#" method="post" className="search-box">
                      <input type="search" placeholder="Keyword" name="search" required="required" autofocus />
                      <button type="submit" className="btn">Search</button>
                    </form>
                  </div>
                  <a className="close" href="#">×</a>
                </div>
                {/* /search popup */}
              </div>
              {/*//search-right*/}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fa fa-bars"> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Shopping
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="ecommerce.html">Ecommerce</a>
                      <a className="dropdown-item" href="ecommerce-single.html">Ecommerce Single</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Blog
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="blog.html">Blog</a>
                      <a className="dropdown-item" href="blog-single.html">Blog Single</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*//nav*/}
        </header>
        <div className="bannerhny-content">
          {/*/banner-slider*/}
          <div className="content-baner-inf">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/sr-italia.jpg" class="d-block w-100" alt="..." />
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>Loa Sieu Chat
                      
                        <br />50% Off</h3>
                      <a href="ecommerce.html" className="shop-button btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item item2">
                <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/background1.jpg" class="d-block w-100" alt="..." />
                  <div className="container">
                    <div className="carousel-caption">
                      <h3>Loa Nay Khong Chat
                        <br />60% Off</h3>
                      <a href="ecommerce.html" className="shop-button btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/*//banner-slider*/}
          {/*//banner-slider*/}
          <div className="right-banner">
                <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/amthanh.jpg" class="d-block w-100" alt="..." />
          
            <div className="right-1">
              <h4>
                Sale 100% No UpTo
                </h4>
            </div>
          </div>
        </div>
      </div></section>
    {/* //w3l-banner-slider-main */}
    <section className="w3l-grids-hny-2">
      {/* /content-6-section */}
      <div className="grids-hny-2-mian py-5">
        <div className="container py-lg-5">
          <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
            {/*-728x90-*/}
          </div>
          <h3 className="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
          <p className="mb-4 text-center">Handpicked Favourites just for you</p>
          <div style={{margin: '8px auto', display: 'block', textAlign: 'center'}}>
            {/*-728x90-*/}
          </div>
          <div className="welcome-grids row mt-5">
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="ecommerce.html">
                  <img  src="https://assets.nicepagecdn.com/090aae66/4287814/images/microphone.jpg" className="img-fluid" alt="" />
                  <div className="boxhny-content">
                    <h3 className="title">Micro
                    </h3></div>
                </a>
              </div>
              <h4><a href="ecommerce.html">Micro</a></h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="ecommerce.html">
                  <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/full-array.jpg" className="img-fluid" alt="" />
                  <div className="boxhny-content">
                    <h3 className="title">Product
                    </h3></div>
                </a>
              </div>
              <h4><a href="ecommerce.html">Hand Bags</a></h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="ecommerce.html">
                  <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/LSS.jpg" className="img-fluid" alt="" />
                  <div className="boxhny-content">
                    <h3 className="title">Product
                    </h3></div>
                </a>
              </div>
              <h4><a href="ecommerce.html">Hand Bags</a></h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="ecommerce.html">
                  <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/subwoofer.png" className="img-fluid" alt="" />
                  <div className="boxhny-content">
                    <h3 className="title">Product
                    </h3></div>
                </a>
              </div>
              <h4><a href="ecommerce.html">Hand Bags</a></h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="ecommerce.html">
                  <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/amtran1.jpg" className="img-fluid" alt="" />
                  <div className="boxhny-content">
                    <h3 className="title">Product
                    </h3></div>
                </a>
              </div>
              <h4><a href="ecommerce.html">Hand Bags</a></h4>
            </div>
            <div className="col-lg-2 col-md-4 col-6 welcome-image">
              <div className="boxhny13">
                <a href="ecommerce.html">
                  <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/mixer.png" className="img-fluid" alt="" />
                  <div className="boxhny-content">
                    <h3 className="title">Product
                    </h3></div>
                </a>
              </div>
              <h4><a href="ecommerce.html">Hand Bags</a></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //content-6-section */}
    {/* //specification-6*/}
    <section className="w3l-video-6">
      {/* /video-6*/}
      
      <div className="video-66-info">
        <div className="container-fluid">
          <div className="video-grids-info row">
            <div className="video-gd-right col-lg-8">
            <iframe style={{width: "100%", height: "100%"}} src="https://www.youtube.com/embed/2gX2OXzTM5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className="video-gd-left col-lg-4 p-lg-5 p-4">
              <div className="p-xl-4 p-0 video-wrap">
                <h3 className="hny-title text-left">Video Quang Cao Loa<span>Sieu Chat</span>
                </h3>
                <p>Visit our shop to see amazing creations from our designers.</p>
                <a href="ecommerce.html" className="read-more btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //video-6*/}
    {/* //products*/}
    {/* //content-6-section */}
    <section className="w3l-post-grids-6">
      {/* /post-grids*/}
      <div className="post-6-mian py-5">
        <div className="container py-lg-5">
          <h3 className="hny-title text-center mb-0 ">Latest Blog <span>Posts</span></h3>
          <p className="mb-5 text-center">Handpicked Favourites just for you</p>
          <div className="post-hny-grids row mt-5">
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <a href="blog-single.html">
                <figure>
                  <img className="img-fluid" src="https://www.nguyenkim.com/images/detailed/625/10044273-loa-platium-ad-310-pro-1.jpg" alt="blog-image" />
                </figure>
              </a>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li><a href="#admin">By admin</a></li>
                  <li className="date-post">
                    Aug 10, 2020</li>
                </ul>
                <h4><a href="blog-single.html">Here to bring your life style to the next level.</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <a href="blog-single.html">
                <figure>
                  <img className="img-fluid" src="https://muagitot.com/images/news/2021/12/10/large/4_1639129711.jpg" alt="blog-image" />
                </figure>
              </a>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li><a href="#admin">By admin</a></li>
                  <li className="date-post">
                    Aug 10, 2020</li>
                </ul>
                <h4><a href="blog-single.html">Here to bring your life style to the next level.</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <figure>
                <img className="img-fluid" src="https://loahaiphong.com/wp-content/uploads/2022/05/Kcbox-kc279-micro-cao-cap.jpg" alt="blog-image" />
              </figure>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li><a href="#admin">By admin</a></li>
                  <li className="date-post">
                    Aug 10, 2020</li>
                </ul>
                <h4><a href="blog-single.html">Here to bring your life style to the next level.</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
              <figure>
                <img className="img-fluid" src="https://laptophuyhoang.vn/wp-content/uploads/2021/12/loavitinhenkor21r228den3org-1724-1.jpg" alt="blog-image" />
              </figure>
              <div className="blog-thumbhny-caption">
                <ul className="blog-info-list">
                  <li><a href="#admin">By admin</a></li>
                  <li className="date-post">
                    Aug 10, 2023</li>
                </ul>
                <h4><a href="blog-single.html">Here to bring your life style to the next level.</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //post-grids*/}
    {/* //customers*/}
    {/* //customers-6*/}
    <section className="w3l-footer-22">
      {/* footer-22 */}
      <div className="footer-hny py-5">
        <div className="container py-lg-5">
          <div className="text-txt row">
            <div className="left-side col-lg-4">
              <h3><a className="logo-footer" href="index.html">
                  Spry<span className="lohny">S</span>tore</a></h3>
                                <a class="navbar-brand" href="#index.html">
                                    <img src="https://assets.nicepagecdn.com/090aae66/4287814/images/MinhCuongAudio.jpg" alt="Your logo" title="Your logo" style={{height: "35px"}} />
                                </a> 
              <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus a ligula quam. Ut blandit eu leo non suscipit. </p>
              <ul className="social-footerhny mt-lg-5 mt-4">
                <li><a className="facebook" href="#"><span className="fa fa-facebook" aria-hidden="true" /></a>
                </li>
                <li><a className="twitter" href="#"><span className="fa fa-twitter" aria-hidden="true" /></a>
                </li>
                <li><a className="google" href="#"><span className="fa fa-google-plus" aria-hidden="true" /></a>
                </li>
                <li><a className="instagram" href="#"><span className="fa fa-instagram" aria-hidden="true" /></a>
                </li>
              </ul>
            </div>
            <div className="right-side col-lg-8 pl-lg-5">
              <h4>abc</h4>
              <div className="sub-columns">
                <div className="sub-one-left">
                  <h6>Useful Links</h6>
                  <div className="footer-hny-ul">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms and Conditions</a></li>
                      <li><a href="contact.html">Support</a></li>
                    </ul>
                  </div>
                </div>
                <div className="sub-two-right">
                  <h6>Our Store</h6>
                  <p className="mb-5">49436 Broaddus Honey Court Avenue, Madisonville KY 95020, United States of America</p>
                  <h6>We accept:</h6>
                  <ul>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-visa" aria-hidden="true" /></a>
                    </li>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-mastercard" aria-hidden="true" /></a>
                    </li>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-paypal" aria-hidden="true" /></a>
                    </li>
                    <li><a className="pay-method" href="#"><span className="fa fa-cc-amex" aria-hidden="true" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="below-section row">
            <div className="columns col-lg-6">
              <ul className="jst-link">
                <li><a href="#">Privacy Policy </a> </li>
                <li><a href="#">Term of Service</a></li>
                <li><a href="contact.html">Customer Care</a> </li>
              </ul>
            </div>
            <div className="columns col-lg-6 text-lg-right">
              <p>© 2020 SpryStore. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">
                  W3Layouts</a>
              </p>
            </div>
            <button onclick="topFunction()" id="movetop" title="Go to top">
              <span className="fa fa-angle-double-up" />
            </button>
          </div>
        </div>
      </div>
      {/* //titels-5 */}
      {/* move top */}
      {/* /move top */}
    </section>
  </div>
  </div>
  )
}
