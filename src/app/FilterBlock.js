import React, {useState} from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './FilterBlock.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setSearchCar} from '../redux/searchCarSlice'


export default function FilterBlock() {

    const [searchValue, setSearchValue] = useState('');
    const [searchYear, setSearchYear] = useState(2024);
    const chosenCar = useSelector(state => state.chooseCarMakes.value);
    const dispatch = useDispatch();

    function setSearchHandler(str) {
        setSearchValue(str)
        dispatch(setSearchCar(str))
    }

    function NextBtnHandler() {

    }

    function NextBtnStyles() {
        if (chosenCar) {
            return `${styles['next-btn']} ${styles['next-btn-active']}`
        }
        return `${styles['next-btn']} `
    }

    return (
        <React.Fragment>

            <p>{`Year ${searchYear}`} </p>
            <div className={styles['search-year-block']}>
                <Slider
                    reverse={true}
                    className={styles['year-slider']}
                    min={2015}
                    max={2024}
                    defaultValue={searchYear}
                    onChange={e => setSearchYear(e)}
                >
                </Slider>
            </div>
            <div>
                <h4>Model</h4>
                <div>
                    <textarea
                        value={searchValue}
                        placeholder={"Search"}
                        onChange={e => setSearchHandler(e.target.value)}/>
                    <button>
                    </button>
                </div>

            </div>
            <button className={NextBtnStyles()} onClick={() => NextBtnHandler()}>Next</button>

        </React.Fragment>
    )
}