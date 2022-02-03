import { useState, useRef, useEffect } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@mui/styles";
import { TiDeleteOutline } from "react-icons/ti";

const useStyles = makeStyles((theme) => ({
    frameAdd: {
        width: '1395px',
        height: '232px',
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
        border: "solid 1px #CBCCCB"
    },
    paperrow: {
        width: '241px',
        height: '105px',
        position: 'relative',
        boxShadow: 'none',
        borderRadius: '4px',
        border: '1px solid #CBCCCB',
        marginRight: '22.6px',
        marginBottom: '22.6px',
        // display: 'flex'

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
        fontSize: '20px',
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

    },
    titleItem: {
        fontSize: 24,
        color: "#4A4A4A",
        position: 'absolute',
        marginTop: 12,
        marginLeft: 26,
        fontWeight: 'bold'
    },
    itemDetail: {
        fontSize: 13,
        color: '#969696',
        width: 145,
        marginTop: 52,
        marginLeft: 26,
        position: 'absolute',
        textAlign: 'left',
        lineHeight: 1.2
    },
    gradeDetail: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 30,
        left: 188,
        position: 'absolute',
        color: "#4A4A4A"
    },
    roundGp: {
        width: 112,
        height: 31,
        backgroundColor: '#EEEEEF',
        borderRadius: 112 / 2,
        position: 'absolute',
        marginTop: 28,
        marginLeft: 260

    },
    roundRed: {
        width: 52,
        height: 30,
        backgroundColor: '#A94240',
        borderRadius: 52 / 2,
        fontSize: 16,
        color: '#FFFFFF',
        position: 'absolute',
        right: 0,
        lineHeight: 1.875
    },
    gpaText: {
        fontSize: 16,
        color: '#9B9B9B',
        position: 'absolute',
        left: 18,
        lineHeight: 1.875
    },
    roundGpax: {
        width: 112,
        height: 31,
        backgroundColor: '#EEEEEF',
        borderRadius: 112 / 2,
        position: 'relative',
        // marginTop: 28,
        // marginLeft: 260

    },
    statusgrade: {
        // height: 103,
        // width: 4,
        // backgroundColor: 'green',
        // borderRadius: 2,
        // position: 'absolute',
        // right: 0
    }


}));

function GradeTable({ data, setDataItems }) {

    const [dataRows, setDataRows] = useState();
    const classes = useStyles();
    const creditPerSubject = 3

    function calcurateGPA(x) {
        var gpa = 0
        var index = 0

        for (var i = 0; i < data[x].courseStudied.length; i++) {
            if (data[x].courseStudied[i].grade.value != -1) {
                gpa = gpa + (data[x].courseStudied[i].grade.value * creditPerSubject)
                index++
            }
        }
        gpa = gpa / (index * creditPerSubject)
        return gpa.toFixed(2)



    }

    function calculateGPAX() {
        var creditPerSub = 3
        var gpa = 0
        var index = 0
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].courseStudied.length; j++) {
                if (data[i].courseStudied[j].grade.value != -1) {
                    gpa = gpa + (data[i].courseStudied[j].grade.value * creditPerSub)
                    index++
                }
            }
        }
        gpa = gpa / (index * creditPerSubject)
        return gpa.toFixed(2)
    }

    const deleteClick = (i) => {
        data.splice(i, 1)
        setDataItems([...data])
    }

    const deleteInnerClick = (i, j) => {
        console.log(data)
        data[i].courseStudied.splice(j, 1)
        if (data[i].courseStudied.length == 0) {
            data.splice(i, 1)
        }
        setDataItems([...data])
    }
    // (วิชาคณิตได้เกรด 3.0 x หน่วยกิตวิชาคณิต 2.0) + (วิชาภาษาไทยได้เกรด 3.5 x หน่วยกิตวิชาภาษาไทย 1.0) + (วิชาสังคมได้เกรด 4.0 x หน่วยกิตวิชาสังคม 1.5)
    //รวมกันได้ (3 x 2) + (3.5 x 1) + (4 x 1.5)  =  6 + 3.5 + 6  =  15.5
    //แล้วหารด้วยจำนวนหน่วยกิตทั้งหมด 15.5 / (2 + 1 + 1.5)  =  15.5/4.5 ดังนั้นหน่วยกิตที่ได้จากตัวอย่างนี้คือ 3.44 เมื่อรู้ที่มาที่ไปในการคำนวณแล้ว เพื่อความแม่นยำและรวดเร็วสามารถใช้เครื่องมือช่วยคำนวณเกรดเฉลี่ยนี้ได้เลย

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {

        function over(e) {
            // e.target.style.backgroundColor = "black";
            // e.target.style.opacity = 0.8;
            // e.target.style.color = 'red'
            // e.target.style.zIndex = 1
            setIsShown(true)
        }
        function out(e) {
            // e.target.style.backgroundColor = "";
            // e.target.style.opacity = 0;
            // e.target.style.color = ''
            // e.target.style.zIndex = 0
            setIsShown(false)
        }

        function over2(e) {
            e.target.style.color = "#4A4A4A";
        
        }
        function out2(e) {
            e.target.style.color = "#A94240";
          
        }

        const z = data.map((item, i) => {
            return (
                <div key={i} >
                    <div className={classes.papercard} style={{ margin: 'auto', marginBottom: 20 }} >
                        <div className={classes.headSemes} >

                            <div className={classes.floorSemes} >
                                SEMESTER  {item.semester.label}/{item.year.label}

                            </div>
                            <TiDeleteOutline  onMouseOver={over2} onMouseOut={out2} style={{ color: '#A94240', width: 50, height: 50, position: 'absolute', marginTop: 16, zIndex: 1, right: 16 }}
                                onClick={() => deleteClick(i)}
                            />
                        </div>
                        <div className={classes.roundGp}>
                            <div className={classes.gpaText}>
                                GPA
                            </div>
                            <div className={classes.roundRed}>
                                {calcurateGPA(i)}
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#CBCCCB", marginTop: 81, height: 1, width: '100%' }} />
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '50.5px', marginTop: '32.36px', marginBottom: '21.8px' }}>
                            {item.courseStudied.map((sub, j) => {
                                return (
                                    <div className={classes.paperrow} key={j}
                                        onMouseOver={over} onMouseOut={out}
                                        onClick={() => deleteInnerClick(i, j)}
                                    >
                                        {isShown &&

                                            <div style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: 3, zIndex: 1, backgroundColor: 'black', opacity: 0.8 }}
                                            >
                                                <TiDeleteOutline style={{ color: 'red', width: 50, height: 50, position: 'absolute', marginTop: 25, zIndex: 1, left: 96 }} />
                                            </div>
                                        }
                                        <div>
                                            <div className={classes.titleItem}>
                                                {sub.subject.code}
                                            </div>
                                            <div className={classes.itemDetail}>
                                                {sub.subject.name}
                                            </div>
                                            <div className={classes.gradeDetail}>
                                                {sub.grade.label}
                                            </div>
                                            <div className={classes.statusgrade}>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        });

        setDataRows(z);
        setDataItems(data)

    }, [data, isShown]);

    return (

        <div>
            {data.length > 0 &&
                <div style={{ display: 'flex', width: 1395, margin: 'auto' }}>
                    <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 22, color: '#4A4A4A', paddingRight: '20px' }}>
                        Computer Science
                    </div>
                    <div className={classes.roundGpax} style={{ marginTop: 4 }}>
                        <div className={classes.gpaText} style={{ left: 14 }}>
                            GPAX
                        </div>
                        <div className={classes.roundRed} style={{ lineHeight: 1.925, backgroundColor: '#485D84' }}>
                            {calculateGPAX()}
                        </div>
                    </div>
                </div>
            }
            <div>{dataRows}</div>
        </div>

    );
}

export default GradeTable;
