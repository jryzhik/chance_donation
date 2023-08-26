import React, { useEffect, useState } from 'react'
import ButtonSelect from './buttonSelect'

export default function DonationSelectionButtons({ callBack, recurringSelected }) {
    const [weeklyStyle, setWeeklyStyle] = useState("buttonSelectSelected")
    const [onetimeStyle, setOnetimeStyle] = useState("buttonSelect")

    useEffect(()=> {
        console.log("triggered")
        if (recurringSelected) {
            setWeeklyStyle("buttonSelectSelected")
            setOnetimeStyle("buttonSelect")
        } else {
            setWeeklyStyle("buttonSelect")
            setOnetimeStyle("buttonSelectSelected")
        }
    },[recurringSelected])
    return (
        <div className="orido_tm_section">
            <div style={{display: 'flex', flexDirection: "row", gap: "1em", justifyContent:"center"}}>
                <ButtonSelect
                    callBack={() => callBack(true)}
                    text={"Give Weekly"}
                    style={weeklyStyle}
                />
                <ButtonSelect
                    callBack={() => callBack(false)}
                    text={"One-Time"}
                    style={onetimeStyle}
                />
            </div>
        </div>
    )
}
