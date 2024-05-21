import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { get } from '../../../Service/ApiService';
import { MuiVideocamOutlinedIcon, MuiZoomOutMapOutlinedIcon } from '../../Mui-Icons';

export default function ActionAreaCard(props) {
    const {img,heading,text,imgClass,className,headingClass,BtnComponent,list,cardTxtClass,cardActionClass,apiId,iconsOnImg,navFunc,feature,...rest} = props;
    // const navigate = useNavigate();
    // const navFunc = ()=>{
    //   navigate(`/pharma/view-content/${apiId}`) 
      
    // }
    
   
  return (
    <Card sx={{ maxWidth: 345}} className={className} {...rest}>
     
        <CardMedia
        className={imgClass}
          component="img"
          image={img}
          alt="green iguana"
          onClick={navFunc}
        />
        {iconsOnImg}
       
        <CardContent>
          {feature}
          <Typography gutterBottom variant="" component="div" className={headingClass}>
            {heading}
          </Typography>
          <Typography variant="body2" className={cardTxtClass}>
           
            {list}
            {text}
          </Typography>
        </CardContent>
        <CardActionArea className={cardActionClass} >
          {BtnComponent}
      </CardActionArea>
    </Card>
  );
}
