import React from 'react';
import { Button } from 'react-bootstrap';

export default class DetailTabCommentItem extends React.Component {
  state = {
    authedUser: true,
  };

  onCheckUser = () => {
    parseInt(localStorage.getItem('userId'), 10) === this.props.userId
      ? this.setState({
          authedUser: false,
        })
      : this.setState({
          authedUser: true,
        });
  };

  componentDidMount() {
    this.onCheckUser();
  }

  render() {
    const { body, rating, username, date, id, onDelete } = this.props;
    return (
      <React.Fragment>
        <div className="review-list-box">
          <div className="review-date-box">
            <span className="review-date">{date}</span>
          </div>
          <div className="review-reviewer-box">
            <span className="review-viewer">{username}</span>
          </div>
          <div className="review-rate-box">
            <span className="review-rate">{rating}</span>
          </div>
          <div className="review-body-box">
            <span className="review-body">{body}</span>
          </div>
          <div className="review-btn-box">
            <Button
              type="submit"
              bsStyle="primary"
              onClick={e => {
                onDelete(id);
              }}
              disabled={this.state.authedUser}
            >
              DELETE
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
