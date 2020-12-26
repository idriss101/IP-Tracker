import Header from "../components/Header";
import Layout from "../components/Layout";
import axios from "axios";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationProvider";

export default function Home({ data }) {
  return (
    <Layout title="IP-Tracker">
      <Header {...data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://geo.ipify.org/api/v1?apiKey=at_kbPdCKzyvjussFGcZZJFz4vZj2FHI&ipAddress=209.226.104.217"
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
