import React, { useEffect, useState } from 'react';
import './cascader.scss'; // Import your CSS for styling
import { Col, Row } from 'antd';
import { categories } from '../../mock/goSellrCategoriesData';
import arrowBack from "../../assets/icons/angle-left.svg";



const Cascader = ({ isHamburderActive, setIsHamburderActive }: any) => {

    const [isMobile, setIsMobile] = useState(false);

    const [subcategoryActive, setSubcategoryActive] = useState(false)
    const [subcategoryActiveData, setSubcategoryActiveData] = useState([])

    const [subToSubcategoryActive, setSubToSubcategoryActive] = useState(false)
    const [subToSubcategoryActiveData, setSubToSubcategoryActiveData] = useState([])

    const [activeMenuHeadSub, setactiveMenuHeadSub] = useState('')
    const [activeMenuHeadSubToSub, setactiveMenuHeadSubToSub] = useState('')

    useEffect(() => {
        if (isHamburderActive) {
            setSubcategoryActiveData([])
            setSubToSubcategoryActiveData([])
        }
    }, [isHamburderActive])


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleViewportChange(event: any) {
            setIsMobile(event.matches);
        }
        handleViewportChange(mediaQuery);
        mediaQuery.addListener(handleViewportChange);
        return () => {
            mediaQuery.removeListener(handleViewportChange);
        };
    }, []);


    return (
        <div className="cascader">
            <div className="main-categories" style={{ paddingRight: `${subcategoryActive ? "10px" : "0px"}` }}>
                {isMobile && <div className='menu-head-flex' onClick={()=> setIsHamburderActive(false)}><img src={arrowBack} width={15} height={15} alt="" />
                    Menu
                </div>}
                {
                    categories.map((item: any) => (
                        <p onClick={() => (setSubcategoryActive(true), setSubToSubcategoryActiveData([]), setSubcategoryActiveData(item.subcategories), setactiveMenuHeadSub(item.name))}> <img src={item.icon} width={14} alt="" /> {item.name}</p>
                    ))
                }
            </div>

            {subcategoryActive &&
                <div className="sub-categories" style={{ marginRight: "10px" }}>
                    {isMobile && <div className='menu-head-flex'  onClick={() => (setSubcategoryActive(false))}><img src={arrowBack} width={15} height={15} alt=""/>
                        {activeMenuHeadSub}
                    </div>}
                    {
                        subcategoryActiveData && subcategoryActiveData.map((item: any) => (
                            <p onClick={() => (setSubToSubcategoryActive(true), setSubToSubcategoryActiveData(item.subcategories), setactiveMenuHeadSubToSub(item.name))}>{item.name}</p>
                        ))
                    }
                </div>
            }
            {subToSubcategoryActive &&
                <div className="sub-categories">
                    {isMobile && <div className='menu-head-flex' onClick={() => (setSubcategoryActive(true), setSubToSubcategoryActive(false))}><img src={arrowBack} width={15} height={15} alt=""/>
                        {activeMenuHeadSubToSub}
                    </div>}
                    {
                        subToSubcategoryActiveData ? subToSubcategoryActiveData.map((item: any) => (
                            <p>{item}</p>
                        ))
                            :
                            <span>No category to show</span>
                    }
                </div>
            }
        </div>
    );
};

export default Cascader;
