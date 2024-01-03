import React, { useContext } from "react";
import { TUOTTEET } from "../../tuotteet";
import { KauppaContext } from "../../context/kauppa-context";
import { OstosKorinTuote } from "./ostoskori-tuote";
import { useNavigate } from "react-router-dom";
import "./ostoskori.css";

export const Ostoskori = () => {
    const { ostoskoriTuotteet, laskeLoppuSumma, checkout } = useContext(KauppaContext);
    const loppuSumma = laskeLoppuSumma();

    const navigate = useNavigate();
    return (
    <div className="ostoskori">
        <div>
            <h1> Ostoskorisi Tuotteet </h1>
        </div>
        <div className="ostoskori">
            {TUOTTEET.map((tuote) => {
                if (ostoskoriTuotteet[tuote.id] !== 0) {
                    return <OstosKorinTuote data = {tuote} />;
                }
            })}
        </div>
        {loppuSumma > 0 ? (
        <div className="checkout">
            <p> Loppusumma: ${loppuSumma}</p>
            <button onClick={() => navigate("/")}> Jatka Ostoksia </button>
            <button onClick={() => {
                checkout();
                navigate("/checkout");
            }}
            >
                Maksa 
            </button>
        </div>
        ) : (
            <h1> Ostoskorisi on tyhjä </h1>
        )}
    </div>
    );
};