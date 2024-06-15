import React from 'react'

const Content = () => {
    return (
        <div>
            <main className='container d-flex pt-5 justify-content-between'>
                <div className='w-50 pe-2'>
                    <h1>Header</h1>
                    <h1>Footer</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis repudiandae laborum, quis aliquam necessitatibus recusandae explicabo illo impedit labore! Sit illum accusantium nulla dolorum? Maxime consequuntur incidunt totam sapiente aperiam consectetur quibusdam unde officia voluptates mollitia ullam id, repellat qui ea? Sunt corporis sit quia, non cum ab nisi, facilis iure dolorem modi necessitatibus voluptatum voluptas. Maiores, neque eligendi..</p>
                    <div className='d-flex position-relative'>
                        <div className="circle bg-warning position-absolute"></div>
                        <div className="circle bg-danger position-absolute"></div>
                        <div className="circle bg-primary position-absolute"></div>
                    </div>
                </div>
                <div className="image w-50">
                    <img src="https://th.bing.com/th/id/OIP.A6UhOwd-mhlR3FXdsgLuZQHaEK?rs=1&pid=ImgDetMain" alt="" className='w-100 h-100' />
                </div>
            </main>
        </div>
    )
}

export default Content