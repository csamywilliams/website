import React, { Component } from 'react';
import { Layout } from './BlogPosts.styles';
import { Post } from '../UIComponents/UIComponents';

class BlogPosts extends Component {
 
  render() {

    const posts = [ '1', '2', '3', '4', '5'];

    const postPreviews = posts.map((image, id) => {
      return <Post key={id}></Post>;
    });


    return (
       <Layout>
         { postPreviews }
      </Layout>
    );
  }
 
}

export default BlogPosts;