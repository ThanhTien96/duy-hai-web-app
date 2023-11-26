import React from 'react';


const Fanpage = () => {
  return (
    <div className="flex justify-center">
      <div className='w-[100%] lg:w-[80%] h-full lg:h-[450px] overflow-hidden'>
        <iframe
          className="w-full h-full"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNongcohaitratan&tabs=timeline&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1006315314083797"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder={0}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default Fanpage;
