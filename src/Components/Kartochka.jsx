import React from 'react';
import { Layout, Menu } from 'antd';
import axios from 'axios';

import Select from '@material-ui/core/Select';

class Kartochka extends React.Component {

    state = {
      infoList: [],
      zapiskiList: [],
      newsList: [],
      age: 'yy',
      expanded : false,
      setExpanded: true
      };

      handleExpandClick = () => {
        this.state.setExpanded(!this.state.expanded);
      };

        componentDidMount() {
          axios.get("https://avdeevaelena.github.io/json/spisokZayavok.json")
          .then(res => {
            const infoList = res.data;
            this.setState({ infoList });
          }) 

          axios.get(`https://avdeevaelena.github.io/json/spisokZapisok.json`)
          .then(res => {
            const zapiskiList = res.data;
            this.setState({ zapiskiList });
          }) 

          axios.get(`https://avdeevaelena.github.io/json/spisokNews.json`)
          .then(res => {
            const newsList = res.data;
            this.setState({ newsList });
          }) 
    
          }
        render() {    
        // const centered = {position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'};
        

          const optionList = this.state.infoList.map(s => {
            return (  
               <option  value={10} bordered={true}>
                  {s.content}  {s.date}
                 </option>
            );
          });

        return (
      
        <Select
          native
          value={this.state.age}
         // onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {optionList}
        </Select>
  
        )
  }
   }
   export default Kartochka;