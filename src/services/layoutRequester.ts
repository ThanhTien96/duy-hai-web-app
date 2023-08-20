import nextPath from '@/constants/nextPath';
import clientAxios from '@/http/clientAxios';

class LayoutRequester {
  getMenuContent = async () => {
    return await clientAxios({
      url: nextPath.MENU,
      method: 'GET',
    });
  };
}

const layoutRequester = new LayoutRequester();
export default layoutRequester;
