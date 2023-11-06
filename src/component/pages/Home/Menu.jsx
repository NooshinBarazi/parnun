import DropdownIcon from '../../Icons/DropdownIcon';
import SampleIcon from '../../Icons/SampleIcon'
const Menu = () => {
  return (
    <div className='container mx-auto flex justify-center'>
      <ul className="hidden lg:flex justify-center bg-secondary text-white lg:w-menu w-menu h-menu items-center rounded-b-lg">
        <li className='cursor-pointer me-6'>صفحه اصلی</li>
        <li className='cursor-pointer flex me-6 items-center'>
            <p className='pl-2'>خدمات ما</p>
            <DropdownIcon />
            </li>
        <li className='cursor-pointer me-6'>بلاگ</li>
        <li className='cursor-pointer me-6 flex items-center justify-center bg-whiteLight text-secondary rounded-full p-3 px-5'>
            <SampleIcon />
          <p className='cursor-pointer mr-2 -mt-1'>نمونه کارها</p>
          
        </li>
        <li className='cursor-pointer me-6'>درباره ما</li>
        <li className='cursor-pointer'>تماس با ما</li>
      </ul>
      {/* Md Design */}
      <ul className="flex  sm:w-menuRes md:w-menuMd justify-between bg-secondary text-white  h-menu items-center rounded-b-lg lg:hidden">
       
       <li className='menu_title ps-7'>
        <div className="tell_menu">
          <span>۰۹۱۲</span>
          <span className='text-primary'>۱۲۳۴۵۶۷۸۹</span>
        </div>
        <p>پشتیبانی سریع</p>
       </li>
        <li className='cursor-pointer me-6 flex items-center justify-center bg-whiteLight text-secondary rounded-full p-3 px-5'>
            <SampleIcon />
          <p className='cursor-pointer mr-2 -mt-1'>نمونه کارها</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
