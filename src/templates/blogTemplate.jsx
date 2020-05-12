import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const BlogTemplate = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = data;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div
          className="blog-post-content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default BlogTemplate;
