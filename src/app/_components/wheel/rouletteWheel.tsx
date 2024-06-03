'use client';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: 'Prize 1', style: { backgroundColor: '#EE4040', textColor: '#ffffff' } },
    { option: 'Prize 2', style: { backgroundColor: '#F0CF50', textColor: '#000000' } },
    { option: 'Prize 3', style: { backgroundColor: '#815CD1', textColor: '#ffffff' } },
    { option: 'Prize 4', style: { backgroundColor: '#3DA5E0', textColor: '#ffffff' } },
    { option: 'Prize 5', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 6', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 7', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 8', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 9', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 10', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 11', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 12', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 13', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 14', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
    { option: 'Prize 15', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
];

const WheelRouletteApp: React.FunctionComponent = () => {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState<number>(0);
    const [winner, setWinner] = useState<string>("");

    const handleSpinClick = () => {
        // Determine the prize winner index
        const newPrizeNumber = Math.floor(Math.random() * data.length);

        // Set prize winner to reflect in wheel
        setPrizeNumber(newPrizeNumber);

        // Spin wheel
        setMustSpin(true);

        // Clear selected winner
        setWinner("");
    };

    return (
        <>
            <div>

            </div>
            <div>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    outerBorderColor={"#a8cdf362"}
                    outerBorderWidth={7}
                    radiusLineColor={"black"}
                    radiusLineWidth={2}
                    fontSize={16}
                    spinDuration={0.8}  // Set spin duration to 1 second (faster spin)
                    onStopSpinning={() => {
                        setMustSpin(false);
                        setWinner(data[prizeNumber].option);
                        alert(`You won: ${data[prizeNumber].option}`);
                    }}
                />
            </div>
            <button
                onClick={handleSpinClick}
                className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Spin the Wheel
            </button>
            {winner != "" && (
                <div className="mt-5 text-xl">
                    Selected: <strong>{winner}</strong>
                </div>
            )}
        </>
    )
}


export default WheelRouletteApp;