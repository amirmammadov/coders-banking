import GetStarted from "@/components/GetStarted/GetStarted";
import Section1 from "@/components/Homepage/section1";
import Section3 from "@/components/Homepage/section3";
import Section4 from "@/components/Homepage/section4";
import Section5 from "@/components/Homepage/section5";
import Section6 from "@/components/Homepage/section6";
import Section7 from "@/components/Homepage/section7";

export default function Home() {
  return (
    <>
      <Section1 />
      <p style={{ textAlign: "center", margin: "120px 0" }}>DASHBOARD</p>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <GetStarted />
    </>
  );
}
