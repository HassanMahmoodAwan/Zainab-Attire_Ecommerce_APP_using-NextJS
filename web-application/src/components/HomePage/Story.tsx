import React from 'react'

function Story() {
  return (
    <div className='flex w-full justify-center'>
        <div className='w-[90%] h-auto  flex'>
            {/* LEFT-Side */}
            <div className='w-1/2 h-auto space-y-6 pr-10 pt-1'>

                <h1 className="text-xl font-bold text-slate-900">Our Fashion Story</h1>

                <p className='text-sm text-slate-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi necessitatibus dignissimos, aliquid repellendus aperiam, assumenda inventore placeat mollitia ducimus rerum nihil architecto molestias sapiente fugiat dolore quos vel officia maxime eum. Velit accusamus fuga, animi expedita laboriosam maxime quis obcaecati.</p>

                <p className='text-sm text-slate-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro natus dolores deserunt qui odio magni quis, incidunt vel animi nihil? Eos non modi perferendis totam corrupti dignissimos! Alias laborum fugiat aliquid, vel ipsa maiores, eum aspernatur officia qui quis adipisci consequuntur fugit rerum tempora? Suscipit dignissimos minima exercitationem labore delectus.</p>
            </div>
            {/* ========= */}

            {/* Right-Side */}
            <div className='w-1/2 h-auto bg-slate-200'>
                <video autoPlay muted loop controls>
                    <source src='/Videos/Story.mp4' type='video/mp4' />
                </video>
            </div>
            {/* ========== */}
        </div>
      
    </div>
  )
}

export default Story
