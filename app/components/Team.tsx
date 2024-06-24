import * as React from 'react';
import Image, { StaticImageData } from 'next/image';

import Team1 from '../assets/images/team_01.jpeg';
import Team2 from '../assets/images/team_02.jpeg';
import Team3 from '../assets/images/team_03.jpeg';
import Team4 from '../assets/images/team_04.jpeg';

const IMAGES: StaticImageData[] = [
    Team1, Team2, Team3, Team4
]

interface TeamProps { }

const Team: React.FunctionComponent<TeamProps> = () => {
    return (<div className="px-10 py-14 mb-10 flex-wrap justify-center">
        <div className="flex-1 font-bold text-[30px] mb-6 text-center">Conheça nosso time fora de série</div>
        <div className="flex max-h-[180px] gap-5">
            {IMAGES.map((img, imgIndex) => (
                <div key={`team-image-${imgIndex}`} className="max-w-[25vw]">
                    <Image src={img} alt={'team-' + imgIndex} className='max-h-[25vw] w-auto rounded-xl' />
                </div>
            ))}
        </div>
    </div>);
}

export default Team;