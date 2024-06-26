import * as React from 'react';

interface CommentsProps { }

const Comments: React.FunctionComponent<CommentsProps> = () => {
    return (<div className="bg-elo7-grey px-4 lg:px-10 py-14 flex gap-6 flex-wrap">
        <div className="h-[30vh] lg:h-auto w-full lg:flex-1 section-01-bg rounded-xl" />
        <div className="lg:flex-1">
            <div className="font-bold text-2xl">
                Palavra da vendedora
            </div>
            <div className="text-elo7-yellow text-lg font-bold">
                Sed rutrum condimentum
            </div>
            <div className="text-base mt-5">
                Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue neque nulla vehicula purus.
            </div>
        </div>
    </div>);
}

export default Comments;