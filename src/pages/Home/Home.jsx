import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { setCategory } from "../../features/video/videoSlice";

const Home = () => {
    const dispatch = useDispatch();

    const { categories } = useSelector((state) => state.video);

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    return (
        <div className="pagewrapper">
            <Navbar />
            <div className="flex-column middle-content">
                <div className="hero-section flex-row-center">
                    <div className="hero-text-container flex-column">
                        <div className="hero-text flex-column">
                            <p className="hero-para">Learn And Code</p>
                            <p>
                                Do you love Web Development and thinking about
                                where to start? You are at the right place.
                                Learn Web Development by Watching Videos.
                            </p>
                        </div>
                        <Link
                            className="btn btn-primary no-link-decoration inline-flex-center hero-btn"
                            to="/videos"
                            onClick={() => {
                                dispatch(setCategory("All"));
                            }}
                        >
                            Explore Now
                        </Link>
                    </div>
                    <div className="hero-img-container">
                        <img
                            src="https://res.cloudinary.com/dwegb6a4s/image/upload/v1697449169/4900340_kvjirq.jpg"
                            className="hero-img"
                            alt="hero-img"
                        />
                    </div>
                </div>

                <div className="categories-container flex-column-center">
                    {categories.map((category, index) => (
                        <div key={category._id}>
                            <div
                                className={`flex-row-center category-container ${
                                    index % 2 ? "flex-row-reverse" : ""
                                }`}
                            >
                                <div className="category-img-container ">
                                    <img
                                        src={category.imgUrl}
                                        className="hero-img"
                                        alt="category-img"
                                    />
                                </div>
                                <div className="flex-column category-text">
                                    <p className="category-para">
                                        {category.title}
                                    </p>
                                    <p>{category.subTitle}</p>
                                    <Link
                                        className="btn btn-primary no-link-decoration inline-flex-center category-btn"
                                        to="/videos"
                                        onClick={() => {
                                            dispatch(
                                                setCategory(category.title)
                                            );
                                        }}
                                    >
                                        Check Now
                                    </Link>
                                </div>
                            </div>
                            {index !== 4 && <hr className="section-line"></hr>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
