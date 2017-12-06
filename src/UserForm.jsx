import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';



const style = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  marginLeft: 20,
};

const UserForm = () => (
  <Paper zDepth={2}>
    <TextField 
    hintText="Číslo rámcové smlouvy" 
    style={style}
    underlineShow={true}
    />
    <Divider />
    <TextField 
      hintText="Jméno a Přijmení" 
      style={style}
      underlineShow={true}
    />
    <Divider />
    <TextField
      hintText="IČ"
      style={style}
      underlineShow={true}
    />
    <Divider />
    <TextField
    hintText="Sídlo"
    style={style}
    underlineShow={true}
    />
    <Divider />
    <TextField
    hintText="Bankovní spojení"
    style={style}
    underlineShow={true}
    />
    <Divider />
    <TextField 
      hintText="Email"
      style={style}
      underlineShow={true}
    />
    <Divider />
    <TextField
    hintText="Telefon"
    style={style}
    underlineShow={true}
    />
    <Divider />
    <TextField
    hintText="popis poskytované služby (př. vývoj produktu Storyous)"
    style={style}
    rows={2}    
    underlineShow={true}
    />
    <Divider />
    <TextField
    hintText="částka"
    style={style}
    underlineShow={true}
    />
    <Divider />
    <TextField
    hintText="objednávka číslo ??"
    style={style}
    underlineShow={true}
    />
    <Divider />
    <FlatButton
    label="vyberte obrázek s podpisem"
    labelPosition="before"
    style={style.uploadButton}
    containerElement="label">
    <input type="file" style={style.uploadInput} />
    </FlatButton>
    <Divider />
  </Paper>
);

export default UserForm;
