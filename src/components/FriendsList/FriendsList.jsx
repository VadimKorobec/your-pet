import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';
import { List, ListItem, Titel } from './FriendsList.styled';

export const FriendList = () => {
  const friends = [
    {
      id: 1,
      title: "Притулок для бездомних тварин 'Сіріус'",
      url: 'https://dogcat.com.ua',
      addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
      address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
      workDays: [
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: true, from: '11:00', to: '16:00' },
        { isOpen: true, from: '11:00', to: '16:00' },
      ],
      phone: '+380931934069',
      email: null,
    },
    {
      id: 2,
      title: 'Happy Paw',
      url: 'https://happypaw.ua/ua',
      addressUrl: 'https://goo.gl/maps/3RyzTYBvMr9WQWCC6',
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_288.png',
      address: 'Київ, вулиця Шота Руставелі, 44 (3-й поверх, офіс 7)',
      workDays: [
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
      ],
      phone: '+380442900329',
      email: 'hello@happypaw.ua',
    },
    {
      id: 3,
      title: 'Харківський міський притулок для тварин',
      url: 'https://www.city.kharkov.ua/uk/news/-51132.html',
      addressUrl: 'https://goo.gl/maps/gjMzx3ifaRgXSftP9',
      imageUrl: null,
      address: "м. Харків, вул. Квітки-Основ'яненка, 7, 2-й пов.",
      workDays: null,
      phone: '+380577607961',
      email: 'press@citynet.kharkov.ua',
    },
    {
      id: 4,
      title: 'ЛКП “ЛЕВ”',
      url: 'https://lkplev.com/',
      addressUrl: 'https://goo.gl/maps/4xMfxtahHPfXeAYU8',
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_289.png',
      address: '79024, м.Львів, вул. Промислова 56',
      workDays: null,
      phone: '+380685354545',
      email: null,
    },
    {
      id: 5,
      title: 'Притулок для собак Велике серце',
      url: 'https://pethelp.com.ua/interv_yu_z_zasnovnitseyu_pritulku_velike_sertse/',
      addressUrl: null,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_286.png',
      address: null,
      workDays: null,
      phone: null,
      email: 'pethelp.ukr@gmail.com',
    },
    {
      id: 6,
      title: 'Волонтерська організація БАРБОС',
      url: 'https://uk-ua.facebook.com/NGO.Barbos/',
      addressUrl: 'https://goo.gl/maps/pnzYL8t7jbG7j1SQ9',
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_293.png',
      address: 'м. Ужгород',
      workDays: null,
      phone: '+380664880480',
      email: null,
    },
    {
      id: 7,
      title: 'Ветеринарний центр LicoVet',
      url: 'https://lico.vet/',
      addressUrl: 'https://goo.gl/maps/sub8u9TAAvLJRE9j9',
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_292.png',
      address: 'вулиця Другетів, 77, Ужгород, Закарпатська область, 88003',
      workDays: [
        { isOpen: true, from: '09:00', to: '20:00' },
        { isOpen: true, from: '09:00', to: '20:00' },
        { isOpen: true, from: '09:00', to: '20:00' },
        { isOpen: true, from: '09:00', to: '20:00' },
        { isOpen: true, from: '09:00', to: '20:00' },
        { isOpen: true, from: '09:00', to: '20:00' },
        { isOpen: true, from: '09:00', to: '20:00' },
      ],
      phone: null,
      email: null,
    },
    {
      id: 8,
      title: 'Purina',
      url: 'https://www.purina.ua/',
      addressUrl: null,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_290.png',
      address: null,
      workDays: null,
      phone: '+380800500950',
      email: 'info@ua.nestle.com',
    },
    {
      id: 9,
      title: 'Whiskas',
      url: 'https://www.whiskas.ua/',
      addressUrl: null,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_285.png',
      address: null,
      phone: '+380800500155',
      email: null,
    },
    {
      id: 10,
      title: 'Josera',
      url: 'https://josera.ua/',
      addressUrl: null,
      imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_291.png',
      address: null,
      workDays: [
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: true, from: '09:00', to: '17:00' },
        { isOpen: false, from: '', to: '' },
        { isOpen: false, from: '', to: '' },
      ],
      phone: '+380800409060',
      email: 'info@josera.ua',
    },
  ];

  return (
    <div>
      <Titel>Our friends</Titel>
      <List>
        {friends.map(friend => (
          <ListItem key={friend.id}>
            <FriendListItem friend={friend} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
