'use client';

import  {Wrapper}  from "@/components/shared";
import http from "@/http/https";


export default function Home() {
  const fetchData = async () => {
    try {

      const res = await http({
        url: '/Product',
        method: 'GET',
      })
      console.log(res)

    } catch (err) {
      console.log(err)
    }
  }
  fetchData();

  return (
    <Wrapper>
      <div>Homer</div>
    </Wrapper>
  )
}
