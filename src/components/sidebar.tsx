'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

// Mock data for collections
const mockCollections = [
  {
    id: '1',
    title: '프로그래밍 팁',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    userId: 'user1',
  },
  {
    id: '2',
    title: '디자인 리소스',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18'),
    userId: 'user1',
  },
  {
    id: '3',
    title: '일상 메모',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-12'),
    userId: 'user1',
  },
  {
    id: '4',
    title: '프로젝트 아이디어',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-08'),
    userId: 'user1',
  },
]

const Sidebar = () => {
  const router = useRouter()

  const handleMoveDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <aside className="text-fontTertiary bg-bgSecondary flex w-[256px] flex-shrink-0 flex-col p-md">
      {/* setting button */}
      <div className="flex h-[72px] items-center justify-center gap-sm">
        <div className="h-8 w-8 bg-amber-600">Btn</div>
        <button onClick={handleMoveDashboard}>username Workspace</button>
      </div>

      {/* list */}
      <div className="flex h-full flex-col overflow-y-auto">
        <div className="py-sm">
          <h3 className="mb-xs text-sm">Collections</h3>
          <div className="space-y-xs">
            {mockCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex cursor-pointer items-center rounded px-md py-sm text-sm transition-colors hover:bg-gray-700"
              >
                <div className="mr-md h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="truncate">{collection.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* setting button */}
      <div className="flex h-[72px] items-center justify-center gap-sm">
        <button className="rounded bg-blue-600 px-lg py-sm text-white transition-colors hover:bg-blue-700">
          Create new Collection
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
