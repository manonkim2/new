'use client'

import React, { useState } from 'react'

const mockSaveItems = [
  {
    id: 'item-1',
    title: 'Next.js 가이드북',
    content:
      'Next.js의 최신 기능과 최적화 기법을 정리했습니다. 빠르게 배우고 실무에 적용하세요.',
    summary: 'Next.js에 대한 요약',
    imageUrl: 'https://via.placeholder.com/300x200',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-06-05'),
    collectionId: '1',
    tags: ['프로그래밍', '웹'],
  },
  {
    id: 'item-2',
    title: 'Figma UI 리소스',
    content:
      'Figma에서 쓸 수 있는 유용한 무료 UI 키트 모음입니다. 디자인 퀄리티를 높이세요.',
    summary: 'Figma 리소스 요약',
    imageUrl: 'https://via.placeholder.com/300x200',
    createdAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-12'),
    collectionId: '2',
    tags: ['디자인', 'UI'],
  },
  {
    id: 'item-3',
    title: '개발 명언 모음',
    content:
      '동기부여가 되는 개발자 명언을 정리했습니다. 매일 한 줄씩 읽어보세요.',
    summary: null,
    imageUrl: null,
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-05-22'),
    collectionId: '3',
    tags: ['마인드셋', '프로그래밍'],
  },
]

const DashboardPage = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const sortedItems = [...mockSaveItems].sort(
    (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime(),
  )

  const allTags = Array.from(new Set(sortedItems.flatMap((item) => item.tags)))

  const filteredItems = activeTag
    ? sortedItems.filter((item) => item.tags.includes(activeTag))
    : sortedItems

  return (
    <div className="p-3xl w-full">
      <div className="mb-6 flex w-full justify-between">
        <div className="flex gap-sm">
          <h1 className="text-4xl">collection title</h1>
          {/* rename, delete */}
          <button>...</button>
        </div>
        <button className="rounded bg-blue-600 px-lg py-sm text-white transition-colors hover:bg-blue-700">
          Create Save Item
        </button>
      </div>

      <div className="mb-4 flex justify-between py-sm">
        {/* tag */}
        <div className="flex flex-wrap gap-sm">
          <button>All</button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded border px-3 py-1 text-sm transition-colors ${
                activeTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        <input placeholder="Input title" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded bg-[#2a2a2a] shadow transition-shadow hover:shadow-lg"
          >
            <img
              src={
                item.imageUrl ||
                'https://via.placeholder.com/300x200?text=No+Image'
              }
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">{item.title}</h2>
              <p className="mb-2 line-clamp-2 text-sm text-gray-300">
                {item.content}
              </p>
              <p className="text-xs text-gray-500">
                Updated at: {item.updatedAt.toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
