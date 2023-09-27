import React from 'react';

interface SingleBlogProps {
    params: {
        number: number;
    };
}

const SingleBlog: React.FC<SingleBlogProps> = ({ params: { number } }) => {
    console.log(number);
    return (
        <div>
            SingleBlog
        </div>
    );
};

export default SingleBlog;
