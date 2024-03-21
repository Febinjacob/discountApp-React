import React, { useState } from 'react'
import { Button } from '@mui/material';
import { TextField } from '@mui/material';


function Discount() {
    const [originalPrice, setOriginalPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [savedPrice, setSavedPrice] = useState(0);
    const calculateDiscount = () => {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const finalPrice = originalPrice - discountAmount;
        setDiscountedPrice(finalPrice);
        const savedAmount = originalPrice-finalPrice;
        setSavedPrice(savedAmount);
    }
    const reset = () => {
        setOriginalPrice(0);
        setDiscountPercentage(0);
        setDiscountedPrice(0);
        setSavedPrice(0);
    }

    return (
        <div>
            <div className='m-5 p-5 d-flex justify-content-center align-items-center'>
                <div className="App">
                    <div className="container" style={{backgroundColor:'#FFF3C7',borderRadius:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
                        <div className="headings" style={{paddingTop:'20px'}}>
                            <h1 style={{ textAlign: 'center' }} >Discount Calculator</h1>
                            <p style={{ textAlign: 'center' }} >Calculate Your Discounted Price</p>
                        </div><br />
                        <div className="total m-2">
                            <p style={{ color: 'ActiveCaption' }}>Your Discounted Price</p>
                            <h3 style={{ color: 'blue' }}>&#8377; {discountedPrice}</h3>

                        </div>
                        <div className="form">
                            <form>
                                <div className="input">
                                    <TextField className='m-2'
                                        id="outlined-basic"
                                        label="Original Price "
                                        onChange={(e) => setOriginalPrice(e.target.value)}
                                        value={originalPrice || ""}
                                        variant="outlined"
                                    />
                                    <TextField className='m-2'
                                        id="outlined-basic"
                                        label="Discount Percentage"
                                        onChange={(e) => setDiscountPercentage(e.target.value)}
                                        value={discountPercentage || ""}
                                        variant="outlined"
                                    />
                                    <div className="total m-2">
                                        <p style={{ color: 'ActiveCaption' }}>You Saved</p>
                                        <h3 style={{ color:'green' }}>&#8377; {savedPrice}</h3>

                                    </div>

                                </div>
                                <br />
                                <div className="button" style={{ textAlign: 'center', paddingBottom:'20px' }}>
                                    <Button className='m-2' onClick={calculateDiscount} variant="contained">
                                        Calculate
                                    </Button>
                                    <Button className='m-2' onClick={reset} variant="outlined">
                                        Reset
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Discount