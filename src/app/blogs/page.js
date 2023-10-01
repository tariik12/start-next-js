
import Link from 'next/link';
import React from 'react';

const blogs =[
    {
    id:1,
    year:2016,
    title:'title 1'
},
    {
    id:2,
    year:2012,
    title:'title 2'
},
    {
    id:3,
    year:2014,
    title:'title 3'
},
    {
    id:3,
    year:2016,
    title:'title 3'
},

]

const BlogPage = () => {
    return (
        <div>
            {
                blogs.map(({id,title,year}) =><Link className='block border border-r-slate-600 p-3 text-center' key={id} href={{
                    pathname:`/blogs/${year}/${id}`,
                    query:{
                        title:title
                    }
                }}>{title}</Link>)
            }
        </div>
    );
};

export default BlogPage;