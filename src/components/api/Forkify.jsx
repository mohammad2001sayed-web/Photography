import axios from "axios";
import { useEffect, useEffectEvent, useState } from "react";
import Card from "./Card";
import Looding from "../looding/looding";

function Forkify() {
  const [alldata, setData] = useState(null);
  async function gitData() {
    const {
      data: { data },
    } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");

    console.log(data);

    setData(data);
  }

  useEffect(function () {
    gitData();
  }, []);

  return (
    <>
      <title>الحمد لله</title>
      <div className="container my-5">
        <div className="row g-4">
          {/* تم التعديل هنا: الخريطة تُمَرَّر مباشرة بدون تعريف دالة */}
          {alldata ? alldata.map((e) => <Card product={e} />) : <Looding />}
        </div>
      </div>{" "}
    </>
  );
}

export default Forkify;
