import React from 'react'
import { Dropdown } from 'react-bootstrap'
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
export default function InvitationDetailItem({invitationDetails, setInvitationDetails , detailItem, adv}) {
    const showClass = !adv ? "d-none" : "d-flex"
  return (
    <div>
                    <div className="mb-2">
                        <span className="col-4" style={{textTransform: "capitalize"}}>{detailItem}</span>
                        <input 
                        placeholder={invitationDetails[detailItem].name}
                        className='form-control' 
                        onBlur={(e) => { setInvitationDetails({ ...invitationDetails, [detailItem]: { ...invitationDetails[detailItem], name: e.target.value } }) }} />
                    </div>
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
                            <input
                                className='form-control'
                                // placeholder={groomSt[groomSt.currentProp]}
                                placeholder={
                                    // (groomSt[groomSt.currentProp] && !groomSt.currentProp.includes("Select")) ?
                                    (invitationDetails[detailItem].styles[invitationDetails[detailItem].styles.currentProp] && !invitationDetails[detailItem].styles.currentProp.includes("Select")) ?
                                        `Current Value: ${invitationDetails[detailItem].styles[invitationDetails[detailItem].styles.currentProp]}` :
                                        "(default)"}
                                // onBlur={(e) => { setGroomSt({ ...groomSt, [groomSt.currentProp]: `${e.target.value}` }) }} />
                                onBlur={(e) => { setInvitationDetails({ ...invitationDetails, [detailItem]: { ...invitationDetails[detailItem], styles: { ...invitationDetails[detailItem].styles, [invitationDetails[detailItem].styles.currentProp]: `${e.target.value}` } } }) }} />
                        </div>

                    </div>
                </div>
  )
}
