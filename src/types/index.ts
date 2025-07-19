import type {
  User,
  Collection,
  SaveItem,
  Tag,
  SaveItemTag,
  UserCreateInput,
  CollectionCreateInput,
  SaveItemCreateInput,
  TagCreateInput,
  SaveItemTagCreateInput,
} from './database'

export type {
  User,
  Collection,
  SaveItem,
  Tag,
  SaveItemTag,
  UserCreateInput,
  CollectionCreateInput,
  SaveItemCreateInput,
  TagCreateInput,
  SaveItemTagCreateInput,
}

export type UserWithCollections = User & {
  collections: Collection[]
}

export type CollectionWithSaveItems = Collection & {
  saveItems: SaveItem[]
}

export type SaveItemWithTags = SaveItem & {
  saveItemTags: (SaveItemTag & {
    tag: Tag
  })[]
}

export type TagWithSaveItems = Tag & {
  saveItemTags: (SaveItemTag & {
    saveItem: SaveItem
  })[]
}
