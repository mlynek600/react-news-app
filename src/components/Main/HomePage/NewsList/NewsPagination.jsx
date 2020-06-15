import React from "react";
import { Pagination } from "semantic-ui-react";

const NewsPagination = ({ onPageChange, pagesNumber }) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={pagesNumber > 6 ? 6 : pagesNumber}
    onPageChange={(event, data) => onPageChange(data.activePage)}
  />
);

export default NewsPagination;
