import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-key': '2f55f78467msh8f8351486de73c8p161b37jsnca37d922f959',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };
  



export  const getPlaceData = async ()=>{
    try {
        const {data:{data}} = await  axios.get(URL,options);
        return data;
    } catch (error) {
        console.log(error)
        
    }
}