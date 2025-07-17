import React from 'react';
import { Link } from 'react-router-dom';
import graphics5 from '../../Images/graphic3.png';
import hairCare from '../../Images/hair.png';
import greenCheck from '../../Images/greenCheck.png';
import { ChevronsRight, CircleCheckBig } from 'lucide-react';
// import skillsImage from '../../assets/images/education/skils.jpg';

const Home = () => {
    return (
        <div className='mt-sm-3 mt-md-2 mt-2'>
            <section className="py-lg-16 py-6 ">
                <div className="container">
                    <div className="row d-flex align-items-center bg-light-pink-color rounded-3 mt-3">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-12">
                            <div>
                                <h3 className="hero-section-font fw-bold mb-3">
                                    Expert Care for Flawless Skin, Healthy Hair & Precision Laser Treatments.
                                    {/* <u className="text-warning">
                                        <span className="text-primary">demand-skills</span>
                                    </u> */}
                                </h3>
                                <p className=" mb-4">
                                    Transform your beauty with our expert skin, hair, and laser treatments. Experience the confidence of looking your best.
                                    {/* त्वचा, केस आणि शरीरासाठी खास वैयक्तिक उपचारांचा अनुभव घ्या. आमचे तज्ज्ञ तुम्हाला उत्तम दिसण्यात आणि आत्मविश्वास मिळवण्यात मदत करतील. */}
                                </p>

                                <ul className="list-unstyled mb-4">
                                    {["Advanced Technology", "Safe & Painless Treatments", "Holistic Skin & Hair Care", "Expert Consultation"].map((item, idx) => (
                                        <li className="mb-2" key={idx}>
                                            {/* <img src={greenCheck} alt='green check' height={20} /> */}
                                            <CircleCheckBig className='success-color' size={20} />
                                            <span className="ms-2">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                                    <Link to="/treatments" className="btn common-btn-style super-button " onClick={() => localStorage.setItem('language', 'mr')}>
                                        Book Appointment <ChevronsRight className='right-arrow-button secondary-color' size={20} />
                                    </Link>
                                    <Link to="/treatments" className="btn common-btn-style explore-treatment">
                                        Explore Treatments
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6 col-12 d-flex justify-content-sm-end justify-content-center my-sm-5 my-md-5 my-5">
                            <div className="mt-12 mt-lg-0 position-relative hero-image-main ">
                                <div className='hero-child-1'>
                                    <div className='hero-child-2'>
                                        <img src={graphics5} alt="online course" className="rounded-circle" height={350} width={350} />
                                    </div>
                                </div>
                                <img src={hairCare} alt="online course" className="graphic-image1 " />
                                <img src={graphics5} alt="online course" className="graphic-image2 " />
                                <img src={graphics5} alt="online course" className="graphic-image3 " />
                                <img src={graphics5} alt="online course" className="graphic-image4 " />
                                <img src={graphics5} alt="online course" className="graphic-image5 " />
                                <div className='service-label'>
                                    <p>Test1 example</p>
                                    <p>Test2 example</p>
                                    <p>Test3 example</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
