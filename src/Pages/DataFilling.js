import React, { useState } from "react";
import { DataFillingSidebar, Education, KeySkills, Navbar, PersonalInfo, Preview, WorkExperience } from "./Index";
import '../Styles/Pages/DataFilling.css'


const DataFilling = (props) => {
    const [tab, setTab] = useState(0);

    return (
        <div className="data-filling">
            <Navbar active={""} />
            {tab === 4 ? null : (
                <div className="data-filling-container">
                    <DataFillingSidebar tab={tab} setTab={setTab} />
                    {tab === 0 ? ( <PersonalInfo setTab={setTab} tab={tab} />) : null}
                    {tab === 3 ? (<KeySkills setTab={setTab} tab={tab} />) : null}
                    {tab === 1 ? ( <WorkExperience setTab={setTab} tab={tab} />) : null}
                    {tab === 2 ? (<Education setTab={setTab} tab={tab} />) : null}
                </div>
            )}
            {tab === 4 ? (<Preview setTab={setTab} tab={tab} />) : null}
        </div>
    );
};

export default DataFilling