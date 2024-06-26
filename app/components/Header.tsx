import Image from 'next/image';
import * as React from 'react';
import ArrowRightIcon from './common/ArrowRightIcon';

interface HeaderProps { }

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (<div className="mb-10">
        <div className="main-header flex items-center justify-center">
            <h1 className='text-[10vw] xl:text-7xl font-bold text-white font-bold'>trabalhe no elo7</h1>
        </div>
        <div className="flex flex-wrap text-center mx-2 xl:mx-14 justify-center">
            <div className="border-b-2 border-slate-200 p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis.
            </div>
            <div className="flex gap-x-2 p-5 justify-self-center text-elo7-green font-bold">
                <a href='#vagas'>vagas em aberto</a>
                <ArrowRightIcon />
            </div>
        </div>
    </div>);
}

export default Header;