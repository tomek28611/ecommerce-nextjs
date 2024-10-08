import React, { useState, useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CartContext } from "@/components/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Header from "@/components/Header";

export default function ProductPage({ product }) {
    const [index, setIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { addProduct } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false); 

    const handleImageClick = () => {
        setIsFullScreen(true); 
    };

    const handleCloseFullScreen = () => {
        setIsFullScreen(false); 
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
                        <button type="button" className="add-to-cart" onClick={() => addProduct(product._id)}>
                            Přidat do košíku
                        </button>
                    </div>
                </div>
            </div>

            
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
