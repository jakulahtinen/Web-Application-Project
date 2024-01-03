import { createContext, useEffect, useState } from "react";
import { TUOTTEET } from "../tuotteet";

export const KauppaContext = createContext(null);

const getDefaultCart = () => {
    let kori = {};
    for (let i = 1; i < TUOTTEET.length + 1; i++) {
        kori[i] = 0;
    }
    return kori;
};

export const KauppaContextProvider = (props) => {
    const [ostoskoriTuotteet, setOstoskoriTuotteet] = useState(getDefaultCart());

    const laskeLoppuSumma = () => {
        let loppuSumma = 0;
        for (const item in ostoskoriTuotteet) {
            if ( ostoskoriTuotteet[item] > 0) {
                let itemInfo = TUOTTEET.find((tuote) => tuote.id === Number(item));
                loppuSumma += ostoskoriTuotteet[item] * itemInfo.hinta;
            }
        }
        return loppuSumma;
    };

    const lisaaOstosKoriin = (itemId) => {
        setOstoskoriTuotteet((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
    };

    const poistaOstosKorista = (itemId) => {
        setOstoskoriTuotteet((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    };

    const paivitaOstosKorinLkm = (uusiLkm, itemId) => {
        setOstoskoriTuotteet((prev) => ({...prev, [itemId]: uusiLkm }));
    };

    const checkout = () => {
        setOstoskoriTuotteet(getDefaultCart());
    };

    const contextValue = {
        ostoskoriTuotteet,
        lisaaOstosKoriin,
        poistaOstosKorista,
        paivitaOstosKorinLkm,
        laskeLoppuSumma,
        checkout,
    };

    return (
        <KauppaContext.Provider value={contextValue}>
            {props.children}
        </KauppaContext.Provider>
    );
};