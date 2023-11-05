import DropdownIcon from '../../Icons/DropdownIcon';
import SampleIcon from '../../Icons/SampleIcon'
const Menu = () => {
  return (
    <div>
      <ul className="flex justify-around bg-secondary text-white w-menu h-menu items-center rounded-b-lg">
        <li>صفحه اصلی</li>
        <li className='flex items-center justify-center'>
            <p>خدمات ما</p></li>
            <DropdownIcon />
        <li>بلاگ</li>
        <li className='flex items-center bg-white text-secondary rounded-full p-3'>
            <SampleIcon />
          <p className='mr-2'>نمونه کارها</p>
          
        </li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
      </ul>
    </div>
  );
};

export default Menu;
