'use client'

import WebEditor from '../../components/WebEditor'

export default function EditPage({ params }: { params: { id: string } }) {
  const initialData = {
    title: '예제 제목',
    content: '예제 내용',
    summary: '예제 요약',
    tags: ['example', 'test'],
  }

  const handleSubmit = async (data: unknown) => {
    console.log('edit', params.id, data)
    // TODO: API 호출
  }

  return (
    <WebEditor mode="edit" initialData={initialData} onSubmit={handleSubmit} />
  )
}
