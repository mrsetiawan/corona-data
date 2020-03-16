import ControllerBase from './ControllerBase'
import axios from 'axios';

class list extends ControllerBase {
  getList = () => {
    return axios.get('https://covid19.mathdro.id/api/confirmed')
  }
}

export default list
