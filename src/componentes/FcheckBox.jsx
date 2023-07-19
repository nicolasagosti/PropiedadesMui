import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import Face6Icon from '@mui/icons-material/Face6';
import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';

export const FCheckBox = () => {
  const [aceptaTerminosYCondiciones, setAceptaTerminos] = useState(false);
  const [mounted, setMounted] = useState(false);
  const primeraVuelta = useRef(true)

  useEffect(() => {
    // Solo ejecutar el efecto después del primer renderizado
    if (mounted) {
      console.log({ aceptaTerminosYCondiciones });
    } else {
      setMounted(true);
    }
  }, [aceptaTerminosYCondiciones, mounted]);

  const handleChange = (event) => {
    setAceptaTerminos(event.target.checked);
  };

  const [skills, setskills] = useState([])
  useEffect(() => {
    if(primeraVuelta.current){
      primeraVuelta.current = false
    }else{
      console.log(skills)
    }
     
  }, [skills])
  
  const handleSkillsChange = (event) => {
    const index = skills.indexOf(event.target.value)
    if(index === -1){
      setskills([...skills,event.target.value])
    }else{
      setskills([skills.filter((skills) => skills !== event.target.value)])
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='acepto las condiciones'
          control={<Checkbox checked={aceptaTerminosYCondiciones} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox 
        icon={<Face6Icon></Face6Icon>} 
        checkedIcon={<FaceRetouchingOffIcon></FaceRetouchingOffIcon>}
        checked={aceptaTerminosYCondiciones} 
        onChange={handleChange} />
      </Box>
      <Box>
      <Box>
        <FormControl>
          <FormLabel>
            Skills
          </FormLabel>
          <FormGroup>
          <FormControlLabel
          label='HTML'
          control={<Checkbox 
            value='html'
            checked={skills.includes('html')} 
            onChange={handleSkillsChange} />}
        />
        <FormControlLabel
          label='CSS'
          value='css'
          control={<Checkbox 
          checked={skills.includes('css')} 
          onChange={handleSkillsChange} />}
        />
        <FormControlLabel
          label='JAVASCRIPT'
          value='javascript'
          control={<Checkbox 
          checked={skills.includes('javascript')}
          onChange={handleSkillsChange} />}
        />
          </FormGroup>
        </FormControl>
      </Box>
      </Box>
    </Box>
  );
};