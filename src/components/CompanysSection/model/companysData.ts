import firstImage from '../../../shared/assets/images/companys/first.svg';
import secondImage from '../../../shared/assets/images/companys/second.svg';
import thirdImage from '../../../shared/assets/images/companys/third.svg';
import forthImage from '../../../shared/assets/images/companys/fourth.svg';
import fiveImage from '../../../shared/assets/images/companys/five.svg';
import sixthImage from '../../../shared/assets/images/companys/six.svg';

interface ICompanysProps {
  image: string;
}

export const companysData: ICompanysProps[] = [
  {
    image: firstImage,
  },
  {
    image: secondImage,
  },
  {
    image: thirdImage,
  },
  {
    image: forthImage
  },
  {
    image: fiveImage,
  },
  {
    image: sixthImage,
  },
];
