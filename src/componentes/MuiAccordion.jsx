import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react";
export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState(false)
    const handleChange = (isExpanded,panel) => {
        setExpanded(isExpanded? panel : false)
    }
  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel1')} >
            <AccordionSummary id='panell-header' aria-controls='panell-content'
            expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id, quisquam adipisci odio architecto praesentium corporis nihil voluptates, debitis repellendus, reprehenderit eligendi explicabo fugit nesciunt ipsam ratione asperiores laboriosam quis?</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel2')} >
            <AccordionSummary id='panell-header' aria-controls='panell-content'
            expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id, quisquam adipisci odio architecto praesentium corporis nihil voluptates, debitis repellendus, reprehenderit eligendi explicabo fugit nesciunt ipsam ratione asperiores laboriosam quis?</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel3')}>
            <AccordionSummary id='panell-header' aria-controls='panell-content'
            expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id, quisquam adipisci odio architecto praesentium corporis nihil voluptates, debitis repellendus, reprehenderit eligendi explicabo fugit nesciunt ipsam ratione asperiores laboriosam quis?</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

