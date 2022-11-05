import React, { useState } from 'react'
import invitation from '../../src/assets/Invitation.png'
import myFont from "../../src/assets/Bargiery.woff";
import myFont2 from "../../src/assets/betterside.woff";
import { Page, Text, Document, StyleSheet, PDFViewer, View, Image, Font } from '@react-pdf/renderer';
import InvitationDetailItem from './InvitationDetailItem';
import { InvitationCtx } from '../context/InvitationsContext';

Font.register({
    family: "Bargiery",
    format: "sans-serif",
    src: myFont
});
Font.register({
    family: "BetterSide",
    format: "sans-serif",
    src: myFont2
});


function GuestsList() {

    const styles = StyleSheet.create({
        body: {
            margin: 0,
            padding: 0,
        },
        title: {
            fontSize: 24,
            textAlign: "center",
        },
        bride: {
            top: '480px',
            left: '0px',
            right: '0px',

        },
        text: {
            fontSize: 50,
            color: "#997141",
            textAlign: "center",
            fontFamily: "Bargiery",
            position: "absolute",
            marginHorizontal: 'auto',
            justifyContent: 'center',
        },
        mainText: {
            fontSize: 30,
            fontFamily: "BetterSide",
            lineHeight: 1.5
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "grey",
        },
    });
    const [isAdvanced, setIsAdvanced] = useState(false)
    const {invitations, addInvitation, updateInvitation, deleteInvitation} = InvitationCtx()

    console.log(invitations[0]);


    const [invitationDetails, setInvitationDetails] = React.useState(invitations[0])
    // const [invitationDetails, setInvitationDetails] = React.useState({
    //     id: 'inv-1',
    //     groom: {
    //         name: "Paul", styles: {
    //             currentProp: 'Select Property',
    //             top: '380px',
    //             left: '0px',
    //             right: '0px',
    //         }
    //     },
    //     bride: {
    //         name: "Jane", styles: {
    //             currentProp: 'Select Property',
    //             top: '480px',
    //             left: '0px',
    //             right: '0px',
    //         }
    //     },
    //     description: {
    //         name: "would love your presence to celebrate our wedding", styles: {
    //             currentProp: 'Select Property',
    //         }
    //     },
    //     date: {
    //         name: "Friday 30 August 2023", styles: {
    //             currentProp: 'Select Property',
    //         }
    //     },
    //     time: {
    //         name: "5:00 PM", styles: {
    //             currentProp: 'Select Property',
    //         }
    //     },
    //     venue: {
    //         name: "Plaza Hotel", styles: {
    //             currentProp: 'Select Property',
    //         }
    //     },
    // });




    return (
        <div className="container py-5 d-flex ">
            <div className="col mx-auto d-flex" style={{ height: "600px" }}>
                <PDFViewer showToolbar={false} className="h-100 mx-auto" style={{ width: 425 }}>
                    <Document >
                        <Page size="A4" style={styles.body}>
                            <View >
                                <Image style={{
                                    height: "100%", width: "99%",
                                    marginHorizontal: 'auto',
                                    marginVertical: 0,
                                    padding: 0
                                }} src={invitation} alt=""></Image>
                            </View>

                            <Text style={{ ...invitationDetails.groom.styles, ...styles.text }} >
                                {invitationDetails.groom.name}
                            </Text>

                            <Text style={{
                                ...styles.text,
                                top: "445px",
                                left: '0px',
                                right: '0px',
                                fontSize: 30
                            }} >
                                &
                            </Text>

                            <Text style={{ ...invitationDetails.bride.styles, ...styles.text }} >
                                {invitationDetails.bride.name}
                            </Text>

                            <Text style={{
                                ...styles.text,
                                top: "600px",
                                left: '0px',
                                right: '0px',
                                ...styles.mainText
                            }} >
                                <Text style={{ ...invitationDetails.description.styles }} >
                                    {invitationDetails.description.name}
                                </Text> {"\n"}{"\n"}

                                <Text style={{ ...invitationDetails.date.styles }} >
                                    {invitationDetails.date.name}
                                </Text> {` `}
                                <Text style={{ ...invitationDetails.time.styles }} >
                                    {invitationDetails.time.name}
                                </Text>{"\n"}
                                {/* {`${invitationDetails.date} ${invitationDetails.time}`}{"\n"} */}


                                <Text style={{ ...invitationDetails.time.styles }} >
                                    {invitationDetails.venue.name}
                                </Text>

                            </Text>
                        </Page>
                    </Document>
                </PDFViewer>
            </div>
            

            <div className="col d-flex flex-column">
                <div className='d-flex justify-content-between align-items-center'>
                    <h2>Edit content</h2>
                    <div className="form-check">
                        <input type="checkbox" checked={isAdvanced} className='form-check-input' name='advanced' onChange={() => setIsAdvanced(!isAdvanced)} />
                        <label htmlFor="advanced" className='form-check-label' onClick={() => { setIsAdvanced(!isAdvanced) }}>Advanced editing</label>
                    </div>
                </div>
                <InvitationDetailItem invitationDetails={invitationDetails} setInvitationDetails={setInvitationDetails} detailItem={"groom"} adv={isAdvanced} />
                <InvitationDetailItem invitationDetails={invitationDetails} setInvitationDetails={setInvitationDetails} detailItem={"bride"} adv={isAdvanced} />
                <InvitationDetailItem invitationDetails={invitationDetails} setInvitationDetails={setInvitationDetails} detailItem={"description"} adv={isAdvanced} />
                <InvitationDetailItem invitationDetails={invitationDetails} setInvitationDetails={setInvitationDetails} detailItem={"date"} adv={isAdvanced} />
                <InvitationDetailItem invitationDetails={invitationDetails} setInvitationDetails={setInvitationDetails} detailItem={"time"} adv={isAdvanced} />
                <InvitationDetailItem invitationDetails={invitationDetails} setInvitationDetails={setInvitationDetails} detailItem={"venue"} adv={isAdvanced} />


            </div>
        </div >
    )
}


export default GuestsList
