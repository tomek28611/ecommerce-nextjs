import React, { useState, useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CartContext } from "@/components/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Header from "@/components/Header";
import Link from 'next/link';
import Info from "@/components/InfoSupport";
import Head from "next/head";

export default function ProductPage({ product }) {
    const [index, setIndex] = useState(0);
    const { addProduct } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const handleZoom = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { width, height } = target.getBoundingClientRect();
        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;
        setZoomPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
    };

    const handleAddToCart = () => {
        addProduct(product._id);
        setMessage(`Produkt "${product.title}" byl přidán do košíku. Chcete se podívat na košík?`);
    };

    const handleCloseMessage = () => {
        setMessage('');
    };

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Auto Dily Express | {product.title}</title>
                <meta
                    name="description"
                    content="Objevte širokou nabídku kvalitních autodílů pro vozy Mercedes..."
                />
                <link rel="cannonical"  href={`https://www.autodilyexpress.cz/nahradni-dily/${product.title}`} />
                <link rel="apple-touch-icon" sizes="180x180" href="/auto-dily-logo.png" />
                <meta property="og:locale" content="cs_CZ" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Nabízíme motorové díly..." />
                <meta property="og:image" content="/auto-dily-logo.png" />
                <meta property="og:description" content="Nabízíme motorové díly, prvky karoserie..." />
                <meta property="og:url" content="https://autodilyexpress.cz" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header setMenuOpen={setMenuOpen} />

            <div className="product-detail-container">
                <div >
                    <div className="image-wrapper">
                        <div 
                            className="image-container"
                            onMouseMove={handleZoom}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                backgroundImage: `url(${product.images[index]})`,
                                backgroundPosition: isZoomed
                                    ? `${zoomPosition.x}% ${zoomPosition.y}%`
                                    : 'center',
                                backgroundSize: isZoomed ? '200%' : 'contain',
                            }}
                        >
                            <img
                                src={product.images[index]}
                                className="product-detail-image"
                                alt="Product Image"
                                style={{ visibility: isZoomed ? 'hidden' : 'visible' }}
                            />
                        </div>
                    </div>
                    <div className="small-images-container">
                        {product.images?.map((item, i) => (
                            <img
                                key={i}
                                src={item}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-detail-desc">
                    <h1>{product.title}</h1>
                    

                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Detail</h4>
                    <p>{product.description}</p>
                    <p className="price">CZK {product.price}</p>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={handleAddToCart}>
                            Přidat do košíku
                        </button>
                    </div>
                </div>
            </div>
            <Info />

            {message && (
                <div className="message-overlay">
                    <div className="message-container">
                        <p className="message-text">{message}</p>
                        <div className="message-buttons">
                            <Link href="/cart">
                                <button className="view-cart-button">Podívejte se na košík</button>
                            </Link>
                            <button className="continue-button" onClick={handleCloseMessage}>
                                Pokračovat v prohlížení
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .image-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-color: #f0f0f0;
                    cursor: zoom-in;
                    overflow: hidden;
                    
                }

                .product-detail-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }

                .message-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .message-container {
                    background-color: #f0f0f0;
                    border-radius: 8px;
                    padding: 40px;
                    text-align: center;
                    border: 5px solid green;
                }

                .message-text {
                    color: green;
                    font-size: 18px;
                }

                .view-cart-button, .continue-button {
                    background-color: gray;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 15px;
                    margin: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }

                .view-cart-button:hover, .continue-button:hover {
                    background-color: #005bb5;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
    };
}