import React, { useState, useEffect } from 'react';
import "./Kanye.scss";

const Kanye = ({ heading }) => {

    // fetch random quote from kanye api, updating state
    const [yeQuote, setYeQuote] = useState("");
    const getYeQuote = () => {
        fetch("https://api.kanye.rest/")
            .then(response => response.json())
            .then(jsonResponse => setYeQuote(jsonResponse.quote))
            .catch(error => console.log(error));
    }

    useEffect(() => {getYeQuote()}, []); //invoke on page load, avoiding infinite loop

    return (
        <section className="kanye">
            <h2 className="kanye__heading">{heading}</h2>

            <button className="kanye___btn" onClick={getYeQuote}>Get Some Ye!</button>

            <p className="kanye__quote">{yeQuote ? yeQuote : ""}</p>
        </section>
    )
}

export default Kanye
