import React, { useEffect, useState, useMemo } from 'react'
import invitation from '../../../src/assets/Invitation.png'
import myFont from '../../../src/assets/Bargiery.woff'
import myFont2 from '../../../src/assets/betterside.woff'
import { Page, Text, Document, StyleSheet, PDFViewer, View, Image, Font } from '@react-pdf/renderer'
import InvitationDetailItem from './InvitationDetailItem'
import { InvitationCtx } from '../../context/InvitationsContext'
import { Dropdown } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { motion } from 'framer-motion/dist/framer-motion'

Font.register({
  family: 'Bargiery',
  format: 'sans-serif',
  src: myFont,
})
Font.register({
  family: 'BetterSide',
  format: 'sans-serif',
  src: myFont2,
})

function Invitation() {
  const styles = StyleSheet.create({
    body: {
      margin: 0,
      padding: 0,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    bride: {
      top: '480px',
      left: '0px',
      right: '0px',
    },
    text: {
      fontSize: 50,
      color: '#997141',
      textAlign: 'center',
      fontFamily: 'Bargiery',
      position: 'absolute',
      marginHorizontal: 'auto',
      justifyContent: 'center',
    },
    mainText: {
      fontSize: 30,
      fontFamily: 'BetterSide',
      lineHeight: 1.5,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
  })
  const [isAdvanced, setIsAdvanced] = useState(false)
  const { invitations, addInvitation, updateInvitation, deleteInvitation } = InvitationCtx()
  const [isLoading, setIsLoading] = useState(true)
  const [currentInvitation, setCurrentInvitation] = useState(0)
  const DEFAULT_INVITATION = useMemo(
    () => ({
      id: -1,
      bride: {
        name: 'Bride Name',
        styles: {
          currentProp: 'Select Property',
          top: '480px',
          left: '0px',
          right: '0px',
        },
      },
      groom: {
        name: 'Grooom Name',
        styles: {
          currentProp: 'Select Property',
          top: '380px',
          left: '0px',
          right: '0px',
        },
      },
      date: {
        name: new Date().toLocaleDateString(),
        styles: {
          currentProp: 'Select Property',
        },
      },
      time: {
        name: new Date().toLocaleTimeString(),
        styles: {
          currentProp: 'Select Property',
        },
      },
      venue: {
        name: 'Your venue',
        styles: {
          currentProp: 'Select Property',
        },
      },
      description: {
        name: 'would love your presence to celebrate our wedding',
        styles: {
          currentProp: 'Select Property',
        },
      },
    }),
    []
  )

  const [invitationDetails, setInvitationDetails] = React.useState({})

  useEffect(() => {
    if (invitations) {
      if (invitations.length === 0) {
        setInvitationDetails(DEFAULT_INVITATION)
        setIsLoading(false)
      } else {
        setInvitationDetails(invitations[currentInvitation])
        setIsLoading(false)
      }
    }
  }, [invitations, deleteInvitation, currentInvitation, addInvitation, updateInvitation, DEFAULT_INVITATION])

  const pdfViewerVariants = {
    init: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 3,
      },
    },
    rest: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  }
  return (
    <>
      {isLoading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <div className='container py-5 d-flex '>
          <motion.div
            variants={pdfViewerVariants}
            animate='rest'
            initial='init'
            className='col-5 mx-auto d-flex'
            style={{ height: '600px' }}>
            <PDFViewer showToolbar={false} className='react-pdf__Page__canvas'>
              <Document className='react-pdf__Page'>
                <Page size='A4' style={styles.body}>
                  <View>
                    <Image
                      style={{
                        height: '100%',
                        width: '99%',
                        marginHorizontal: 'auto',
                        marginVertical: 0,
                        padding: 0,
                      }}
                      src={invitation}
                      alt=''></Image>
                  </View>

                  <Text style={{ ...invitationDetails.groom.styles, ...styles.text }}>
                    {invitationDetails.groom.name}
                  </Text>

                  <Text
                    style={{
                      ...styles.text,
                      top: '445px',
                      left: '0px',
                      right: '0px',
                      fontSize: 30,
                    }}>
                    &
                  </Text>

                  <Text style={{ ...invitationDetails.bride.styles, ...styles.text }}>
                    {invitationDetails.bride.name}
                  </Text>

                  <Text
                    style={{
                      ...styles.text,
                      top: '600px',
                      left: '0px',
                      right: '0px',
                      ...styles.mainText,
                    }}>
                    <Text style={{ ...invitationDetails.description.styles }}>
                      {invitationDetails.description.name}
                    </Text>{' '}
                    {'\n'}
                    {'\n'}
                    <Text style={{ ...invitationDetails.date.styles }}>{invitationDetails.date.name}</Text> {` `}
                    <Text style={{ ...invitationDetails.time.styles }}>{invitationDetails.time.name}</Text>
                    {'\n'}
                    <Text style={{ ...invitationDetails.time.styles }}>{invitationDetails.venue.name}</Text>
                  </Text>
                </Page>
              </Document>
            </PDFViewer>
          </motion.div>

          <div className='col d-flex flex-column ps-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h2>Edit content</h2>
              <div className='form-check'>
                <input
                  type='checkbox'
                  checked={isAdvanced}
                  className='form-check-input'
                  name='advanced'
                  onChange={() => setIsAdvanced(!isAdvanced)}
                />
                <label
                  htmlFor='advanced'
                  className='form-check-label'
                  onClick={() => {
                    setIsAdvanced(!isAdvanced)
                  }}>
                  Advanced editing
                </label>
              </div>
            </div>
            <div className='d-flex'>
              <Dropdown>
                <Dropdown.Toggle
                  id='dropdown-basic'
                  style={{ backgroundColor: '#FFF', border: '1px solid #ced4da', color: '#777' }}>
                  {invitations.findIndex((item) => item.id === invitationDetails.id) === -1
                    ? 'New invitation'
                    : `${invitations.findIndex((item) => item.id === invitationDetails.id) + 1} - ${
                        invitationDetails.groom.name
                      } & ${invitationDetails.bride.name}`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {invitations.map((invitation, index) => {
                    return (
                      <Dropdown.Item
                        key={invitation.id}
                        onClick={() => {
                          setInvitationDetails(invitation)
                          setCurrentInvitation(index)
                        }}>{`${index + 1} - ${invitation.groom.name} & ${invitation.bride.name}`}</Dropdown.Item>
                    )
                  })}

                  <Dropdown.Item
                    key={'-1'}
                    onClick={() => {
                      setInvitationDetails(DEFAULT_INVITATION)
                    }}>
                    New invitation
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button
                onClick={() => {
                  setCurrentInvitation(0)
                  deleteInvitation(invitations[currentInvitation].id)
                }}
                className=' mx-2 btn btn-outline-light'
                style={{ color: 'gray' }}>
                {' '}
                <i>
                  <BsTrash color='gray' />
                </i>
              </button>
            </div>
            {['groom', 'bride', 'description', 'date', 'time', 'venue'].map((item, index) => {
              return (
                <InvitationDetailItem
                  invitationDetails={invitationDetails}
                  setInvitationDetails={setInvitationDetails}
                  detailItem={item}
                  adv={isAdvanced}
                  i={index}
                  key={index}
                />
              )
            })}
            <button
              style={{ color: 'white', backgroundColor: '#A663CC' }}
              className='mt-2 btn btn-outline-light'
              onClick={() => {
                if (invitations.findIndex((item) => item.id === invitationDetails.id) === -1) {
                  addInvitation(invitationDetails)
                } else {
                  updateInvitation(invitationDetails.id, invitationDetails)
                }
              }}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Invitation
