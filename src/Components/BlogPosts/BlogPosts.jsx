import React, { Component } from 'react';
import { MdDateRange, MdAlarm } from 'react-icons/md';
import { Layout } from './BlogPosts.styles';
import { Post, PostSummary, PostIcon } from '../UIComponents/UIComponents';


import post1 from '../../Assets/Images/post1.jpg';
import post2 from '../../Assets/Images/post2.jpg';
import post3 from '../../Assets/Images/post3.jpg';
import post4 from '../../Assets/Images/post4.jpg';
import post5 from '../../Assets/Images/post5.jpg';

class BlogPosts extends Component {
 
  render() {

    const posts = [ {
        img: post1,
        title: "Dahlia",
        tagline: "A little information about Dahlias, how they grow and what they are like."
      }, {
        img: post2,
        title: "The Veg patch",
        tagline: "A long time ago there was a little veg patch."
      }, {
        img: post3,
        title: "Rose",
        tagline: "A tale as old as time"
      }, {
        img: post4,
        title: "You say potato!",
        tagline: "Can't really believe I just search for a song called 'the potato song'"
      }, {
        img: post5,
        title: "It's time for a forage",
        tagline: "I'm a little hardworking buzzzy bee."
      }
    ];

    const postPreviews = posts.map((post, id) => {
      return (
        <Post key={id} style={ { backgroundImage: `url(${post.img})` } }>
            <PostSummary>
                <h3>{post.title}</h3>
                <p>{post.tagline}</p>
                <PostIcon>
                  <MdDateRange />
                  <span>11.04.2019</span> | <MdAlarm /> <span>1 min read</span>
                </PostIcon>
            </PostSummary>
        </Post>
      );
    });


    return (
       <Layout>
         { postPreviews }
      </Layout>
    );
  }
 
}

export default BlogPosts;