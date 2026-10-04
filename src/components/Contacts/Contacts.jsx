import classes from './Contacts.module.css'

import image_map from '../../assets/images/contacts/map.jpg';
import vk_map from '../../assets/images/contacts/vk.png';
import telegram_map from '../../assets/images/contacts/telegram.png';

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      {/* <img className={classes.map} src={image_map} alt="карта" /> */}
      <iframe className={classes.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee0dee4206bc8ce368dac53948babcd822fbe2956501a529b49dcb70b6042e8d&amp;source=constructor" frameborder="0"></iframe>
      <p className={classes.address}>Заволжье, проспект Дзержинского, 15, 2</p>
      <a className={classes.tel} href='tel:+79524405897'>+7 (952) 440-58-97</a>
      <div className={classes.icons}>
        <a className={classes.icon__link} href="https://t.me/+LYzqLV-0BMozNTIy" target="_blank">
          <img className={classes.icon__img} src={telegram_map} alt="telegram" />
        </a>
        <a className={classes.icon__link} href="https://vk.com/tatiana_shimicheva" target="_blank">
          <img className={classes.icon__img} src={vk_map} alt="vk" />
        </a>
      </div>
    </div>
  )
}

export default Contacts;