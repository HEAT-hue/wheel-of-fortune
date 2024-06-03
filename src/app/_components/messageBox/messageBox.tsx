import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

type MessageBoxType = {
    textLines: string
    setTextLines: Dispatch<SetStateAction<string>>
}

const MessageBox: React.FunctionComponent<MessageBoxType> = ({ textLines, setTextLines }) => {


    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        // Handle form submission here
        setTextLines(e.target.value);
    };



    return (
        <>
            <div className="border-2 border-[#E2F3E6] py-2 rounded-[12px] shadow-md">
                <textarea
                    value={textLines}
                    onChange={handleTextChange}
                    className="h-[400px] w-[450px] rounded border-l-4 border-l-[#CFECDA] bg-[#F5FBF7] resize-none outline-none p-2"
                />

            </div>
        </>
    )
}

export default MessageBox