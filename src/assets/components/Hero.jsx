import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section id="hero" className="container-fluid">
      <Header />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ backgroundImage: "url(src/assets/images/carousel-1.jpg)" }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div
            className="carousel-item "
            style={{ backgroundImage: "url(src/assets/images/carousel-2.jpg)" }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div
            className="carousel-item "
            style={{ backgroundImage: "url(src/assets/images/carousel-3.jpg)" }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="dummy-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nemo
        vel iste? Maxime alias excepturi, dolores fugiat, assumenda modi harum
        porro facere pariatur, eius minus ipsam recusandae saepe quaerat nulla
        sint debitis? Culpa amet quae sapiente id quam vitae mollitia, maiores,
        temporibus neque voluptatem, laborum at vel nulla repudiandae est
        molestias tenetur reprehenderit reiciendis inventore. Iusto, quam soluta
        maxime dolores non corrupti? Pariatur repellat quod, enim praesentium
        nesciunt blanditiis eligendi, veniam amet beatae id, voluptatibus
        numquam rem aliquid. Pariatur, autem? Tempore, et quia? Animi numquam
        corporis dolorum ipsa consectetur amet dolorem temporibus accusamus
        deserunt quo earum unde quasi, totam quia sed veniam repellat aspernatur
        labore. Est reiciendis quibusdam repudiandae ducimus delectus molestias
        ex cumque facere minima, architecto illo repellendus dolores eveniet
        pariatur illum quae labore voluptate soluta ipsum laborum in inventore
        ullam porro? Eum amet odio delectus, veritatis sit pariatur dolores
        ratione vel ullam doloribus voluptas hic aliquid! Nesciunt molestias
        ratione illum, dignissimos, dicta optio quae tenetur hic ipsam quis
        assumenda modi, sunt pariatur consequatur quidem perferendis adipisci
        animi corrupti in consectetur rem quod odio veritatis neque? Autem
        nostrum officia quos ut asperiores veritatis laudantium quas quis
        perferendis temporibus, quo, esse unde molestiae odio, deserunt cum
        necessitatibus dolore repellendus quam. Veritatis dignissimos voluptas
        atque quia, repudiandae natus harum vel, inventore tenetur veniam
        assumenda, quaerat cum odit corrupti accusamus incidunt. Sunt iure,
        officia ducimus accusamus in quos voluptate veritatis odio fuga eos
        impedit harum consectetur molestias praesentium soluta repellat dolore
        ab tenetur provident incidunt magnam blanditiis! Quae laboriosam fugiat
        voluptatum, dicta ut laudantium sunt perspiciatis, nihil eligendi quis
        rem! Voluptatibus atque saepe eaque blanditiis dicta soluta cupiditate,
        commodi vero nam deleniti id, dolorum exercitationem quasi qui sequi
        repudiandae nulla, nihil assumenda fuga quisquam sapiente? Neque maxime
        optio nihil doloremque sunt laborum dolorum, aspernatur odio placeat
        fugiat, quo, asperiores nesciunt explicabo eaque pariatur voluptatem
        atque est perferendis repudiandae nam dolore quod dolor minus. Quos, est
        numquam. Atque, mollitia, perferendis molestiae veritatis labore natus
        illum odio corrupti delectus nulla autem aspernatur. Expedita, beatae
        inventore. Nulla veritatis eaque ratione culpa libero optio quis
        necessitatibus saepe dolores iusto laborum odio velit, itaque totam
        ullam nesciunt nobis fugit fuga a. Odit quaerat animi eaque esse quia,
        fugit ipsa eum aliquid enim adipisci voluptate accusantium molestias
        cupiditate repudiandae iste nisi sunt quam. Officia magni nihil saepe
        ut? Ad aspernatur ex consectetur velit est. Quibusdam quidem, temporibus
        soluta reiciendis neque asperiores obcaecati, labore molestiae sequi
        inventore dolorem voluptate excepturi alias vel ea nihil quas aperiam
        deleniti similique repellendus! Velit sunt at, ipsa corporis quae facere
        vitae et commodi adipisci minus ipsum temporibus omnis eveniet suscipit
        consequatur voluptatibus eos nemo cumque molestiae voluptas dolores
        inventore veniam quod! Sunt, doloremque! Accusantium, quia. Quisquam
        suscipit atque, pariatur alias voluptates error, aut deserunt excepturi
        itaque debitis tempore harum neque ipsum. Maxime placeat natus porro
        molestiae repudiandae eum, corporis perferendis a velit ex
        necessitatibus beatae sunt facilis repellat non unde tempora alias vero
        dolorum eveniet. Quam est corporis perspiciatis cum temporibus delectus
        vero voluptate esse quia fugit unde, vel quod nostrum illo in!
      </div>
    </section>
  );
}
