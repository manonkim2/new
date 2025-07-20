'use client'

import { useState } from 'react'
/**
 * @todo
 * create/edit -> 새로운 페이지 (shallow route)
1. 웹 에디터 : GPT 대화 붙여넣기 또는 직접 작성
   - 타이틀
   - 내용
   - 핵심 내용
   - 태그 (여러개 추가 가능)
2. gpt 요약/제목/태그 추천 기능
   - 추천 버튼 클릭 시 작동 (default off)
   - 기능 작동 시 loading spinner
3. 이미지 추가 (optional)
   - 기본 썸네일
   - Unsplash 검색
-> createdAt, updatedAt DB 저장 (리스트에 정렬기준)
 */

// 2️⃣ DB insert/update API 라우트
// 3️⃣ createdAt, updatedAt 정렬로 리스트 반영
// 4️⃣ GPT 추천 기능 → API로 구현
// 5️⃣ Unsplash API → 검색/선택 컴포넌트

type WebEditorProps = {
  mode: 'create' | 'edit'
  initialData?: {
    title: string
    content: string
    summary: string
    tags: string[]
  }
  onSubmit: (data: {
    title: string
    content: string
    summary: string
    tags: string[]
  }) => void
}

export default function WebEditor({
  mode,
  initialData,
  onSubmit,
}: WebEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [summary, setSummary] = useState(initialData?.summary || '')
  const [tags, setTags] = useState<string[]>(initialData?.tags || [])
  const [tagInput, setTagInput] = useState('')

  const handleAddTag = () => {
    if (!tagInput.trim()) return
    setTags([...tags, tagInput.trim()])
    setTagInput('')
  }

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, content, summary, tags })
  }

  return (
    <form onSubmit={handleSubmit} className="p-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">
        {mode === 'create' ? '새 카드 작성' : '카드 수정'}
      </h1>

      <input
        className="w-full border p-2"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="h-40 w-full border p-2"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <textarea
        className="h-20 w-full border p-2"
        placeholder="핵심 요약"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <div>
        <div className="flex gap-2">
          <input
            className="flex-1 border p-2"
            placeholder="태그 입력"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="border px-3 py-1"
          >
            추가
          </button>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="cursor-pointer rounded bg-gray-200 px-2 py-1"
              onClick={() => handleRemoveTag(tag)}
            >
              #{tag} ✖
            </span>
          ))}
        </div>
      </div>

      {/* 🤖 GPT 추천 */}
      <div className="mt-4 space-y-2">
        <label className="font-semibold">AI 추천</label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={() => {
              // TODO: GPT로 제목 추천
            }}
          >
            제목 추천
          </button>

          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={() => {
              // TODO: GPT로 요약 추천
            }}
          >
            요약 추천
          </button>

          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={() => {
              // TODO: GPT로 태그 추천
            }}
          >
            태그 추천
          </button>
        </div>

        {/* 로딩 스피너 예시 */}
        {/* gptLoading 상태값 true일 때 */}
        {/* <div className="text-sm text-gray-500 flex items-center gap-1">
    <span className="animate-spin">🔄</span> 추천 생성 중…
  </div> */}
      </div>

      {/* 📸 이미지 추가 */}
      <div className="space-y-2">
        <label className="font-semibold">썸네일 이미지</label>

        <div className="flex gap-2">
          <input
            type="file"
            accept="image/*"
            className="flex-1 border p-2"
            onChange={(e) => {
              // TODO: 파일 업로드 처리
            }}
          />
          <button
            type="button"
            className="rounded border px-3 py-1"
            onClick={() => {
              // TODO: Unsplash 검색 모달 띄우기
            }}
          >
            Unsplash 검색
          </button>
        </div>

        {/* 현재 선택된 썸네일 미리보기 */}
        <div className="mt-2">
          <div className="flex h-20 w-32 items-center justify-center bg-gray-100 text-sm text-gray-400">
            미리보기
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {mode === 'create' ? '생성' : '수정'}
      </button>
    </form>
  )
}
