import React from "react"
import { TUOTTEET } from "../../tuotteet";
import { Tuote } from "./tuote";
import "./kauppa.css";

export const Kauppa = () => {
    return (
        <div className="kauppa">
            <div className="kaupanNimi">
                <h1>Musiikkikauppa</h1>
            </div>
            <div className="tuotteet"> {TUOTTEET.map((tuote) => (
                <Tuote data={tuote}/>
            ))}
            </div>
        </div>
    );
};