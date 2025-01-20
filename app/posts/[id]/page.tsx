import prisma from '@/db'
import React from 'react'

const page = async({params}) => {
    const post = await prisma.post.findUnique({
        where:{
            id: params.id,
        }
    })
  return (
    <div className='flex flex-col items-center gap-y-5 pt-24 text-center'>
        <h1 className='text-3xl font-semibold'>
            {post?.title}
        </h1>
        <p>{post?.content}</p>
    </div>
  )
}

export default page
