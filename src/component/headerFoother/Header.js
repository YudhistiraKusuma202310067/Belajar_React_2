import React from "react";
// import { Link } from "react-router-dom";

let Header = () => {
    return (
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/brand/logo_mcd.png" className="img-header-mcd" />
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/promo">Promo</Link> */}
                            </li>
                            <li className="nav-item">
                                <img src="https://www.mcdonalds.co.id/assets/img/mop/img_mop-19.webp" className="img-header" />
                            </li>
                            <li className="nav-item">
                                <img src="https://www.mcdonalds.co.id/assets/img/movieclub/img_movieclub-1.webp" className="img-header" />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dunia Anak</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Berita Terkini</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Makin Kenal <br />Makin Sayang
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                    <li><a className="dropdown-item" href="#">Produk Kami</a></li>
                                    <li><a className="dropdown-item" href="#">Restoran Kami</a></li>
                                    <li><a className="dropdown-item" href="#">Komitmen dan<br/> Tanggung Jawab<br/> Kami</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lokasi</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
    )
}

export default Header;