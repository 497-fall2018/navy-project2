import React, { Component } from 'react';
import {Post} from '../Post';
import { connect } from 'react-redux';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';



class PostListComponent extends Component {


  populateItems = () => {
      return _.map((this.props.lorf==="lost") ? this.props.lost : this.props.found, (item, index)=> {
          return (
              <Grid key={index} item>
                <Post name={item['name']} location={item['location']} created={item['created']} description={item['description']}
                      image={item['photo']} lorf={this.props.lorf} reward={item['reward']} question={item['question']}
                 ></Post>
              </Grid>
          )
      });
  }

  render() {

    return (
        <div className="postlist" style={{padding:16}}>
          <Grid container spacing={16} >
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={16}>
                {this.populateItems()}
              </Grid>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </div>
    );
  }
}


export { PostListComponent };

const mapStateToProps = (state, ownProps) => {
    const { post } = state;
    const { lost, found} = post;
    return {
        ...ownProps,
        lost,
        found
    };
};

export const PostList = connect(mapStateToProps, {

})(PostListComponent);
