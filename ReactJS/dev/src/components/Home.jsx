import img from "./images/djj3.jpg"


function Home() {

  let username = "Jeetu";

  return (
    <>
      <h1>
        when we use js in our react html we can use into the curley brackets
      </h1>
      <h2>{username}</h2>
      <h1>Home component

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, ullam illum, impedit fugit cum quo deleniti quae reiciendis suscipit quaerat maiores voluptates nostrum! Nostrum sunt ipsam obcaecati quod ipsa molestiae?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque facere distinctio sapiente ut tempore unde dolorem quas, ratione et mollitia nesciunt nemo eveniet placeat a nisi. Commodi neque totam dignissimos.
      </h1>
      <img src={img} alt="" width="100%"/>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio alias
        totam reiciendis sed placeat voluptatibus ducimus odit facilis veniam
        deserunt quod, expedita voluptatem, veritatis dolorem ad quasi fuga
        iusto voluptate.
      </p>
    </>
  );
}

export default Home;
