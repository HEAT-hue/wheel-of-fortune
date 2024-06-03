'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import chroma from 'chroma-js';

// const data = [
//     { option: 'Prize 1', style: { backgroundColor: '#EE4040', textColor: '#ffffff' } },
//     { option: 'Prize 2', style: { backgroundColor: '#F0CF50', textColor: '#000000' } },
//     { option: 'Prize 3', style: { backgroundColor: '#815CD1', textColor: '#ffffff' } },
//     { option: 'Prize 4', style: { backgroundColor: '#3DA5E0', textColor: '#ffffff' } },
//     { option: 'Prize 5', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 6', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 7', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 8', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 9', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 10', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 11', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 12', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 13', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 14', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
//     { option: 'Prize 15', style: { backgroundColor: '#34A24F', textColor: '#ffffff' } },
// ];

type WheelRouletteAppType = {
    textLines: string
}

interface WheelStyleType {
    option: string;
    style?: any
}

const WheelRouletteApp: React.FunctionComponent<WheelRouletteAppType> = ({ textLines }) => {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState<number>(0);
    const [winner, setWinner] = useState<string>("");
    const [wheelData, setWheelData] = useState<WheelStyleType[]>([{ option: '', style: { backgroundColor: '', textColor: '' } }]);

    // Populate wheel with data
    useLayoutEffect(() => {
        // Split textLines into array
        const textLineData: string[] = textLines.split(/\r?\n/);
        const wheelData = buildWheelData(textLineData);
        setWheelData(wheelData);
    }, [textLines])

    const handleSpinClick = () => {
        // Determine the prize winner index
        const newPrizeNumber = Math.floor(Math.random() * wheelData.length);

        // Set prize winner to reflect in wheel
        setPrizeNumber(newPrizeNumber);

        // Spin wheel
        setMustSpin(true);

        // Clear selected winner
        setWinner("");
    };

    function buildWheelData(data: string[]): WheelStyleType[] {
        const result = data.map(data => {
            return (
                {
                    option: data,
                    style: {
                        backgroundColor: generateRandomColor(),
                        textColor: "#ffffff"
                    }
                }
            )
        })

        return result;
    }

    // Generate random color
    function generateRandomColor() {
        // Generate a random color using Chroma.js
        return chroma.random().css();
    }

    return (
        <div className='w-max'>
            <div className='flex flex-col justify-center'>
                <div>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={wheelData}
                        outerBorderColor={"#a8cdf362"}
                        outerBorderWidth={7}
                        radiusLineColor={"black"}
                        radiusLineWidth={1}
                        fontSize={16}
                        spinDuration={0.4}  // Set spin duration to 1 second (faster spin)
                        onStopSpinning={() => {
                            setMustSpin(false);
                            setWinner(wheelData[prizeNumber].option);
                            alert(`You won: ${wheelData[prizeNumber].option}`);
                        }}
                    />
                </div>
                <button
                    onClick={handleSpinClick}
                    className="mt-5 bg-blue-500 text-white py-2 px-4 rounded w-max self-center"
                >
                    Spin
                </button>
            </div >
        </div>
    )
}


export default WheelRouletteApp;