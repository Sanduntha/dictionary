import React, { useEffect, useState } from 'react'
import "@fontsource/pacifico";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Page.css'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Start } from '@mui/icons-material';


export default function Page() {

  const [value, setValue] = useState('')
  const [data, setData] = useState('')
  const [audio, setAudio] = useState('')

  function onClick(){
    // console.log(value)

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/'+value)
  .then((response) => response.json())
  .then((jsonData) => setData(jsonData));
  setData([]);

    // console.log(data)

//   fetch('https://api.dictionaryapi.dev/media/pronunciations/en/play-us.mp3/')
//   .then((response) => response.json()
//   .then(jsonData)
// )

  }


  return (
    <div>
        <p>Free Dictionary</p>
        <TextField className='textfield'
        id="outlined-basic" 
        onChange={(e) => setValue (e.target.value)}
        label="Search" 
        variant="outlined" />
        
        <Button className="btn"
        onClick={onClick} 
        variant="contained" 
        color="success"
        // style={{ margin: '100px 80px 0px 0px' }}
        >Search</Button>

        <Button className='btn1'
        variant="outlined"
        startIcon={<PlayArrowOutlinedIcon />}
        style={{ margin: '100px 80px 0px 0px' }}
        >Play</Button>

        <div>
        {data.length > 0 ? (
        <div>
          
          <h2>Word: {data[0].word}</h2>
          <h3>Meaning:</h3>

          <ul>
            {data[0].meanings.map((meaning, index) => (
              <li key={index}>
                <h2>Part of Speech:</h2> <h4>{meaning.partOfSpeech}</h4>
                
                <ul>
                  {meaning.definitions.map((def, i) => (
                    <li key={i}>{def.definition}</li>
                  ))}
                </ul>

                <ul>
                  {meaning.definitions.map((val, index) => (
                    <li key={index}>{val.example}</li>
                  ))}
                </ul>

              </li>
            ))}
          </ul>
        </div>
      ) : (
        <br />
      )}        
        
        </div>

        
    </div>
  )
}
