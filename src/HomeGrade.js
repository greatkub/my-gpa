import React from 'react';
import { makeStyles } from '@mui/styles';
import Dropdownn from './components/Dropdownn';
import Select from 'react-select'
import { useState, useEffect } from 'react';
import jsonData from './cs-2019.json'
import { Button } from 'react-bootstrap';
import GradeTable from './GradeTable';
import useLocalStorage from 'use-local-storage';

const useStyles = makeStyles((theme) => ({
    frameAdd: {
        width: '1395px',
        height: '200px',
        position: "relative",
        // backgroundColor: 'red'
    },
    frame: {
        width: '1163px',
        height: '232px',
        position: "relative",
        backgroundColor: 'red'
    },
    btblue: {
        fontSize: '15.6px',
        // backgroundColor: "#485D84",
        color: "#FFFFFF",
        textTransform: 'none',
        width: '107px',
        height: '36px'

    },
    papercard: {
        width: '1395px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderRadius: 5,
        border: "solid 1px #AAAAAA"
    },

    headSemes: {
        // display: 'block',
        posiotion: 'relative',
        marginLeft: '45px',
        paddingTop: '0px',
        verticalAlign: 'middle'

    },
    floorSemes: {
        color: '#4A4A4A',
        fontSize: '19.2px',
        fontWeight: 'bold',
        position: 'absolute',
        marginTop: '28px'
    },
    numinroom: {
        height: "25px",
        width: "84px",
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        marginTop: '28px',
        marginLeft: '86px',
        borderRadius: '13px',
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: '400',
        display: 'block'
    },
    personicon: {
        width: '18px',
        height: '18px',
        position: 'absolute',
        top: 4,
        left: 10
    },
    aligninicon: {
        display: 'inline-block',
        marginTop: '3px',
        marginLeft: '30px'
    },
    titleText: {
        fontSize: 23.28,
        fontWeight: 'bold',
        color: "#4A4A4A"

    },
    textDrop: {
        fontSize: 19.2,
        color: "#4A4A4A"

    }


}));

const styles = {
    textCenter: { textAlign: 'center' },
    textRight: { textAlign: 'right' },
    textLeft: { textAlign: 'left' }
}

export default function HomeGrade() {
    // localStorage.clear();

    const groupName = jsonData.curriculum.subjects
    const classes = useStyles();


    function dropD(get, set, data, text) {
        return (
            <div style={{ width: 180, height: 39, marginRight: 12 }}>
                <div style={styles.textLeft} className={classes.textDrop}>
                    {text}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Select
                        width='100px'
                        defaultValue={get}
                        onChange={set}
                        options={data}

                    />
                </div>
            </div>

        )
    }
    function drop2MD(get, set, data, text) {
        return (
            <div style={{ width: 180, height: 39, marginRight: 12 }}>
                <div style={styles.textLeft} className={classes.textDrop}>
                    {text}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Select
                        width='100px'
                        defaultValue={get}
                        onChange={set}
                        options={data}
                        getOptionLabel={(e) => e.groupName}
                        getOptionValue={(e) => e.groupName}
                    />
                </div>
            </div>
        )
    }
    function drop2d(get, set, data, text) {
        return (
            <div style={{ width: 180, height: 39, marginRight: 12 }}>
                <div style={styles.textLeft} className={classes.textDrop}>
                    {text}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Select
                        width='100px'
                        defaultValue={get}
                        onChange={set}
                        options={data}
                        getOptionLabel={(e) => e.name}
                        getOptionValue={(e) => e.code}
                    />
                </div>
            </div>
        )
    }

    const addItemV3 = () => {
        if (selectedYear == "" || selectedSemester == "" || selectedGrade == "" || selectedCatagory == -1 || selectedSubject == "") {
            return alert("make sure you fill all data before add")
        }
        if (dataItems.length == 0) {
            yearStudied.courseStudied.push(myCourse)
            dataItems.push(yearStudied)
            console.log("aaaa")
        } else {
            const index = dataItems.findIndex(item => item.year.value == selectedYear.value && item.semester.value == selectedSemester.value)
            if (index == -1) {
                yearStudied.courseStudied.push(myCourse)
                if (dataItems.slice(0, 1).shift().year.value >= selectedYear.value) {

                    dataItems.push(yearStudied)

                } else {
                    dataItems.push(yearStudied)
                }
                console.log("bbbb")
            } else {
                const duplicateCourse = dataItems[index].courseStudied.map(e => e.subject.code).indexOf(selectedSubject.code)
                if (duplicateCourse == -1) {
                    dataItems[index].courseStudied.push(myCourse)
                } else {
                    alert("this semester your course is already exist, please try again")
                }
                console.log("cccc")
            }
        }
        dataItems.sort((a, b) => a.semester.value - b.semester.value)
        dataItems.sort((a, b) => a.year.value - b.year.value)
        setDataItems([...dataItems])
        console.log("")
    }

    const years = [{ value: 2021, label: '2021' }, { value: 2022, label: '2022' }, { value: 2023, label: '2023' }, { value: 2024, label: '2024' }, { value: 2025, label: '2025' }, { value: 2026, label: '2026' }, { value: 2027, label: '2027' }, { value: 2028, label: '2028' }]
    const semesters = [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]
    const grades = [{ value: 4, label: 'A' }, { value: 3.75, label: 'A-' }, { value: 3.25, label: 'B+' }, { value: 3, label: 'B' }, { value: 2.75, label: 'B-' }, { value: 2.25, label: 'C+' }, { value: 2, label: 'C' }, { value: 1.75, label: 'C-' }, { value: 1, label: 'D' }, { value: 0, label: 'F' },
    { value: -1, label: 'W' }, { value: -1, label: 'I' }, { value: -1, label: 'S' }, { value: -1, label: 'U' }, { value: -1, label: 'R' }, { value: -1, label: 'T' }, { value: -1, label: 'R' }]

    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedCatagory, setSelectedCatagory] = useState(-1);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);

    var yearStudied = {
        year: selectedYear,
        semester: selectedSemester,
        courseStudied: []
    }

    var myCourse = {
        course: selectedCatagory,
        subject: selectedSubject,
        grade: selectedGrade
    }

    return <div style={{ height: '100vh' }}>
        <div className={classes.frameAdd} style={{ margin: 'auto' }}>
            <div className={classes.titleText} style={styles.textLeft}>
                Grade List
            </div>
            <div style={{ display: 'flex', position: 'relative', marginTop: 14 }}>
                {dropD(selectedYear, setSelectedYear, years, "Year")}
                {dropD(selectedSemester, setSelectedSemester, semesters, "Semester")}
                {dropD(selectedGrade, setSelectedGrade, grades, "Grade")}
                {drop2MD(selectedCatagory, setSelectedCatagory, groupName, "Course")}
                {selectedCatagory != -1 ?
                    drop2d(selectedSubject, setSelectedSubject, groupName[groupName.indexOf(selectedCatagory)].subjects, "Subject")
                    :
                    dropD(null, null, [], "Subject")
                }
                <Button className={classes.btblue} style={{ position: 'absolute', right: 0, top: 38, backgroundColor: '#485D84', border: '0px' }}
                    onClick={addItemV3}>
                    Add
                </Button>
            </div>
        </div>
        <GradeTable data={dataItems}
            setDataItems={setDataItems} />
    </div>;
}
