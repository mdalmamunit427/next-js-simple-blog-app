import loadSingleBlog from '@/utilities/loadSingleBlog';
import React from 'react';

const SingleBlog = async ({params}) => {
    // console.log(params.title);
    const {id, title} = await loadSingleBlog(params.id)
    return (
        <div>
            <h2>SingleBlog {id}. {title}</h2>
        </div>
    );
};

export default SingleBlog;