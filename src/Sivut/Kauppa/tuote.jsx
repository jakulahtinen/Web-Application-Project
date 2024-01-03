import React, { useContext } from "react";
import { KauppaContext } from "../../context/kauppa-context";

export const Tuote = (props) => {
    const { id, tuoteNimi, hinta, tuoteKuva } = props.data;
    const { lisaaOstosKoriin, ostoskoriTuotteet } = useContext(KauppaContext);

    const ostosKoriLkm = ostoskoriTuotteet[id];


    return (
    <div className="tuote">
        <img src={tuoteKuva} />
        <div className="kuvaus">
            <p>
                <b> {tuoteNimi} </b>
            </p>
            <p>
                <b> ${hinta} </b>
            </p>
        </div>
        <button className="lisaaOstosKoriinNappi" onClick={() => lisaaOstosKoriin(id)}>
             Lisää Ostoskoriin {ostosKoriLkm > 0 && <>({ostosKoriLkm}) </>}
        </button>
    </div>
    );
};