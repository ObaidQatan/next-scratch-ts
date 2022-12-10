import type { NextPage } from "next";
import Card from "../src/components/common/Card";

const Home: NextPage = () => {
  return (
    <Card className="rounded-none border-none shadow-none">Hello World</Card>
  );
};

export default Home;
