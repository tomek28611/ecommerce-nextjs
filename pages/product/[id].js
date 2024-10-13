import React, { useState, useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CartContext } from "@/components/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Header from "@/components/Header";
import Link from 'next/link';
import Info from "@/components/InfoSupport"; 

export default function ProductPage({ product }) {
    const [index, setIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { addProduct } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false); 
    const [message, setMessage] = useState(''); 

    const handleImageClick = () => {
        setIsFullScreen(true); 
    };

    const handleCloseFullScreen = () => {
        setIsFullScreen(false); 
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
           <Header setMenuOpen={setMenuOpen} /> 
            {isFullScreen && (
                <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
                    <img src={product.images[index]} className="full-screen-image" alt="Full Screen" />
                </div>
            )}

            <div className="product-detail-container">
                <div>
                    <div className="image-wrapper">
                        <div className="image-container" onClick={handleImageClick}>
                            <img
                                src={product.images[index]}
                                className="product-detail-image"
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
                    <div className="quantity"></div>
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
                            <button className="continue-button" onClick={handleCloseMessage}>Pokračovat v prohlížení</button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .full-screen-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .full-screen-image {
                    max-width: 90%;
                    max-height: 90%;
                }

                .image-wrapper {
                    position: relative;
                    cursor: pointer;
                }

                .image-wrapper:hover::before {
                    content: 'Ukázat fotku';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 16px;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 5px 10px;
                    border-radius: 5px;
                    pointer-events: none;
                }

                .product-detail-image {
                    width: 100%;
                    height: auto;
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
                    background-color: #f0f0f0; /* Light gray background */
                    border-radius: 8px;
                    padding: 40px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    border: 5px solid green;
                }

                .message-text {
                    color: green; 
                    font-size: 18px; 
                }

                .message-buttons {
                    margin-top: 15px;
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
                    transition: background-color 0.3s;
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
