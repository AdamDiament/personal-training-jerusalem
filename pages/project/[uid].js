import { useEffect } from 'react'
import { Client } from '../../prismic-example'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import { fetchAdditionalData } from '../../utils/fetch-additional-data'
import { AdditionalDataProvider } from '../../utils/additional-data-context'
import { useLayout } from '../../utils/layout-context'
import Head from '../../components/Head'
import resolver from '../../sm-resolver.js'

const Project = (props) => {
  const {data} = props;
  const {setHeaderColor} = useLayout();

  useEffect(() => {
    if(data)
      setHeaderColor(data.headercolor)
  }, [data])

  return (
    <>
      <Head data={data} />
      <AdditionalDataProvider value={props.additionalData}>
        <SliceZone {...props} resolver={resolver} />
      </AdditionalDataProvider>
    </>
  )
}

export const queryParams = {
  fetchLinks: [
    'project_category.icon', 
    'project_category.title',
    'project.featured_image',
    'project.title',
    'project.project_category',
    'blog_post.title',
    'blog_post.featured_image',
    'blog_post.date'
  ]
}

export async function getStaticProps({ preview = null, previewData = {}, params }) {
  const client = Client()
  const sliceMachine = useGetStaticProps({
    client,
    params: queryParams,
    type: 'project',
    uid: ({ params }) => params.uid
  })

  const {props} = await sliceMachine({preview, previewData, params})
  const additionalData = await fetchAdditionalData(props.slices);

  return {
    props: {
      ...props,
      additionalData
    }
  }
}

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'project',
  fallback: true,// process.env.NODE_ENV === 'development',
  formatPath: ({ uid }) => ({ params: { uid }})
})

export default Project