import React, { useState, useEffect } from 'react';

const CoinTracker = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [inputAmount, setInputAmount] = useState('');
    const [myCoin, setMyCoin] = useState(0);

    const changeSelect = (event) => {
        const selectedId = event.target.value;
        const selectedItem = coins.find((item) => item.id === selectedId);
        setSelectedCoin(selectedItem);

        const myMoney = parseFloat(inputAmount);
        const meCoin = myMoney / (selectedItem ? selectedItem.quotes.USD.price : 1);
        setMyCoin(meCoin);
    };

    const changeUSD = (event) => {
        const inputValue = event.target.value;
        // 입력 값이 숫자가 아닌 경우 무시하고 변경하지 않음
        if (/^\d*\.?\d*$/.test(inputValue)) {
            setInputAmount(inputValue);
            const myMoney = parseFloat(inputValue);
            const meCoin = myMoney / (selectedCoin ? selectedCoin.quotes.USD.price : 1);
            setMyCoin(meCoin);
        }
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((data) => {
                setCoins(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select onChange={changeSelect}>
                    <option value="">Select a coin</option>
                    {coins.map((coin) => (
                        <option key={coin.id} value={coin.id}>
                            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
                        </option>
                    ))}
                </select>
            )}
            <input value={inputAmount} onChange={changeUSD} type="number" />
            {selectedCoin && <p>Selected Coin: {selectedCoin.name}</p>}
            <p>My Coin: {myCoin}</p>
        </div>
    );
};

export default CoinTracker;