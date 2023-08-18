import { Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import "./advanceSearch.scss"
import searchIcon from "../../assets/icons/fi-rs-search.svg";
import { overallServicesData } from "../../mock/overallServices";

import serviceGears from "../../assets/icons/service-gears.svg"
import trendingIcon from "../../assets/icons/fire.svg"

import handCraft from "../../assets/inHouse/handcrafts.png"
import marketPlace from "../../assets/inHouse/marketplace.png"

const AdvanceSearch = ({ isAdvanceSearch, setIsAdvanceSearch }: any) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<string[]>([]);


    const search = (query: any) => {
        const filtered: any = overallServicesData.filter((item: any) =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };


    return (
        <>
            {/* <Modal
            title=""
            wrapClassName="advance-filter-modal"
            open={isAdvanceSearch}
            // open={true}
            onOk={() => setIsAdvanceSearch(false)}
            onCancel={() => setIsAdvanceSearch(false)}
            footer={false}
            closable={false}
        >
            <Input
                type="search"
                className="input-adv-search-modal-func"
                placeholder="Search in Quiklers..."
                suffix={<img src={searchIcon} alt="" width={20} height={20} />}
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    search(e.target.value);
                }}
            />

            {searchQuery.length > 0 &&
                <div className="search-results">
                    <div className="wrapper-results">
                        {filteredData.length > 0 ? (
                            filteredData.map((item: any) => {
                                const label = item.label;
                                const index = label.toLowerCase().indexOf(searchQuery.toLowerCase());
                                const before = label.slice(0, index);
                                const match = label.slice(index, index + searchQuery.length);
                                const after = label.slice(index + searchQuery.length);

                                return (
                                    <div className="result-box" style={{ marginBottom: "10px" }}>
                                        <Row style={{ height: "100%" }}>
                                            <Col xs={6} sm={6} lg={4} style={{ height: "100%" }}>
                                                <div
                                                    className="d-flex justify-center align-center"  style={{ height: "100%" }}  >
                                                    <img src={serviceGears} alt="" width={40} height={40} />
                                                </div>
                                            </Col>
                                            <Col xs={18} sm={18} lg={20} style={{ height: "100%" }}>
                                                <div
                                                    className="d-flex justify-center flex-column" style={{ height: "100%" }} >
                                                    <p className="fs-15 fw-500">{before}<span className="highlighted-text">{match}</span>{after}</p>
                                                    {item.trending && <div className="fs-12 d-flex align-center" style={{color:'#e67e22'}}><img src={trendingIcon} width={12} height={12} alt="" /><span>Trending</span> </div>}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                );
                            })
                        ) : (
                            <div>No data found. Try another keyword.</div>
                        )}


                    </div>
                </div>
            }

           <div className="new-features-quiklers">
            <div className="cards-nx-features"></div>
           </div>
        </Modal> */}

            {isAdvanceSearch &&
                <div className="wrapper-avd" >
                    <div className="bg-close-wrapper" onClick={() => setIsAdvanceSearch(false)}></div>
                    <div className="advance-filter-modal">
                        <Input
                            type="search"
                            className="input-adv-search-modal-func"
                            placeholder="Search in Gosellr..."
                            suffix={<img src={searchIcon} alt="" width={20} height={20} />}
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                search(e.target.value);
                            }}
                        />

                        {searchQuery.length > 0 &&
                            <div className="search-results">
                                <div className="wrapper-results">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item: any) => {
                                            const label = item.label;
                                            const index = label.toLowerCase().indexOf(searchQuery.toLowerCase());
                                            const before = label.slice(0, index);
                                            const match = label.slice(index, index + searchQuery.length);
                                            const after = label.slice(index + searchQuery.length);

                                            return (
                                                <div className="result-box" style={{ marginBottom: "10px" }}>
                                                    <Row style={{ height: "100%" }}>
                                                        <Col xs={6} sm={6} lg={4} style={{ height: "100%" }}>
                                                            <div
                                                                className="d-flex justify-center align-center" style={{ height: "100%" }}  >
                                                                <img src={serviceGears} alt="" width={40} height={40} />
                                                            </div>
                                                        </Col>
                                                        <Col xs={18} sm={18} lg={20} style={{ height: "100%" }}>
                                                            <div
                                                                className="d-flex justify-center flex-column" style={{ height: "100%" }} >
                                                                <p className="fs-15 fw-500">{before}<span className="highlighted-text">{match}</span>{after}</p>
                                                                {item.trending && <div className="fs-12 d-flex align-center" style={{ color: '#e67e22' }}><img src={trendingIcon} width={12} height={12} alt="" /><span>Trending</span> </div>}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div>No data found. Try another keyword.</div>
                                    )}


                                </div>
                            </div>
                        }
                    </div>
                    <div className="new-features-quiklers">
                         <div className="cards-nx-features"><img src={handCraft} alt="" /></div>
                         <div className="cards-nx-features"><img src={marketPlace} alt="" /></div>
                    </div>
                </div>
            }
        </>
    );
};

export default AdvanceSearch;
