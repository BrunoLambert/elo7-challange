import * as React from 'react';
import Image, { StaticImageData } from 'next/image';

import Benefits1 from '../assets/images/benefit_01.png'
import Benefits2 from '../assets/images/benefit_02.png'
import Benefits3 from '../assets/images/benefit_03.png'
import ArrowRightIcon from './common/ArrowRightIcon';

interface BenefitDataLink {
    url: string,
    text: string
}

interface BenefitsData {
    image: StaticImageData,
    title: string,
    description: string,
    link?: BenefitDataLink
}

const BENEFITS: BenefitsData[] = [
    {
        image: Benefits1,
        title: 'Resultados',
        description: 'Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien.',
    },
    {
        image: Benefits2,
        title: 'Qualidade de vida',
        description: 'Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla.',
        link: {
            text: 'dignissim quis',
            url: 'google.com.br'
        }
    },
    {
        image: Benefits3,
        title: 'Nossos valores',
        description: 'Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien.',
    }
]

interface BenefitsProps { }

const Benefits: React.FunctionComponent<BenefitsProps> = () => {
    return (
        <div className="px-10 py-14 flex justify-around bg-elo7-light-yellow gap-10">
            {BENEFITS.map((benefit, benefitIndex) => (
                <div key={'benefit-' + benefitIndex} className='flex-col flex-1'>
                    <div className="p-6 bg-elo7-dark-yellow w-fit m-auto rounded-full">
                        <Image src={benefit.image} alt={'benefit-' + benefitIndex} />
                    </div>
                    <div className='text-center text-[24px] font-bold my-4'>
                        {benefit.title}
                    </div>
                    <div className='text-center'>
                        {benefit.description}
                    </div>
                    {benefit.link && <div className='mt-4 flex justify-center'>
                        <a href={benefit.link.url} className='text-elo7-green font-bold'>
                            {benefit.link.text}
                        </a>
                        <ArrowRightIcon />
                    </div>}
                </div>
            ))}
        </div>
    );
}

export default Benefits;