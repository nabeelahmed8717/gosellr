import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import "./advanceSearch.scss"
import searchIcon from "../../assets/icons/fi-rs-search.svg";
import { searchKeywordsData } from "../../mock/overallServices";

import serviceGears from "../../assets/icons/service-gears.svg"
import trendingIcon from "../../assets/icons/fire.svg"

import handCraft from "../../assets/inHouse/handcrafts.png"
import marketPlace from "../../assets/inHouse/marketplace.png"
import arrowBack from "../../assets/icons/angle-left.svg"


const AdvanceSearch = ({ isAdvanceSearch, setIsAdvanceSearch , setGetSearchQuery }: any) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<string[]>([]);

    const [isMobile, setIsMobile] = useState(false);


    const search = (query: any) => {
        const filtered: any = searchKeywordsData.filter((item: any) =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

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
        <>
            <Modal
                title=""
                wrapClassName="advance-filter-modal"
                open={isAdvanceSearch}
                // open={true}
                onOk={() => setIsAdvanceSearch(false)}
                onCancel={() => setIsAdvanceSearch(false)}
                footer={false}
                closable={false}
            >
                <div className="fr-res-inp-wrapper">
                {isMobile && <Button onClick={() => setIsAdvanceSearch(false)} className="back-btnsp-search"><img src={arrowBack} width={16} height={16} alt="" /></Button>}
                <Input
                    type="search"
                    className="input-adv-search-modal-func"
                    placeholder="Search in Gosellr..."
                    suffix={<img src={searchIcon} alt="" width={20} height={20} />}
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        search(e.target.value);
                        setGetSearchQuery(e.target.value)
                    }}
                />
                </div>
                

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
                                        <div className="result-box">
                                            <div
                                                className="out-put-sr" style={{ height: "100%" }} >
                                                <p className="fs-15 fw-500">{before}<span className="highlighted-text">{match}</span>{after}</p>
                                                {/* {item.trending && <div className="fs-12 d-flex align-center" style={{ color: '#e67e22' }}><img src={trendingIcon} width={12} height={12} alt="" /><span>Trending</span> </div>} */}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div>No data found. Try another keyword.</div>
                            )}


                        </div>
                    </div>
                }
            </Modal>

        </>
    );
};

export default AdvanceSearch;
