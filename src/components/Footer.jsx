import React from 'react';
import { socials } from '../constants';
import Section from './Section';

const Footer = () => {
    return (
        <Section crosses className='!px-0 !py-10'>
            <div className='container flex sm:justfiy-between justify-center items-center gap-10 max-sm:flex-col'>
                <p className='caption text-n-4 lg:block'>
                    © {new Date().getFullYear()} All rights reserved.
                </p>

                <ul className='flex gap-5 flex-wrap'>
                    {socials.map((item) => (
                        <a
                            key={item.id}
                            href={item.url}
                            target='_blank'
                            className='justify-center rounded-full flex transition-colors items-center hover:bg-n-6 w-10 h-10 bg-n-7'
                        >
                            <img
                                src={item.iconUrl}
                                width={16}
                                height={16}
                                alt={item.title}
                            />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;
