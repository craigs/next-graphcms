import moment from 'moment'
import Link from 'next/link'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Api } from '../../lib/graphcms'
import Styles from './index.css'

const GET_POSTS = gql`
  query {
    articles {
      id
      slug
      title
      teaser
      publishedOn
      body
    }
  }
`

const renderArticle = article => {
  const url = `/articles/${article.slug}`

  return (
    <Link key={article.id} as={url} href={`/articles?slug=${article.slug}`}>
      <a href={url} className={Styles.link}>
        <h4>{article.title}</h4>
        <p>{article.teaser}</p>
        <p className={Styles.published}>
          {moment(article.publishedOn).format('MMM D, YYYY')}
        </p>
      </a>
    </Link>
  );
};

const Index = props => {
  return (
    <Api>
      <Query query={GET_POSTS}>
        {({ loading, error, data }) => {
          { data }
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :</div>;
          return data.articles.map(result => renderArticle(result))
        }}
      </Query>
    </Api>
  );
};

export default Index;
