
const loadAllBlogs = async() => {
    const res = await fetch("http://localhost:5000/blogs", {
        cache: 'no-cache'
    });
    // console.log(res, "Hello from");
    return res.json();
};

export default loadAllBlogs;