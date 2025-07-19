import { Prisma } from '../../prisma/client'

// Export all model types from Prisma
export type User = Prisma.UserGetPayload<Record<string, never>>
export type Collection = Prisma.CollectionGetPayload<Record<string, never>>
export type SaveItem = Prisma.SaveItemGetPayload<Record<string, never>>
export type Tag = Prisma.TagGetPayload<Record<string, never>>
export type SaveItemTag = Prisma.SaveItemTagGetPayload<Record<string, never>>

// Export input types for creating/updating
export type UserCreateInput = Prisma.UserCreateInput
export type UserUpdateInput = Prisma.UserUpdateInput
export type CollectionCreateInput = Prisma.CollectionCreateInput
export type CollectionUpdateInput = Prisma.CollectionUpdateInput
export type SaveItemCreateInput = Prisma.SaveItemCreateInput
export type SaveItemUpdateInput = Prisma.SaveItemUpdateInput
export type TagCreateInput = Prisma.TagCreateInput
export type TagUpdateInput = Prisma.TagUpdateInput
export type SaveItemTagCreateInput = Prisma.SaveItemTagCreateInput

// Export select types for querying specific fields
export type UserSelect = Prisma.UserSelect
export type CollectionSelect = Prisma.CollectionSelect
export type SaveItemSelect = Prisma.SaveItemSelect
export type TagSelect = Prisma.TagSelect
export type SaveItemTagSelect = Prisma.SaveItemTagSelect

// Export include types for relations
export type UserInclude = Prisma.UserInclude
export type CollectionInclude = Prisma.CollectionInclude
export type SaveItemInclude = Prisma.SaveItemInclude
export type TagInclude = Prisma.TagInclude
export type SaveItemTagInclude = Prisma.SaveItemTagInclude

// Export where types for filtering
export type UserWhereInput = Prisma.UserWhereInput
export type CollectionWhereInput = Prisma.CollectionWhereInput
export type SaveItemWhereInput = Prisma.SaveItemWhereInput
export type TagWhereInput = Prisma.TagWhereInput
export type SaveItemTagWhereInput = Prisma.SaveItemTagWhereInput
