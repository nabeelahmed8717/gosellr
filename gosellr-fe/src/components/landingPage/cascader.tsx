import React, { useEffect, useState } from 'react';
import './cascader.scss'; // Import your CSS for styling
import { Col, Row } from 'antd';
import { categories } from '../../mock/goSellrCategoriesData';



const Cascader = ({ isHamburderActive }: any) => {

    const [subcategoryActive, setSubcategoryActive] = useState(false)
    const [subcategoryActiveData, setSubcategoryActiveData] = useState([])

    const [subToSubcategoryActive, setSubToSubcategoryActive] = useState(false)
    const [subToSubcategoryActiveData, setSubToSubcategoryActiveData] = useState([])

    useEffect(() => {
        if (isHamburderActive) {
            setSubcategoryActiveData([])
            setSubToSubcategoryActiveData([])
        }
    }, [isHamburderActive])

    


    return (
        <div className="cascader">
            <div className="main-categories" style={{paddingRight:`${subcategoryActive ? "10px" : "0px" }`}}>
                {
                    categories.map((item: any) => (
                        <p onClick={() => (setSubcategoryActive(true), setSubToSubcategoryActiveData([]), setSubcategoryActiveData(item.subcategories))}> <img src={item.icon} width={14} alt="" /> {item.name}</p>
                    ))
                }
            </div>

            {subcategoryActive &&
                <div className="sub-categories" style={{marginRight:"10px"}}>
                    {
                        subcategoryActiveData && subcategoryActiveData.map((item: any) => (
                            <p onClick={() => (setSubToSubcategoryActive(true), setSubToSubcategoryActiveData(item.subcategories))}>{item.name}</p>
                        ))
                    }
                </div>
            }
            {subToSubcategoryActive &&
                <div className="sub-categories">
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
