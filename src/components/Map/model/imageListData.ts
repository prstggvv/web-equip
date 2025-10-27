import PhoneImage from '../../../shared/assets/images/icons/contact/Phone.svg';
import EmailImage from '../../../shared/assets/images/icons/contact/Email.svg';
import PointImage from '../../../shared/assets/images/icons/contact/Point.svg';
import TimeImage from '../../../shared/assets/images/icons/contact/Time.svg';

interface IImageListData {
  image: string;
  text: string;
}

export const imageListData: IImageListData[] = [
  {
    image: PointImage,
    text: 'Адрес: 385 Noah Place Suite 878',
  },
  {
    image: PhoneImage,
    text: 'Телефон: 877-255-7945',
  },
  {
    image: TimeImage,
    text: 'Время работы: 9:00 - 19:00',
  },
  {
    image: EmailImage,
    text: 'E-mail: info@form.com',
  },
]

