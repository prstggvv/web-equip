import twitterSvg from '../../../shared/assets/images/icons/footer/Twitter.svg';
import facebookSvg from '../../../shared/assets/images/icons/footer/Facebook.svg';
import instagramSvg from '../../../shared/assets/images/icons/footer/instagram.svg';

interface IFooterLinkProps {
  link: string;
  image: string;
};

export const footerLinkData: IFooterLinkProps[] = [
  {
    link: 'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA',
    image: twitterSvg,
  },
  {
    link: 'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA',
    image: facebookSvg,
  },
  {
    link: 'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA',
    image: instagramSvg,
  },
]