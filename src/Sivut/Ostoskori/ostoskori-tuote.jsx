import React, { useContext } from "react";
import { KauppaContext } from "../../context/kauppa-context";

export const OstosKorinTuote = (props) => {
    const { id, tuoteNimi, hinta, tuoteKuva } = props.data;
    const { ostoskoriTuotteet, lisaaOstosKoriin, poistaOstosKorista,
         paivitaOstosKorinLkm } = useContext(KauppaContext);

    return (
        <div className="ostoskoriTuote">
        <img src={tuoteKuva}/>
        <div className="kuvaus">
            <p>
                <b> {tuoteNimi} </b>
            </p>
            <p> Hinta: ${hinta} </p>
            <div className="laskuri">
                <button onClick={() => poistaOstosKorista(id)}> - </button>

                <input
                    value={ostoskoriTuotteet[id]} onChange={(e) =>
                    paivitaOstosKorinLkm(Number(e.target.value), id)}
                />
                <button onClick={() => lisaaOstosKoriin(id)}> + </button>
            </div>
        </div>
    </div>
    );
};