import { groq } from 'next-sanity'
import { readClient } from './lib/client'
import { buildQuery } from './utils'

interface GetPicturesParams {
  query: string
  category: string
  page: string
}

export const getPictures = async (params: GetPicturesParams) => {
  const { query, category, page } = params

  try {
    const pictures = await readClient.fetch(
      groq`${buildQuery({
        type: 'picture',
        query,
        category,
        page: parseInt(page),
      })}{
                _id,
                title,
                views,
                "image": image.asset->url,
                category
            }`
    )
    return pictures
  } catch (error) {
    console.log(error)
  }
}

export const getPicturesPlaylist = async () => {
  try {
    const pictures = await readClient.fetch(
      groq`*[_type == "picturePlaylist"]{
            _id,
            title,
            pictures[0...6]->{
                _id,
                title,
                views,
                "image": image.asset->url,
                category
            }
        }`
    )
    return pictures
  } catch (error) {
    console.log(error)
  }
}
