import Header from "../components/Header";
import Layout from "../components/Layout";
import { useState } from "react";
import MapWrap from "../components/MapWrap";

export default function Home({ data }) {
  const [locationData, setLocationData] = useState({ ...data });

  return (
    <Layout title="IP-Tracker">
      <Header {...locationData} setLocationData={setLocationData} />
      <MapWrap {...locationData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.ipify.org/?format=json");
  const data1 = await res.json();
  const res2 = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_kbPdCKzyvjussFGcZZJFz4vZj2FHI&ipAddress=${data1.ip}`
  );
  const data = await res2.json();
  return {
    props: { data, data1 },
  };
}
