
const loadSingleBlog = async(id) => {
 const res = await fetch(`http://localhost:5000/blogs/${id}`, {
    cache:'no-cache'
 });
 return res.json();
};

export default loadSingleBlog;