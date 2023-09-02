export const getSinglePostData = async (id: string, setPost) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let data = await res.json();
  console.log(data.id);
  setPost(data);
};
