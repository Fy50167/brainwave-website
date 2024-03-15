import { notificationImages } from '../constants';

export default function Notification({ className, title }) {
    return (
        <div
            className={`${
                className || ''
            } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-10 rounded-2xl gap-5`}
        >
            <div className='flex-1'>
                <h6 className='bg-1 font-semibold text-base'>{title}</h6>
                <div classname='flex items-center justify-between'>
                    <ul className='flex -m-0.5'>
                        {notificationImages.map((item, index) => (
                            <li
                                key={index}
                                className='flex w-6 border-2 border-n-12 h-6 rounded-full overflow-hidden'
                            >
                                <img
                                    src={item}
                                    className='ww-full'
                                    width={20}
                                    height={20}
                                    alt='item'
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
