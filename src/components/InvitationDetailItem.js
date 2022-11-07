import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
//import reset icon
import { BsArrowRepeat } from 'react-icons/bs'
import { motion } from "framer-motion/dist/framer-motion"

const STYLE_PROPERTIES = [
    "*LAYOUT*",
    "bottom",
    "display",
    "left",
    "position",
    "right",
    "top",
    "overflow",
    "zIndex",
    "*FLEX*",
    "alignContent",
    "alignItems",
    "alignSelf",
    "flexDirection",
    "flexWrap",
    "flexFlow",
    "flexGrow",
    "flexShrink",
    "flexBasis",
    "justifyContent",
    "*Dimensions*",
    "height",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "width",
    "*Colors",
    "backgroundColor",
    "color",
    "opacity",
    "*Text*",
    "fontSize",
    "fontFamily",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "maxLines",
    "textAlign",
    "textDecoration",
    "textDecorationColor",
    "textDecorationStyle",
    "textIndent",
    "textOverflow",
    "textTransform",
    "*Size/Position*",
    "objectFit",
    "objectPosition",
    "objectPositionX",
    "objectPositionY",
    "*Margin*",
    "margin",
    "marginHorizontal",
    "marginVertical",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "padding",
    "paddingHorizontal",
    "paddingVertical",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "*Transform*",
    "transform",
    "transformOrigin",
    "transformOriginX",
    "transformOriginY",
    "*Borders*",
    "border",
    "borderWidth",
    "borderColor",
    "borderStyle",
    "borderTop",
    "borderTopColor",
    "borderTopStyle",
    "borderTopWidth",
    "borderRight",
    "borderRightColor",
    "borderRightStyle",
    "borderRightWidth",
    "borderBottom",
    "borderBottomColor",
    "borderBottomStyle",
    "borderBottomWidth",
    "borderLeft",
    "borderLeftColor",
    "borderLeftStyle",
    "borderLeftWidth",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
    "borderRadius",
]
export default function InvitationDetailItem({ invitationDetails, setInvitationDetails, detailItem, adv, i }) {
    const showClass = !adv ? "d-none" : "d-flex"

    const resetStylesHandler = () => {
        setInvitationDetails(prev => ({...prev, [detailItem]: {...prev[detailItem], styles: {}}}))
    }

    const divVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.15*i,
            }
        },
    }
    return (
        <motion.div variants={divVariants} initial="hidden" animate="visible"  layout>
            <motion.div className="mb-2">
                <span className="col-4" style={{ textTransform: "capitalize" }}>{detailItem}</span>
                <input
                    placeholder={invitationDetails[detailItem].name}
                    className='form-control'
                    onChange={(e) => setInvitationDetails(prev => ({ ...prev, [detailItem]: { ...prev[detailItem], name: e.target.value } }))}
                    value={invitationDetails[detailItem].name}
                    // onBlur={(e) => { setInvitationDetails({ ...invitationDetails, [detailItem]: { ...invitationDetails[detailItem], name: e.target.value } }) }}
                     />

            </motion.div>
            <div className={`mb-4 ${showClass} `} >
                <div className='col-4 '>
                    <span className="col-4">Property Name</span>

                    <Dropdown className='col-12 me-4'>
                        <Dropdown.Toggle
                            className='col-12 text-start'
                            style={{ backgroundColor: "#FFF", border: "1px solid #ced4da", color: "#777" }} id="dropdown-basic">
                            {invitationDetails[detailItem].styles.currentProp}
                        </Dropdown.Toggle>

                        <Dropdown.Menu

                            style={{
                                height: "250px",
                                overflowY: 'scroll'
                            }}>
                            {STYLE_PROPERTIES.map((item, i) => {

                                if (i === 0) {
                                    return (
                                        <Dropdown.Item disabled={true} key={item} className="border-bottom">{item}</Dropdown.Item>
                                    )
                                }
                                if (item.includes("*"))
                                    return (
                                        <Dropdown.Item disabled={true} key={item} className="border-bottom border-top">{item}</Dropdown.Item>
                                    )
                                let color = ""
                                invitationDetails[detailItem].styles[item] ? color = "#e6ffe6" : color = "inherit"
                                return (
                                    <Dropdown.Item
                                        style={{ width: "100%", backgroundColor: color }}
                                        onClick={() => { setInvitationDetails({ ...invitationDetails, [detailItem]: { ...invitationDetails[detailItem], styles: { ...invitationDetails[detailItem].styles, currentProp: item } } }) }}
                                        key={item}>{item}
                                    </Dropdown.Item>)
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='col-8 ps-4'>
                    <span className="col-4">Property Value</span>
                    <div className='col-12 d-flex'>
                        <div className='col-10 pe-4'>

                            <input
                                className='form-control'
                                placeholder={
                                    (invitationDetails[detailItem].styles[invitationDetails[detailItem].styles.currentProp] && !invitationDetails[detailItem].styles.currentProp.includes("Select")) ?
                                        `Current Value: ${invitationDetails[detailItem].styles[invitationDetails[detailItem].styles.currentProp]}` :
                                        "(default)"}
                                onBlur={(e) => { setInvitationDetails({ ...invitationDetails, [detailItem]: { ...invitationDetails[detailItem], styles: { ...invitationDetails[detailItem].styles, [invitationDetails[detailItem].styles.currentProp]: `${e.target.value}` } } }) }} />
                        </div>
                        <Button variant='danger' className='col-2 px-0' onClick={resetStylesHandler}>
                            <BsArrowRepeat /> 
                        </Button>
                    </div>
                </div>


            </div>
        </motion.div>
    )
}