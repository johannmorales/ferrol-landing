import React from "react";
import { useRouter } from "next/router";

import Container from "../../components/general/container/container.component";
import Detail from "../../components/productos/detail";
import Item from "../../components/productos/item";
import FondoProductos from "../../components/fondos/fondo-productos";

function ItemAligned({ name, image, path }) {
  const router = useRouter();

  return (
    <div className="my-4 md:w-1/4 p-4">
      <Item {...{ name, image }} onClick={() => router.push(path)} />
    </div>
  );
}

export default function Productos() {
  return (
    <Container Background={FondoProductos}>
      <span className="text-white text-center block pt-4 mb-2 font-bold text-2xl md:text-5xl">
        NUESTROS PRODUCTOS
      </span>
      <div className="md:flex md:flex-wrap">
        <ItemAligned
          name="KD"
          image="/img/productos/kd-item.jpg"
          path="/productos/kd"
        />
        <ItemAligned
          name="10/30"
          image="/img/productos/1030-item.jpg"
          path="/productos/1030"
        />
        <ItemAligned
          name="Molida gruesa"
          image="/img/productos/molida-gruesa-item.jpg"
          path="/productos/molida-gruesa"
        />
        <ItemAligned
          name="Refinada gruesa"
          image="/img/productos/refinada-gruesa-item.jpg"
          path="/productos/refinada-gruesa"
        />
        <ItemAligned
          name="Molida fina"
          image="/img/productos/molida-fina-item.jpg"
          path="/productos/molida-fina"
        />
        <ItemAligned
          name="Refinada fina"
          image="/img/productos/refinada-fina-item.jpg"
          path="/productos/refinada-fina"
        />
        <ItemAligned
          name="30/80"
          image="/img/productos/3080-item.jpg"
          path="/productos/3080"
        />
        <ItemAligned
          name="Impalpable"
          image="/img/productos/impalpable-item.jpg"
          path="/productos/impalpable"
        />
      </div>
    </Container>
  );
}
