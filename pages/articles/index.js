import Link from 'next/link'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Api } from '../../lib/graphcms'
import ReactMarkdown from 'react-markdown'

const getQuery = slug => {
  return gql`
    query {
      article(where: {slug: "${slug}"}) {
        id
        slug
        title
        teaser
        publishedOn
        body
      }
    }`
}

const renderBody = ({ id, body }) => (
  <>
    {body.map((section, itemId) => (
      <ReactMarkdown
        key={`${id}-#{index}`}
        source={section} />
    ))}
  </>
)

const renderArticle = article => {
  return (
    <div key={article.id}>
      <h1>{article.title}</h1>

      {renderBody(article)}

      <Link href="/">
        <a href="/">&lt; Back</a>
      </Link>
    </div>
  )
}

const Article = props => {
  return (
    <Api>
      <Query query={getQuery(props.slug)}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>Error :</div>
          return renderArticle(data.article)
        }}
      </Query>
    </Api>
  );
};

Article.getInitialProps = async ({ query }) => {
  return { slug: query.slug }
}

export default Article
