import React, {Component, Children} from 'react';

/**
 * All management boards need to have those functions,
 * So this component passes all those functions to it's children
 */
class ManagementBoard extends Component {

  constructor(props) {
   super(props);

   this.state = {
     amountPerPage: 3,
     pageNumber : 1
   }
  }

  navigateToPage = (pageNumber, arr) => {
    arr.fetchMore({
      variables: {
        skip: (pageNumber -1) * this.state.amountPerPage,
        first: this.state.amountPerPage
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return fetchMoreResult;
      }
    })
      .then(_ => {
        this.setState({
          pageNumber
        })
      })
  };

  deleteItem = (id, mutation, arr) => {
    mutation({
      variables: {
        id
      }
    })
      .then(_ => {
        this.setState({
          pageNumber: 1
        });

        arr.refetch({
          first: this.state.amountPerPage,
          skip: 0
        });
      })
      .catch(console.log)
  };

  render() {
    return <div>
      {
        Children.map(this.props.children, (child) =>
          React.cloneElement(child, {
            amountPerPage: this.state.amountPerPage,
            pageNumber: this.state.pageNumber,
            navigateToPage: this.navigateToPage,
            deleteItem: this.deleteItem
          })
        )
      }
    </div>
  }

}

export default ManagementBoard;