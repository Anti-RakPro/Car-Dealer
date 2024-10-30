import React from "react";

export default function FilterBlock() {

    return (
        <React.Fragment>
            <div>
                <h4>Year</h4>
                <ol>
                    <li><input type="checkbox"/>2018</li>
                    <li><input type="checkbox"/>2017</li>
                    <li><input type="checkbox"/>2016</li>
                    <li><input type="checkbox"/>2015</li>
                </ol>
            </div>
            <div>
                <h4>Model</h4>
                <div>
                    <input placeholder={"Search"}/>
                    <button>
                        {/*<FontAwesomeIcon icon={faSearch}/>*/}
                    </button>
                </div>
                <ol>
                    <li><input type="checkbox"/>Model1</li>
                    <li><input type="checkbox"/>Model2</li>
                    <li><input type="checkbox"/>Model3</li>
                    <li><input type="checkbox"/>Model4</li>
                </ol>
            </div>

        </React.Fragment>
    )
}