'use client'

import WebEditor from '../components/WebEditor'

const CardCreatePage = () => {
  const handleSubmit = async (data: unknown) => {
    console.log('create', data)
  }

  return (
    <>
      <WebEditor mode="create" onSubmit={handleSubmit} />
    </>
  )
}

export default CardCreatePage
