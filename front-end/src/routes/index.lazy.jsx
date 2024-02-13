import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-[#383638] to-[#0B0B0B] pl-12 justify-between flex flex-row'>
      <div className="flex flex-col items-start justify-center gap-y-8 w-">
        <h1 className="text-6xl font-bold text-white">ค้นพบสมาร์ทโฟน Apple ราคาที่คุณเอื้อมถึง</h1>
        <p className="text-[#8B8E99]">ค้นหาผลิตภัณฑ์ Apple ที่ดีที่สุด เชื่อถือได้ และราคาไม่แพงได้ที่นี่ เรามุ่งเน้นที่คุณภาพของผลิตภัณฑ์ คุณจะพบ iPhone ทั้งหมดที่ Apple เคยผลิตได้ที่นี่ สั่งเลย !!!</p>
        <div className="p-2 flex flex-row rounded-xl bg-[#F5F5F7]">
          
          <input className="bg-[#F5F5F7]" type="text" placeholder="ค้นหามือถือที่ดีที่สุด"/><button className="bg-[#3858D6] rounded-xl py-4 px-16 text-white">ค้นหา</button>
        </div>
      </div>
      
      <img src="/iphone_landing.png" alt="" className="place-items-end"/>
    </div>
  )
}